process.argv = ['', '', '-c', 'C1-C1-A-R0'];
const { parseCLI } = require('./src/handleCLI/helpers/parseCLI');
const checkFileAvailability = require('./src/handleCLI/helpers/checkFileAvailability');
const handlerCli = require('./src/handleCLI/handlerCli');
const validatorOptions = require('./src/handleCLI/helpers/validatorOptions');

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
