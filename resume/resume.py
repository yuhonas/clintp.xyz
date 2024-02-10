from prefect import flow, task
import json


@task
def extract():
    with open("resume.clintp.json", "r") as f:
        return json.load(f)


@task(persist_result=True)
def transform(resume):
  # split the name into first and last
   first_name, last_name = resume["basics"]["name"].split(" ", 1)
   email= resume["basics"]["email"]

   return [
        'BEGIN:VCARD',
        'VERSION:2.1',
        f'N:{last_name};{first_name}',
        f'FN:{first_name} {last_name}',
        f'EMAIL;PREF;INTERNET:{email}',
        f'REV:1',
        'END:VCARD'
    ]

@flow
def transform_resume():
    resume = extract()
    print(transform(resume))


if __name__ == "__main__":
    transform_resume()
