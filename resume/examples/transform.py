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
        # Simulating JSON extraction, replace this with actual code to read JSON
        # data = [
        #     {"id": 1, "name": "Alice"},
        #     {"id": 2, "name": "Bob"},
        #     {"id": 3, "name": "Charlie"}
        # ]
        # with open(self.output_file, 'w') as f:
        #     json.dump(data, f)

    def output(self):
        return luigi.LocalTarget(self.output_file)


class ConvertProfileImage(luigi.Task):
    def requires(self):
        return ExtractResume()

    def run(self):
        resume = json.load(open(self.input().path))
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
        return ExtractResume()

    def run(self):
        resume = json.load(open(self.input().path))
        profile_image = urlopen(resume['basics']['image'])

        # download profile image to temporary file so we can work on it
        with open('clintp.jpg', 'wb') as f:
            f.write(profile_image.read())

        image = Image.open('clintp.jpg').quantize(
            colors=256, method=2).convert('RGB')
        # print(image)

        # using python convert my profile_image to gif
        # profile_image = Image.open(profile_image)
        image_tiny = image.resize((40, 40))
        # resizing the smaller image to the original size
        pixelated = image_tiny.resize(image.size, Image.NEAREST)

        pixelated.save('clintp.gif')

        # parse the site_url and remove the protocol as it's included for some reason in the qrcode
        parsed_url = urlparse(resume['basics']['url'])
        url_without_protocol = parsed_url.netloc + parsed_url.path

        qrcode = helpers.make_mecard(name=resume['basics']['name'],
                                     email=(resume['basics']['email']),
                                     url=url_without_protocol)

        qrcode.to_artistic(background='clintp.gif',
                           target=self.output().path, scale=5)

        # qrcode.save(self.output().path, scale=4, background=)
        # TaskA logic here
        # result = json.load(open(self.input().path))
        # print(result['basics']['name'])
        # first_name, last_name = result["basics"]["name"].split(" ", 1)
        # email = result['basics']['email']

        # card = [
        #     'BEGIN:VCARD',
        #     'VERSION:2.1',
        #     f'N:{last_name};{first_name}',
        #     f'FN:{first_name} {last_name}',
        #     f'EMAIL;PREF;INTERNET:{email}',
        #     f'REV:1',
        #     'END:VCARD'
        # ]

        # # write card to output
        # with open(self.output().path, 'w') as f:
        #     f.write('\n'.join(card))

    def output(self):
        return luigi.LocalTarget("qrcode-clintp.gif")


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
