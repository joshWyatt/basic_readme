module.exports = argvHasProblems;

function argvHasProblems(argv) {
  if (argvModuleNameHasProblems(argv) || argvHasInvalidFlags(argv)) {
    return true;
  }
  else return false;
}

function argvModuleNameHasProblems(argv) {
  if (argv._.length !== 1) return true;
  else return false;
}

function argvHasInvalidFlags(argv) {
  var validFlags = {
    '_': true,
    'd': true,
    'description': true,
    'm': true,
    'methods': true,
    'e': true,
    'example': true,
    'i': true,
    'install': true,
    'l': true,
    'license': true
  };

  var providedFlags = Object.keys(argv);
  var hasInvalidFlags = false;

  providedFlags.forEach(function(flag) {
    if (!validFlags[flag]) hasInvalidFlags = true;
  });
  return hasInvalidFlags;
}