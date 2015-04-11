var fs = require('fs');

module.exports = basicReadme;
  
function basicReadme(options) {
  var filePath = options.filePath || process.cwd();

  fs.writeFileSync(filePath + '/README.md');
};