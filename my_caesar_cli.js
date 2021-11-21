const handleCli = require('./src/handleCLI/handlerCli');
const myCaesarCLI = require('./my_caesar_cli.pipeline')

const { config, input, output } = handleCli();

myCaesarCLI(config, input, output)

module.exports = myCaesarCLI