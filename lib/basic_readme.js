var fs = require('fs');

module.exports = basicReadme;
  
function basicReadme(repoName, headers) {
  var filePath = process.cwd();
  var readmeContent = '#' + repoName;

  headers.forEach(function addHeaderToReadme(header) {
    readmeContent += '\n\n#' + header;
  });

  readmeContent += '\n';

  fs.writeFileSync(filePath + '/README_TEST.md', readmeContent);
}