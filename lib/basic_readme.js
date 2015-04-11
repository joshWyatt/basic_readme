var fs = require('fs');

module.exports = basicReadme;
  
function basicReadme(options) {
  var filePath = options.filePath || process.cwd();
  var readmeContent = '#' + options.moduleName;

  fs.writeFileSync(filePath + '/README.md', readmeContent);
}