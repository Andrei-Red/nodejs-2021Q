function errorOutput (errorText) {
    process.stdout.write(`Error: ${errorText}`);
    process.exit(1);
}

module.exports = errorOutput;