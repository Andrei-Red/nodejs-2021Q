const errorOutput = require('../../consoleOutput/errorOutput');

let configRaw, inputRaw, outputRaw;

const processArgv = process.argv;

try {
    parseCLI(processArgv);
} catch {
    errorOutput('Problem with CLI');
}

function parseCLI(processArgv) {
    const myArgs = processArgv.slice(2);

    if (myArgs.length > 6) {
        errorOutput('Too many parameters');
    }

    const myCLI = myArgs.toString() + ',';
    const flagConfig = myCLI
        .match(/-c,.*?,|--config,.*?,/g)
        ?.toString()
        .slice(0, -1)
        .split(',');
    const flagOutput = myCLI
        .match(/-o,.*?,|--output,.*?,/g)
        ?.toString()
        .slice(0, -1)
        .split(',');
    const flagInput = myCLI
        .match(/-i,.*?,|--input,.*?,/g)
        ?.toString()
        .slice(0, -1)
        .split(',');

    if (flagConfig && flagConfig.length !== 2) {
        errorOutput('Problem with config');
    } else if (flagOutput && flagOutput.length !== 2) {
        errorOutput('Problem with output');
    } else if (flagInput && flagInput.length !== 2) {
        errorOutput('Problem with input');
    }

    configRaw = flagConfig[1];
    outputRaw = flagOutput ? flagOutput[1] : null;
    inputRaw = flagInput ? flagInput[1] : null;
}

module.exports = { configRaw, inputRaw, outputRaw, parseCLI};
