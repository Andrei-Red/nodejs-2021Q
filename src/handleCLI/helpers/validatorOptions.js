function validatorOptions(text) {
    let params = [];
    let hasError = false;
    const arrayParams = text.split('-');

    arrayParams.forEach((param) => {
        if(param.length > 2) {
            hasError = true;
        }

        if (param[0] === 'C' || param[0] === 'R') {
            if (param[1] === '1' || param[1] === '0') {
                params.push(param);
            } else {
                hasError = true;
            }
        } else if (param[0] === 'A') {
            if (param.length === 1) {
                params.push(param);
            } else {
                hasError = true;
            }
        } else {
            hasError = true;
        }
    });

    return { hasError, params };
}

module.exports = validatorOptions;
