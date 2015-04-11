var test = require('tape');
var async = require('async');
var fileExists = require('file-exists');
var basicReadme = require('../lib/basic_readme.js');
var fs = require('fs');

async.series([runBasicReadme, testBasicReadme], cleanUp);

function runBasicReadme(cb) {

  var options = {
    moduleName: 'test_module',
    description: 'This is just a test module for running tests with',
    filePath: __dirname
  };

  basicReadme(options);
  cb();
}

function testBasicReadme(cb) {
  test('lib/basic_readme.js', function(t){
    t.plan(2);

    t.pass('it should start without errors');
    t.ok(fileExists(__dirname + '/README.md'), 'it should create a README.md');
    
    cb();
  });
}

function cleanUp(err) {
  if (err) throw err;

  fs.unlinkSync(__dirname + '/README.md');
}