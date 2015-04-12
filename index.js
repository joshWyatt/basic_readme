#!/usr/bin/env node

var basicReadme = require('./lib/basic_readme.js');
var argv = require('minimist')(process.argv.slice(2), {
  alias: {
    d: 'Description',
    m: 'Methods',
    e: 'Example',
    i: 'Install',
    l: 'License'
  }
});

var argvHasProblems = require('./lib/argv_has_problems.js');
var printUsageAndExit = require('print_usage');
var parseOptionsFromArgv = require('./lib/parse_options_from_argv.js')
var options;

// see usage.md for Usage prompt
if (argvHasProblems(argv)) printUsageAndExit();

// options = parseOptionsFromArgv

// basicReadme(options);
