# clintp.xyz - my bio site &nbsp;![test, build and deploy site](https://github.com/yuhonas/clintp.xyz/workflows/test,%20build%20and%20deploy%20site/badge.svg)

## Getting Started

This is a simple one page bio site that uses [Next.js](https://nextjs.org/) with some basic CI/CD using [github actions](./.github/workflows/ci.yml). The site & resume are built from a single JSON file [resume.clintp.json](./resume/resume.clintp.json) that conforms to [JSON Resume](https://jsonresume.org/)



### Prerequisites

* Node.js 20.x

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

## Deployment


This site is automatically built and deployed by [github actions](https://github.com/actions) to [Github Pages](https://pages.github.com/)


## Building the resume

My resume is built using [docxtemplater](https://docxtemplater.com/) it's optimized for [Applicant Tracking Systems (ATS)](https://en.wikipedia.org/wiki/Applicant_tracking_system)

```
npm run build:resume:
```


## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Top repos
```bash
curl -L \
  -H "Accept: application/vnd.github+json" \
  -H "X-GitHub-Api-Version: 2022-11-28" \
  https://api.github.com/users/yuhonas/repos | jq '[sort_by(.stargazers_count) | reverse | limit(4; .[])]'
```

## TODO
Add timeline - https://matplotlib.org/stable/gallery/lines_bars_and_markers/timeline.html

## Links
* https://github.com/gauravghongde/social-icons
* https://www.svgrepo.com/svg/342086/open-source-initiative
