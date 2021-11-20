process.argv = ['', '', '-c', 'C1-C1-A-R0'];
const { parseCLI } = require('./src/handleCLI/helpers/parseCLI');

describe('error scenarios case-1', () => {
    const myWrongConfig = ['', '', '-c', 'C1-C1-A-R0', '-c', 'C1'];
    const errorMessage = 'Error: Problem with config'

    let spy = {};

    beforeEach(() => {
        spy.process = jest.spyOn(process, 'exit').mockImplementation(() => {});
        spy.stdout = jest.spyOn(process.stdout, 'write').mockImplementation(() => {});
    });

    afterEach(() => {
        spy.stdout.mockRestore()
    })


    test('Should called "process.exit" with params not 0', () => {
        parseCLI(myWrongConfig);
        expect(spy.process).not.toHaveBeenCalledWith(0);
    });

    test('Should called "process.stdout.write" with params not 0', () => {
        parseCLI(myWrongConfig);
        expect(spy.stdout).toBeCalledTimes(1);
        expect(spy.stdout).toHaveBeenCalledWith(errorMessage)
    });
});
