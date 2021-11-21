const fs = require('fs');
const path = require('path');

function checkFileAvailability(filePath) {
    let hasError = false;
    let validPath;

    if (filePath) {
        if (fs.existsSync(path.resolve(filePath))) {
            validPath = filePath;
        } else {
            hasError = true;
        }
    } else {
        validPath = null;
    }

    return { hasError, validPath };
}

module.exports = checkFileAvailability;
