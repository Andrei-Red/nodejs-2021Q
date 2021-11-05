const messageOutput = require('../consoleOutput/messageOutput');
const fs = require('fs');
const path = require('path');

function createReadStream(filePath) {
    if (filePath) {
        const pathInputFile = path.resolve(filePath);
        return fs.createReadStream(pathInputFile);
    } else {
        messageOutput('Enter your data. To exit use Ctrl + C.\n')
        return process.stdin;
    }
}

module.exports = createReadStream