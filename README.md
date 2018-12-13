# clintp.xyz

[![Build Status](https://travis-ci.com/yuhonas/clintp.xyz.svg?branch=master)](https://travis-ci.com/yuhonas/clintp.xyz)


## Getting Started

This is a simple one page bio site that uses [jekyll](https://jekyllrb.com) with some basic CI/CD using [travis-ci](https://travis-ci.org/) 

### Prerequisites

* Ruby 2.5 see [./ruby-version](.ruby-version)


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

For other Rake tasks see [./Rakefile](Rakefile)


## Deployment


This site is automatically built and deployed by [Travis CI](https://travis-ci.org/) to [Github Pages](https://pages.github.com/) see also [./travis.yml](travis.yml)

