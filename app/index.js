'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');


var LibcoGenerator = module.exports = function LibcoGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

  this.on('end', function () {
    this.installDependencies({ skipInstall: options['skip-install'] });
  });

  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(LibcoGenerator, yeoman.generators.Base);

LibcoGenerator.prototype.askFor = function askFor() {
  var cb = this.async();

  console.log(this.yeoman);

  var prompts = [{
    name: 'name',
    message: 'Library name (for example, super-library)'
  }, {
    name: 'author',
    message: 'Author nickname (for example, awesome-author)'
  }, {
    name: "authorName",
    message: "Author name (for example, Awesome Author)"
  }, {
    name: "description",
    message: "Project description (for example, The most awesome thing you've ever seen!)"
  }, {
    name: "keywords",
    message: "Keywords (for example, \"keyword one\", \"keyword two\")"
  }];

  this.prompt(prompts, function (props) {
    this.name = props.name;
    this.author = props.author;
    this.authorName = props.authorName;
    this.description = props.description;
    this.keywords = props.keywords;
    cb();
  }.bind(this));
};

LibcoGenerator.prototype.lib = function lib() {
  this.mkdir('modules');
  this.mkdir('tests/modules');
  this.mkdir('tests/data')
  this.template('_package.json', 'package.json');
  this.copy('gitignore', '.gitignore');
  this.copy('gitattributes', '.gitattributes');
  this.copy('travis.yml', '.travis.yml');
  this.template("_README.md", "README.md");
  this.copy('Log.coffee', 'modules/Log.coffee');
};
