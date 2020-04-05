# clintp.xyz

![lint and deploy site](https://github.com/yuhonas/clintp.xyz/workflows/lint%20and%20deploy%20site/badge.svg)

## Getting Started

This is a simple one page bio site that uses [jekyll](https://jekyllrb.com) with some basic CI/CD using [travis-ci](https://travis-ci.org/)

### Prerequisites

* Ruby 2.7 see [ruby-version](./.ruby-version)


### Installing

Install all our dependencies

```
$ bundle install
```

## Running the tests


The site can be built and linted using [html-proofer](https://github.com/gjtorikian/html-proofer) using

```
$ bundle exec rake ci:lint
```

For other Rake tasks see [Rakefile](./Rakefile)


## Deployment


This site is automatically built and deployed by [Travis CI](https://travis-ci.org/) to [Github Pages](https://pages.github.com/) see also [travis.yml](./.travis.yml)

