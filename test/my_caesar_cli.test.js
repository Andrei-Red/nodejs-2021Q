process.argv = ['', '', '-c', 'C1-C1-A-R0'];
const fs = require('fs');

const { parseCLI } = require('../src/handleCLI/helpers/parseCLI');
const checkFileAvailability = require('../src/handleCLI/helpers/checkFileAvailability');
const handlerCli = require('../src/handleCLI/handlerCli');
const validatorOptions = require('../src/handleCLI/helpers/validatorOptions');
const myCaesarCLI = require('../my_caesar_cli.pipeline');
/// const createReadStream = require('./src/streams/readStream')


describe('Error scenarios', () => {
    let myWrongConfig = ['', '', '-c', 'C1-C1-A-R0', '-c', 'C1'];
    let errorMessage;
    let spy = {};

    beforeEach(() => {
        spy.process = jest.spyOn(process, 'exit').mockImplementation(() => {});
        spy.stdout = jest
            .spyOn(process.stdout, 'write')
            .mockImplementation(() => {});
    });

    afterEach(() => {
        spy.stdout.mockRestore();
        spy.process.mockRestore();
    });

    test('Case-1: Should called "process.exit" with params 1, when Input: User passes the same cli argument twice', () => {
        myWrongConfig = ['', '', '-c', 'C1-C1-A-R0', '-c', 'C1'];
        parseCLI(myWrongConfig);
        expect(spy.process).toHaveBeenCalledWith(1);
    });

    test('Case-1: Should called "process.stdout.write" with error message "Error: Problem with config", when Input: User passes the same cli argument twice', () => {
        myWrongConfig = ['', '', '-c', 'C1-C1-A-R0', '-c', 'C1'];
        errorMessage = 'Error: Problem with config';

        parseCLI(myWrongConfig);
        expect(spy.stdout).toBeCalledTimes(1);
        expect(spy.stdout).toHaveBeenCalledWith(errorMessage);
    });

    test('Case-2: Should called "process.exit" with params 1, when Input: User does not pass -c or --config argument', () => {
        myWrongConfig = ['', ''];
        parseCLI(myWrongConfig);
        expect(spy.process).toHaveBeenCalledWith(1);
    });

    test('Case-2: Should called "process.stdout.write" with error message "Error: Problem with CLI", when Input: User does not pass -c or --config argument', () => {
        myWrongConfig = ['', ''];
        errorMessage = 'Error: Problem with CLI';

        parseCLI(myWrongConfig);
        expect(spy.stdout).toBeCalledTimes(1);
        expect(spy.stdout).toHaveBeenCalledWith(errorMessage);
    });

    test('Case-3: Should called "process.exit" with params 1, when Input: User passes -i argument with path that does not exist or with no read access', () => {
        const config = validatorOptions('C1');
        const input = checkFileAvailability('./wrongInput.txt');
        const output = checkFileAvailability();

        handlerCli(config, input, output);
        expect(spy.process).toHaveBeenCalledWith(1);
    });

    test('Case-3: Should called "process.stdout.write" with error message "Error: Program has problem with input file", when Input: User passes -i argument with path that does not exist or with no read access', () => {
        errorMessage = 'Error: Program has problem with input file';

        const config = validatorOptions('C1');
        const input = checkFileAvailability('./wrongInput.txt');
        const output = checkFileAvailability();

        handlerCli(config, input, output);

        expect(spy.stdout).toBeCalledTimes(1);
        expect(spy.stdout).toHaveBeenCalledWith(errorMessage);
    });

    test('Case-4: Should called "process.exit" with params not 0, when Input: User passes -o argument with path to directory that doesn\'t exist or with no read access', () => {
        const config = validatorOptions('C1');
        const input = checkFileAvailability();
        const output = checkFileAvailability('./wrongOutput.txt');

        handlerCli(config, input, output);
        expect(spy.process).not.toHaveBeenCalledWith(0);
    });

    test('Case-4: Should called "process.stdout.write" with error message "Error: Program has problem with output file", when Input: User passes -o argument with path to directory that doesn\'t exist or with no read access', () => {
        errorMessage = 'Error: Program has problem with output file';

        const config = validatorOptions('C1');
        const input = checkFileAvailability();
        const output = checkFileAvailability('./wrongOutput.txt');

        handlerCli(config, input, output);

        expect(spy.stdout).toBeCalledTimes(1);
        expect(spy.stdout).toHaveBeenCalledWith(errorMessage);
    });

    test('Case-5: Should called "process.exit" with params not 0, when Input: User passes -o argument with path to directory that doesn\'t exist or with no read access', () => {
        const config = validatorOptions('C1');
        const input = checkFileAvailability();
        const output = checkFileAvailability('./wrongOutput.txt');

        handlerCli(config, input, output);
        expect(spy.process).toHaveBeenCalledWith(1);
    });

    test('Case-5: Should called "process.stdout.write" with error message "Error: Program has problem with output file", when Input: User passes -o argument with path to directory that doesn\'t exist or with no read access', () => {
        errorMessage = 'Error: Program has problem with output file';

        const config = validatorOptions('C1');
        const input = checkFileAvailability();
        const output = checkFileAvailability('./wrongOutput.txt');

        handlerCli(config, input, output);

        expect(spy.stdout).toBeCalledTimes(1);
        expect(spy.stdout).toHaveBeenCalledWith(errorMessage);
    });
});

