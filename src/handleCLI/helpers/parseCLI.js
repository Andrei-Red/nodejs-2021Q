const { program } = require('commander');

program
    .option('-c, --config <value>', 'input params coding')
    .option('-i, --input <value>', 'an input file')
    .option('-o, --output <value>', 'an output file');

program.parse(process.argv);
const {
    config: configRaw,
    input: inputRaw,
    output: outputRaw,
} = program.opts();

module.exports = { configRaw, inputRaw, outputRaw };
