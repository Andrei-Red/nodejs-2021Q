const { pipeline } = require('stream');
const createReadStream = require('./src/streams/readStream');
const createWriteStream = require('./src/streams/writeStream');
const createCodingStreamsArray = require('./src/streams/codingStreams');

function myCaesarCLI(config, input, output) {
    pipeline(
        createReadStream(input),
        ...createCodingStreamsArray(config),
        createWriteStream(output),
        (err) => {}
    );
}

module.exports = myCaesarCLI