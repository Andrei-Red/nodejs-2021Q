const fs = require('fs');
const path = require('path');

function createWriteStream(filePath) {
    if (filePath) {
        const pathOutputFile = path.resolve(filePath);
        return fs.createWriteStream(pathOutputFile, { flags: 'a' });
    } else {
        return process.stdout;
    }
}

module.exports = createWriteStream;
