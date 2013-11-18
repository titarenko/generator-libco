'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');

var ModuleGenerator = module.exports = function ModuleGenerator(args, options, config) {
  yeoman.generators.NamedBase.apply(this, arguments);
};

util.inherits(ModuleGenerator, yeoman.generators.NamedBase);

ModuleGenerator.prototype.files = function files() {
  this.template('_Module.coffee', "modules/" + this.name + ".coffee");
  this.template('_Test.coffee', "tests/modules/" + this.name + "Tests.coffee");
};
