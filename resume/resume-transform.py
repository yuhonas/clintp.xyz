import luigi
import json
import segno
from segno import helpers
from urllib.request import urlopen, urlparse
from PIL import Image


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


if __name__ == "__main__":
    luigi.build([GenerateQrCode()], workers=1, local_scheduler=True)
