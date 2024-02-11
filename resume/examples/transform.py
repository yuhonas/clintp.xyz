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


class ConvertProfileImage(luigi.Task):
    def requires(self):
        return {
            'resume': ExtractResume()
        }

    def run(self):
        resume = json.load(open(self.input()['resume'].path))
        profile_image = urlopen(resume['basics']['image'])

        with open('clintp.jpg', 'wb') as f:
            f.write(profile_image.read())

        image = Image.open('clintp.jpg').quantize(
            colors=256, method=2).convert('RGB')

        image_tiny = image.resize((40, 40))
        # resizing the smaller image to the original size
        pixelated = image_tiny.resize(image.size, Image.NEAREST)

        pixelated.save(self.output().path)

    def output(self):
        return luigi.LocalTarget("clintp.gif")


class TaskA(luigi.Task):
    def requires(self):
        return {
            'resume': ExtractResume(),
            'profile_image': ConvertProfileImage()
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
        return luigi.LocalTarget("clintp-qrcode.gif")


class TaskB(luigi.Task):
    def requires(self):
        return TaskA()

    def run(self):
        # TaskB logic here
        vcard_data = open(self.input().path).read()

        qr = qrcode.QRCode(
            version=1,
            error_correction=qrcode.constants.ERROR_CORRECT_L,
            box_size=10,
            border=4,
        )
        qr.add_data(vcard_data)
        qr.make(fit=True)

        img = qr.make_image(fill_color="#61418E", back_color="transparent")

        img.save(self.output().path)

        print("TaskB completed")

    def output(self):
        return luigi.LocalTarget("clintp.png")


# class TaskC(luigi.Task):
#     def requires(self):
#         return TaskA()

#     def run(self):
#         # TaskC logic here
#         print("TaskC completed")


# class TaskD(luigi.Task):
#     def requires(self):
#         return [TaskB(), TaskC()]

#     def run(self):
#         # TaskD logic here
#         print("TaskD completed")


if __name__ == "__main__":
    # luigi.build([TaskD()], workers=1, local_scheduler=True)
    luigi.build([TaskA()], workers=1, local_scheduler=True)
