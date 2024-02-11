import luigi
import json
import segno
from segno import helpers
from urllib.request import urlopen, urlparse
from PIL import Image
import subprocess


class ExtractResume(luigi.Task):
    output_file = luigi.Parameter(default='resume.clintp.json')

    def run(self):
        pass

    def output(self):
        return luigi.LocalTarget(self.output_file)


class FetchAndConvertProfileImage(luigi.Task):
    def requires(self):
        return {
            'resume': ExtractResume()
        }

    def run(self):
        resume = json.load(open(self.input()['resume'].path))
        profile_image = urlopen(resume['basics']['image'])

        image = Image.open(profile_image).quantize(
            colors=256, method=2).convert('RGB')
        pixelated = image.resize((40, 40)).resize(image.size, Image.NEAREST)

        pixelated.save(self.output().path)

    def output(self):
        return luigi.LocalTarget("build/clintp.gif")


class GenerateWordDocument(luigi.Task):
    def requires(self):
        return {
            'resume': ExtractResume()
        }

    def run(self):
        # run the nodejs script parser.js
        # this script will take the resume.json file and generate a word document
        subprocess.run(["node", "docxtemplater.js", "./resume-template.docx", self.input()[
                       'resume'].path, self.output().path])

    def output(self):
        return luigi.LocalTarget("build/resume.clintp.docx")


class GenerateQrCode(luigi.Task):
    def requires(self):
        return {
            'resume': ExtractResume(),
            'profile_image': FetchAndConvertProfileImage()
        }

    def run(self):
        # access the resume that was generated in a previous task

        resume = json.load(open(self.input()['resume'].path))
        # parse the site_url and remove the protocol as it's included for some reason in the qrcode

        parsed_url = urlparse(resume['basics']['url'])
        url_without_protocol = parsed_url.netloc + parsed_url.path

        qrcode = helpers.make_mecard(name=resume['basics']['name'],
                                     email=(resume['basics']['email']),
                                     url=url_without_protocol)

        qrcode.to_artistic(background=self.input()['profile_image'].path,
                           target=self.output().path, scale=5)

    def output(self):
        return luigi.LocalTarget("build/clintp-qrcode.gif")


class GenerateTimeline(luigi.Task):
    """
    A Luigi task that generates a timeline JSON file based on the resume data.

    See https://timeline.knightlab.com/docs/json-format.html

    The timeline JSON file contains information about the work experience, including the start date, job position,
    description, and associated media such as logos and images.

    This task requires the 'ExtractResume' task to be completed before it can run.

    The generated timeline JSON file is saved to the 'build/timeline.json' file.
    """

    def requires(self):
        return {
            'resume': ExtractResume()
        }

    def run(self):
        # access the resume that was generated in a previous task

        resume = json.load(open(self.input()['resume'].path))

        timeline = {
            'title': {
                'media': {
                    'url': resume['basics']['image'],
                    'caption': resume['basics']['name']
                },
                'text': {
                    'headline': resume['basics']['name'],
                    'text': resume['basics']['summary']
                }
            },
            'events': []
        }

        # enumerate through the work experience and add to the timeline
        for index, job in enumerate(resume['work']):
            # break the url into just the domain name
            job_domain = urlparse(job['url']).netloc

            timeline['events'].append({
                'start_date': {
                    'year': job['startDate'].split('-')[0]
                },
                'end_date': {
                    'year': job['endDate'].split('-')[0]
                },
                'text': {
                    'headline': job['position'] + ' (' + job['name'] + ')',
                    'text': job['description']
                },
                "media": {
                    "url": 'https://logo.clearbit.com/' + job_domain,
                    "caption": job['name']
                }
            })

            # convert the timeline to json and write to a file
            with open(self.output().path, 'w') as f:
                f.write(json.dumps(timeline, indent=2))

    def output(self):
        return luigi.LocalTarget("build/timeline.json")


if __name__ == "__main__":
    luigi.build([GenerateTimeline(), GenerateQrCode(), GenerateWordDocument()],
                workers=1, local_scheduler=True)
