# clintp.xyz - my bio site &nbsp;[![test, build and deploy site](https://github.com/yuhonas/clintp.xyz/actions/workflows/ci.yml/badge.svg)](https://github.com/yuhonas/clintp.xyz/actions/workflows/ci.yml)

## Getting Started

This is a simple one page bio site that uses [astro](https://astro.build/) with some basic CI/CD using [github actions](./.github/workflows/ci.yml). The site & resume are built from a single [resume.clintp.json](./resume/resume.clintp.json) that conforms to [JSON Resume](https://jsonresume.org/)


To further explore the resume data you can use [jsoncrack.com](https://jsoncrack.com/editor?json=https://raw.githubusercontent.com/yuhonas/clintp.xyz/main/resume/resume.clintp.json) or [lite.datasette.io](https://lite.datasette.io/?json=https://raw.githubusercontent.com/yuhonas/clintp.xyz/main/resume/resume.clintp.json#/data/resume?_sort=rowid&_facet=name&_facet=location)

### Prerequisites

* Node.js 18.x
* npm 10.x

### Installing

Install dependencies

```
npm install
```

## Development

To run a local web server for development

```
npm run dev
```

## Running linting & the tests

```
npm run test
```

## Transforming the resume

From the `resume` directory run

```
pipenv run python resume-transform.py
```

This will produce a number of build artifacts in the `resume/build` directory

## Deployment


This site is automatically built and deployed by [github actions](https://github.com/actions) to [Github Pages](https://pages.github.com/)


## Building for deployment

To build a static version of the site run

```
npm run build
```

## Building the resume

My resume is built using [docxtemplater](https://docxtemplater.com/) it's optimized for [Applicant Tracking Systems (ATS)](https://en.wikipedia.org/wiki/Applicant_tracking_system)

```
npm run build:resume:
```



## Top repos
```bash
curl -L \
  -H "Accept: application/vnd.github+json" \
  -H "X-GitHub-Api-Version: 2022-11-28" \
  https://api.github.com/users/yuhonas/repos | jq '[sort_by(.stargazers_count) | reverse | limit(4; .[])]'
```

## TODO
- [ ] Dynamically generate PDF
- [ ] Implement JSON Source View - https://mac-s-g.github.io/react-json-view/demo/dist/

## Links
* https://github.com/gauravghongde/social-icons
* https://www.svgrepo.com/svg/342086/open-source-initiative
* https://www.qr-code-generator.com/solutions/vcard-qr-code/
* https://github.com/anna-geller/prefect-getting-started
* https://logo.clearbit.com/goat.com

