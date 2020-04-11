# clintp.xyz

![lint and deploy site](https://github.com/yuhonas/clintp.xyz/workflows/lint%20and%20deploy%20site/badge.svg)

## Getting Started

This is a simple one page bio site that uses [next.js](https://nextjs.org) with some basic CI/CD using [github actions](https://github.com/actions) and a resume built using [latex](https://www.latex-project.org/)

### Prerequisites

### Site

* Node.js 10.x

### Installing

Install all our dependencies

```
$ npm install
```

## Development

To run a local web server for development

```
$ npm run dev
```

## Running the tests


The site is tested using [cypress](https://www.cypress.io/)

```
$ npm run ci:test
```

For other tasks see [package.json](./package.json)


## Deployment


This site is automatically built and deployed by [github actions](https://github.com/actions) to [Github Pages](https://pages.github.com/)

