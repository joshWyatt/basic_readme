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
var parseHeadersFromArgv = require('./lib/parse_headers_from_argv.js');
var repoName;
var headers;

// see usage.md for Usage prompt
if (argvHasProblems(argv)) printUsageAndExit();

repoName = argv._;
headers = parseHeadersFromArgv(argv);

basicReadme(repoName, headers);