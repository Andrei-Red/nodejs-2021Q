const errorOutput = require('../consoleOutput/errorOutput');
const { configRaw, inputRaw, outputRaw } = require('./helpers/parseCLI');

const validatorOptions = require('./helpers/validatorOptions');
const checkFileAvailability = require('./helpers/checkFileAvailability');

const config = validatorOptions(configRaw);
const input = checkFileAvailability(inputRaw);
const output = checkFileAvailability(outputRaw);

function handlerCli() {
    switch (true) {
        case config.hasError:
            errorOutput('Config data is not correct.');
            break;
        case input.hasError:
            errorOutput('Program has problem with input file');
            break;
        case output.hasError:
            errorOutput('Program has problem with output file');
            break;
    }

    return {config: config.params, input: input.validPath, output: output.validPath}
}

module.exports = handlerCli;
