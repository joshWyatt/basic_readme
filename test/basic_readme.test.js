var test = require('tape');
var async = require('async');
var fileExists = require('file-exists');
var basicReadme = require('../lib/basic_readme.js');
var fs = require('fs');

async.series([runBasicReadme, testBasicReadme], cleanUp);

function runBasicReadme(cb) {

  var options = {
    moduleName: 'test_module',
    description: 'mock description text',
    filePath: __dirname
  };

  basicReadme(options);
  cb();
}

function testBasicReadme(cb) {
  test('lib/basic_readme.js', function(t){
    var pathToREADME = __dirname + '/README.md';
    t.plan(3);

    var README = fs.readFileSync(pathToREADME);
    var moduleNamePattern = /#test_module/;

    t.pass('it should start without errors');
    t.ok(fileExists(pathToREADME), 'it should create a README.md');
    t.ok(moduleNamePattern.test(README));

    cb();
  });
}

function cleanUp(err) {
  if (err) throw err;

  fs.unlinkSync(__dirname + '/README.md');
}