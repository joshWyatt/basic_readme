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
var printUsageAndExit = require('print_usage');

if (argvHasProblems(argv)) printUsageAndExit('use it right');

var basicReadme = require('./lib/basic_readme.js');

var options = {};
options.moduleName = process.argv[2];

// basicReadme(options);