describe('Success scenarios', () => {
    const pathInputFile = './test/input.txt';
    const pathOutputFile = './test/output.txt';
    let spy = {};

    beforeEach(() => {
        spy.process = jest.spyOn(process, 'exit').mockImplementation(() => {});
        spy.stdout = jest
            .spyOn(process.stdout, 'write')
            .mockImplementation(() => {});

        fs.writeFile(pathOutputFile, '', { flags: 'w' }, function (err) {});
    });

    afterEach(() => {
        spy.stdout.mockRestore();
        spy.process.mockRestore();
    });

    test('Case-1: Should be correct config: C1', () => {
        const testingConfig = 'C1';
        const config = validatorOptions(testingConfig);
        handlerCli(config);
        expect(spy.stdout).toBeCalledTimes(0);
    });

    test('Case-1: Should be correct config: C1-C0-A-R0-R1-A-R0-R1', () => {
        const testingConfig = 'C1-C0-A-R0-R1-A-R0-R1';
        const config = validatorOptions(testingConfig);
        handlerCli(config);
        expect(spy.stdout).toBeCalledTimes(0);
    });

    test('Case-1: Should be correct config: C1-C1-C0-A-R0-R1-A-R0-R0-R1-A-R0-R1', () => {
        const testingConfig = 'C1-C1-C0-A-R0-R1-A-R0-R0-R1-A-R0-R1';
        const config = validatorOptions(testingConfig);
        handlerCli(config);
        expect(spy.stdout).toBeCalledTimes(0);
    });

    test('Case-1: Should be correct config: A-R0-R0-R1-A-R0-R1-A-A-A-C1-C1-C1-C1-C0-A-R0-R1-A', () => {
        const testingConfig =
            'A-R0-R0-R1-A-R0-R1-A-A-A-C1-C1-C1-C1-C0-A-R0-R1-A';
        const config = validatorOptions(testingConfig);
        handlerCli(config);
        expect(spy.stdout).toBeCalledTimes(0);
    });

    test('Case-2: Should coding text config "C1-C1-R0-A"', () => {
        const correctEncodingText = 'Myxn xn nbdobm. Tbnnfzb ferlm "_" nhteru!';

        const config = validatorOptions('C1-C1-R0-A');
        const input = checkFileAvailability(pathInputFile);
        const output = checkFileAvailability(pathOutputFile);

        myCaesarCLI(config.params, input.validPath, output.validPath);

        fs.createReadStream(pathOutputFile).on('data', (buffer) => {
            expect(buffer.toString()).toEqual(correctEncodingText);
        });
    });

    test('Case-2: Should coding text config "C1-C0-A-R1-R0-A-R0-R0-C1-A"', () => {
        const correctEncodingText = 'Vhgw gw wkmxkv. Ckwwoik onauv "_" wqcnad!';

        const config = validatorOptions('C1-C0-A-R1-R0-A-R0-R0-C1-A');
        const input = checkFileAvailability(pathInputFile);
        const output = checkFileAvailability(pathOutputFile);

        myCaesarCLI(config.params, input.validPath, output.validPath);

        fs.createReadStream(pathOutputFile).on('data', (buffer) => {
            expect(buffer.toString()).toEqual(correctEncodingText);
        });
    });

    test('Case-2: Should coding text config "A-A-A-R1-R0-R0-R0-C1-C1-A"', () => {
        const correctEncodingText = 'Hvwg wg gsqfsh. Asggous opcih "_" gmapcz!';

        const config = validatorOptions('A-A-A-R1-R0-R0-R0-C1-C1-A');
        const input = checkFileAvailability(pathInputFile);
        const output = checkFileAvailability(pathOutputFile);

        myCaesarCLI(config.params, input.validPath, output.validPath);

        fs.createReadStream(pathOutputFile).on('data', (buffer) => {
            expect(buffer.toString()).toEqual(correctEncodingText);
        });
    });

    test('Case-2: Should coding text config "C1-R1-C0-C0-A-R0-R1-R1-A-C1"', () => {
        const correctEncodingText = 'This is secret. Message about "_" symbol!';

        const config = validatorOptions('C1-R1-C0-C0-A-R0-R1-R1-A-C1');
        const input = checkFileAvailability(pathInputFile);
        const output = checkFileAvailability(pathOutputFile);

        myCaesarCLI(config.params, input.validPath, output.validPath);

        fs.createReadStream(pathOutputFile).on('data', (buffer) => {
            expect(buffer.toString()).toEqual(correctEncodingText);
        });
    });
});

//
// describe('Error pipeline', () => {
//
//     test('Should show error message if pipeline has error', () => {
//         // jest.mock('./config', () => ({ foo: 'zed' }))
//     })
// })
