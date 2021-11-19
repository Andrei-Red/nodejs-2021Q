const rot8 = require('./rot8');

describe('rot8 testing', () => {
    test('Should return encoding string', () => {
        const text = 'This is secret. Message about "_" symbol!';
        const encodingText = 'Bpqa qa amkzmb. Umaaiom ijwcb "_" agujwt!';

        expect(rot8(text, 'R1')).toEqual(encodingText);
    });

    test('Should return decoding string', () => {
        const text = 'Bpqa qa amkzmb. Umaaiom ijwcb "_" agujwt!';
        const encodingText = 'This is secret. Message about "_" symbol!';

        expect(rot8(text, 'R0')).toEqual(encodingText);
    });

    test('Should return not coding', () => {
        const text = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';

        expect(rot8(text,'R0')).toEqual(text);
    });
});
