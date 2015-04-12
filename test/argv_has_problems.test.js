var test = require('tape');
var argvHasProblems = require('../lib/argv_has_problems.js');

test('lib/argv_has_problems.js', function(t){
  t.plan(5);

  // see `index.js` and `minimist` docs for more details on how arguments
  // are passed into `argvHasProblems`
  var zeroArguments = { _: [] };
  var oneArgument = { _: ['module_name'] };
  var twoArguments = { _: ['module_name', 'mistake'] };
  var validOptions = {
    _: ['module_name'],
    d: true,
    m: true,
    e: true,
    i: true,
    l: true
  };
  var invalidOptions = {
    _: ['module_name'],
    y: true,
    a: true,
    m: true,
    o: true,
    m: true,
    s: true
  };

  t.ok(argvHasProblems(zeroArguments), 'it should not accept zero arguments');
  t.notOk(argvHasProblems(oneArgument), 'it should accept one argument');
  t.ok(argvHasProblems(twoArguments), 'it should not accept two or more arguments');
  t.notOk(argvHasProblems(validOptions), 'it should accept the valid options');
  t.ok(argvHasProblems(invalidOptions), 'it should not accept any invalid options');
});