const original = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
const coding = 'IJKLMNOPQRSTUVWXYZABCDEFGHijklmnopqrstuvwxyzabcdefgh';

function rot8(text, config) {
    config = config.split('')[1] === '0' ? 0 : 1;

    return text
        .split('')
        .reduce((acc, item) => {
            const isSwap = original.split('').includes(item);
            if (isSwap) {
                if (config) {
                    const indexOriginal = original.split('').indexOf(item);
                    acc.push(coding[indexOriginal]);
                    return acc;
                } else {
                    const indexDecoding = coding.split('').indexOf(item);
                    acc.push(original[indexDecoding]);
                    return acc;
                }
            } else {
                acc.push(item);
                return acc;
            }
        }, [])
        .join('');
}

module.exports = rot8;
