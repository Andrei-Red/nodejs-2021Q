const ALPHABET = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
];
const LENGTH_ALPHABET = 26;

function caesarCoding(text, config) {
    return text.split('').reduce((acc, letter) => {
        if (ALPHABET.includes(letter.toLowerCase())) {
            coding(letter, config, acc);
        } else {
            acc.push(letter);
        }

        return acc;
    }, []).join('');

    function isUpperCase(symbol) {
        return symbol === symbol.toUpperCase();
    }

    function coding(symbol, config, acc) {
        let shift;
        config.split('')[1] === '0' ? (shift = 25) : (shift = 1);
        const indexCodingSymbol = getCodingSymbol(symbol, shift);

        if (isUpperCase(symbol)) {
            acc.push(ALPHABET[indexCodingSymbol].toUpperCase());
        } else {
            acc.push(ALPHABET[indexCodingSymbol]);
        }
    }

    function getCodingSymbol(symbol, shift) {
        let indexCodingSymbol = ALPHABET.indexOf(symbol.toLowerCase()) + shift;

        if (indexCodingSymbol >= LENGTH_ALPHABET) {
            indexCodingSymbol = indexCodingSymbol - LENGTH_ALPHABET;
        }

        return indexCodingSymbol;
    }
}

module.exports = caesarCoding;
