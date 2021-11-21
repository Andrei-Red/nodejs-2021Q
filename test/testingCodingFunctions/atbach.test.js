const atbach = require('../../src/coding/atbach');

describe('atbach testing', () => {

    test('Should return encoding string', () => {
        const text = 'This is secret. Message about "_" symbol!';
        const encodingText = 'Gsrh rh hvxivg. Nvhhztv zylfg "_" hbnylo!'

        expect(atbach(text)).toEqual(encodingText)
    });

    test('Should return not coding', () => {
        const text = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';

        expect(atbach(text)).toEqual(text)
    });
})


