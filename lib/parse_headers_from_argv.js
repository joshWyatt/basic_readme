module.exports = parseHeadersFromArgv;

function parseHeadersFromArgv(argv) {
  var options = Object.keys(argv);
  return options.filter(isLongerThanOneCharacter);
}

function isLongerThanOneCharacter(str) {
  return str.length > 1;
}