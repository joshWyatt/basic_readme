var test = require('tape');
var parseHeadersFromArgv = require('../lib/parse_headers_from_argv.js');

test('../lib/parse_headers_from_argv.js', function(t){
  t.plan(2);
  t.pass('it should run without error');

  var argv = {
    '_': true,
    'd': true,
    'Description': true,
    'm': true,
    'Methods': true,
    'e': true,
    'Example': true,
    'i': true,
    'Install': true,
    'l': true,
    'License': true
  };

  var options = parseHeadersFromArgv(argv);
  var expectedOptions = ['Description', 'Methods', 'Example', 'Install', 'License'];

  t.equal(options.join(), expectedOptions.join(), 'it should return an array of headers');
});