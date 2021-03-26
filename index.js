    
const products = ['preto-PP', 'preto-M', 'preto-G', 'preto-GG', 'preto-GG', 'branco-PP', 'branco-G', 'vermelho-M', 'azul-XG', 'azul-XG', 'azul-XG', 'azul-P'];

const getSize = (value, type) => {
    return value.split('-')[type];
};

const handleVariant = (array) => {
    let object = {};

    const groupItens = array.reduce((r, a) => {
        let count = 0;
        let family = getSize(a, 0);
        let size = getSize(a, 1);

        array.forEach((item) => {
            if (item === `${family}-${size}`) count++;
        });

        object = {
            ...object,
            [family]: {
            ...object[family],
            [size]: count,
            },
        };

    return object;
    }, {});
    return groupItens;
};