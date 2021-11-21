const caesarCoding = require('../../src/coding/caesarCoding');

describe('caesarCoding testing', () => {
    test('Should return encoding string', () => {
        const text = 'This is secret. Message about "_" symbol!';
        const encodingText = 'Uijt jt tfdsfu. Nfttbhf bcpvu "_" tzncpm!';

        expect(caesarCoding(text, 'C1')).toEqual(encodingText);
    });

    test('Should return decoding string', () => {
        const text = 'Uijt jt tfdsfu. Nfttbhf bcpvu "_" tzncpm!';
        const encodingText = 'This is secret. Message about "_" symbol!';

        expect(caesarCoding(text, 'C0')).toEqual(encodingText);
    });

    test('Should return not coding', () => {
        const text = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';

        expect(caesarCoding(text, 'C0')).toEqual(text);
    });
});
