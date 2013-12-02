# generator-libco [![Build Status](https://secure.travis-ci.org/titarenko/generator-libco.png?branch=master)](https://travis-ci.org/titarenko/generator-libco) [![Code Climate](https://codeclimate.com/github/titarenko/generator-libco.png)](https://codeclimate.com/github/titarenko/generator-libco) [![Coverage Status](https://coveralls.io/repos/titarenko/generator-libco/badge.png)](https://coveralls.io/r/titarenko/generator-libco)

[![NPM](https://nodei.co/npm/generator-libco.png?downloads=true&stars=true)](https://nodei.co/npm/generator-libco/)

A generator for [Yeoman](http://yeoman.io) intended to do tedious repetitive work instead of you while creating library projects (written in CoffeeScript).

## Purpose

### yo libco

This generator creates following folders:

* modules
* tests/data
* tests/modules

It also creates following files:

* modules/Log.coffee
* tests/data/data.txt
* .gitattributes
* .gitignore
* .travis.yml
* README.md
* package.json 

`Package.json` is fully initialized including `test` NPM task which runs all tests with coverage report generation at the end.

### yo libco:module `MyEntity`

This subgenerator creates following files:

* modules/MyEntity.coffee
* tests/modules/MyEntityTests.coffee

## Getting Started

Install `generator-libco` using [NPM](http://npmjs.org)
```
npm install generator-libco -g
```

Create folder for your project
```
mkdir mylib && cd $_
```

Run `libco` generator
```
yo libco
```

Once library skeleton is generated, start module (unit) creation
```
yo libco:module Entity
```

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
