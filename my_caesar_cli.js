const handleCli = require('./src/handleCLI/handlerCli');
const { pipeline } = require('stream');
const createReadStream = require('./src/streams/readStream');
const createWriteStream = require('./src/streams/writeStream');

const { config, input, output } = handleCli();


pipeline(
    createReadStream(input),
    createWriteStream(output),
    (err) => {
        console.log('err', err);
        process.exit(1);
    }
);
