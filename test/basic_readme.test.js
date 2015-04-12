var test = require('tape');
var async = require('async');
var fileExists = require('file-exists');
var basicReadme = require('../lib/basic_readme.js');
var fs = require('fs');

async.series([runBasicReadme, testBasicReadme], cleanUp);

function runBasicReadme(cb) {

  var _cwd = process.cwd;

  process.cwd = function() {
    return __dirname;
  };

  var repoName = 'test_repo';
  var headers = ['Description', 'Methods'];

  basicReadme(repoName, headers);
  process.cwd = _cwd;
  cb();
}

function testBasicReadme(cb) {
  test('lib/basic_readme.js', function(t){
    var pathToReadme = __dirname + '/README.md';
    t.plan(5);

    var readme = fs.readFileSync(pathToReadme);
    var repoNamePattern = /#test_repo/;
    var descriptionHeaderPattern = /#Description/;
    var methodsHeaderPattern = /#Methods/;

    t.pass('it should start without errors');
    t.ok(fileExists(pathToReadme), 'it should create a Readme.md');
    t.ok(repoNamePattern.test(readme), 'it should write the repo name as an H1');
    t.ok(descriptionHeaderPattern.test(readme), 'it should write \'Description\' as an H1');
    t.ok(descriptionHeaderPattern.test(readme), 'it should write \'Methods\' as an H1');

    cb();
  });
}

function cleanUp(err) {
  if (err) throw err;

  fs.unlinkSync(__dirname + '/README.md');
}