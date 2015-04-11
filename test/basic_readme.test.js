var test = require('tape');
var async = require('async');
var fileExists = require('file-exists');
var basicReadme = require('../lib/basic_readme.js');

test('lib/basic_readme.js', function(t){
  t.plan(1);

  var options = {
    moduleName: 'test_module',
    description: 'This is just a test module for running tests with';
  };

  basicReadme(options);
  t.pass('it should start without errors');
  
});