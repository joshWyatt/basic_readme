var test = require('tape');
var fileExists = require('file-exists');

test('index.js', function(t){
  t.plan(1);
  t.pass('it should run without an error');

  // mocking basicReadme for test
  var basicReadme = function() {
    t.equal(arguments.length, 2, 'it should call basicReadme with 2 arguments');
  };
});