const { pipeline } = require('stream');
const createReadStream = require('./src/streams/readStream');
const createWriteStream = require('./src/streams/writeStream');
const createCodingStreamsArray = require('./src/streams/codingStreams');
const errorOutput = require('./src/consoleOutput/errorOutput');

function myCaesarCLI(config, input, output) {
    pipeline(
        createReadStream(input),
        ...createCodingStreamsArray(config),
        createWriteStream(output),
        (err) => {
            if (err) errorOutput(err);
        }
    );
}

module.exports = myCaesarCLI