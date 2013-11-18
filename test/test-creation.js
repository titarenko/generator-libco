/*global describe, beforeEach, it*/
'use strict';

var path    = require('path');
var helpers = require('yeoman-generator').test;


describe('libco generator', function () {
  beforeEach(function (done) {
    helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
      if (err) {
        return done(err);
      }

      this.app = helpers.createGenerator('libco:app', [
        '../../app'
      ]);
      done();
    }.bind(this));
  });

  it('creates expected files', function (done) {
    var expected = [
      '.gitignore',
      '.gitattributes',
      '.travis.yml',
      'README.md',
      'package.json'
    ];

    helpers.mockPrompt(this.app, {
      'name': 'libco',
      'author': 'author',
      'authorName': 'authorName',
      'description': 'description',
      'keywords': '"keyword"'
    });
    this.app.options['skip-install'] = true;
    this.app.run({}, function () {
      helpers.assertFiles(expected);
      done();
    });
  });
});
