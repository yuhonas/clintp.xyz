from TexSoup import TexSoup
from TexSoup.data import RArg
from collections import namedtuple
import re

ResumeEntry = namedtuple('ResumeEntry', 'date_location title company achievements')

def parser(path):
    file_handle = open(path,'r')

    soup = TexSoup(file_handle)

    experience_section = list(soup.find_all('cvsect'))[1]

    company_achievements = {}

    for entry in experience_section.entrylist.find_all('entry'):
        date_location, title, company, achievements = entry.args

        cleaned_achievements = achievements.value.strip()
        cleaned_achievements = cleaned_achievements.replace("\&", "&")
        cleaned_achievements = re.sub(r"\s\s+", ' ', cleaned_achievements)
        cleaned_achievements = cleaned_achievements.replace("\\par\medskip ", "\n\n")

        # yield ResumeEntry(date_location.value, title.value, company.value, cleaned_achievements)
        yield {'date_location': date_location.value, 'title': title.value, 'company':
                company.value, 'achievements': cleaned_achievements}
