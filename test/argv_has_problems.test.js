var test = require('tape');
var argvHasProblems = require('../lib/argv_has_problems.js');

test('argv_has_problems.js', function(t){
  t.plan(3);

  // see `index.js` and `minimist` docs for more details on how arguments
  // are passed into `argvHasProblems`
  var zeroArguments = { _: [] };
  var oneArgument = { _: ['module_name'] };
  var twoArguments = { _: ['module_name', 'mistake'] };

  t.ok(argvHasProblems(zeroArguments), 'it should not accept zero arguments');
  t.notOk(argvHasProblems(oneArgument), 'it should accept one argument');
  t.ok(argvHasProblems(twoArguments), 'it should not accept two or more arguments');

});