const { Transform } = require('stream');
const caesarCoding = require('../coding/caesarCoding');
const atbach = require('../coding/atbach');
const rot8 = require('../coding/rot8');

const createCodingStreamsArray = (config) => {
    const answer = [];
    config.forEach((param) => {
        const codingLitter = param.split('')[0];
        if (codingLitter === 'C') {
            answer.push(
                new Transform({
                    transform(chunk, encoding, callback) {
                        this.push(caesarCoding(chunk.toString(), param));
                        callback();
                    },
                })
            );
        } else if (codingLitter === 'R') {
            answer.push(
                new Transform({
                    transform(chunk, encoding, callback) {
                        this.push(rot8(chunk.toString(), param));
                        callback();
                    },
                })
            );
        } else {
            answer.push(
                new Transform({
                    transform(chunk, encoding, callback) {
                        this.push(atbach(chunk.toString()));
                        callback();
                    },
                })
            );
        }
    });

    return answer;
};

module.exports = createCodingStreamsArray;
