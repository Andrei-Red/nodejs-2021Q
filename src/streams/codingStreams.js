const { Transform } = require('stream');
const caesarCoding = require('../coding/caesarCoding');
const atbach = require('../coding/atbach');
const rot8 = require('../coding/rot8');

const createCodingStreamsArray = (config) => {
    const answer = [];
    config.forEach((param) => {
        const codingLetter = param.split('')[0];
        if (codingLetter === 'C') {
            answer.push(
                new Transform({
                    transform(chunk, encoding, callback) {
                        callback(null, caesarCoding(chunk.toString(), param));
                    },
                })
            );
        } else if (codingLetter === 'R') {
            answer.push(
                new Transform({
                    transform(chunk, encoding, callback) {
                        callback(null, rot8(chunk.toString(), param));
                    },
                })
            );
        } else {
            answer.push(
                new Transform({
                    transform(chunk, encoding, callback) {
                        callback(null, atbach(chunk.toString()));
                    },
                })
            );
        }
    });

    return answer;
};

module.exports = createCodingStreamsArray;
