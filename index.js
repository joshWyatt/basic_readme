#!/usr/bin/env node

var argv = require('minimist')(process.argv.slice(2), {
  alias: {
    d: 'description',
    m: 'methods',
    e: 'example',
    i: 'install',
    l: 'license'
  }
});

var argvHasProblems = require('./lib/argv_has_problems.js');

console.log(argv._.length);
if (argvHasProblems(argv)) {
  console.log('print usage here when I have wifi');
} else {
  console.log('argv does not have problems');
}

var basicReadme = require('./lib/basic_readme.js');

var options = {};
options.moduleName = process.argv[2];

// basicReadme(options);
