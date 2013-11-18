# generator-libco [![Build Status](https://secure.travis-ci.org/titarenko/generator-libco.png?branch=master)](https://travis-ci.org/titarenko/generator-libco)

A generator for [Yeoman](http://yeoman.io) intended for library project (written in CoffeeScript) skeleton generation in order to reduce tedious repetitive work.

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

Package.json is fully initialized including `test` NPM task which runs all tests with coverage report generation at the end.

### yo libco:module <name>

This subgenerator creates following files:

* modules/<name>.coffee
* tests/modules/<name>Tests.coffee

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
