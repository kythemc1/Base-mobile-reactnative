/**
 * @flow
 */
const path = require('path');
const fs = require('fs');
const argv = require('yargs-parser')(process.argv.slice(2));
//$FlowFixMe
String.prototype.format = function () {
    let a = this;
    for (let k in arguments) {
        //$FlowFixMe
        a = a.replace(('{' + k + '}').toRegex('g'), arguments[k]);
    }
    return a;
};
//$FlowFixMe
String.prototype.toRegex = function (option = 'i') {
    let regexStr = this.replace(/[\.\*\+\?\^\$\{\}\(\)\|\[\]\\]/g, '\\$&');
    regexStr = regexStr.replace(/\s/g, '\\s?');
    // console.log('regex: {0}'.format(regexStr))
    return new RegExp(regexStr, option);
};
const getFileName = file => {
    var fileNameMatch = file.match(/^(.+)\.[^\.]+$/);
    return fileNameMatch && fileNameMatch[1].replace(/[\s-\+]+/g, '_');
};

// console.log(argv)
const folder = argv.folder || argv.d || argv._[0];
var match = folder.match(/^(.+\/([^\/]+))\/?$/);
//$FlowFixMe
var output = match && '{0}/{1}.tsx'.format(match[1], match[2]);
output = argv.output || argv.o || output;

let outputMatch = output.match(/^(?:(.*)\/)?([^\/]+)$/);
// console.log('outputMatch', outputMatch)
let outputName = outputMatch[2];
let outputPath = outputMatch[1] || '.';
let requirePath = path.posix.relative(outputPath, folder);
// console.log('requirePath', requirePath)
let author = argv.author || argv.a || 'AW';
let template = `/**
 * @author {2}
 * @flow
 */
 
 const {0} = {
 {1}
 }
 export default {0}`;

let moduleName = argv.name || getFileName(outputName);
// console.log('moduleName', moduleName)
fs.readdir(folder, (err, files) => {
    if (err) {
        return console.error(err);
    }
    var strCodes = [];
    files.forEach(file => {
        if (file.match(/@\dx\.(png|jpg)/)) return;
        var fileName = getFileName(file);

        if (fileName) {
            //$FlowFixMe
            strCodes.push(
                '    {0}: require(\'{1}/{2}\'),'.format(fileName, requirePath, file),
            );
            // console.log(strCode)
        }
    });
    //$FlowFixMe
    let code = template.format(moduleName, strCodes.join('\n'), author);
    console.log(code);
    fs.writeFileSync(output, code);
});
