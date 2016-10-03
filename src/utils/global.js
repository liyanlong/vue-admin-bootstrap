export const dateFormats = {
    'YYYY-MM-DD': /\d{4}-\d{2}-\d{2}/,
    'YYYY/MM/DD': /\d{4}\/\d{2}\/\d{2}/,
    'YYYY MM DD': /\d{4} \d{2} \d{2}/,
    'DD-MM-YYYY': /\d{2}-\d{2}-\d{4}/
};

export const timeFormats = {
    'HH:mm:ss': /\d{2}:\d{2}:\d{2}/,
    'HH:mm': /\d{2}:\d{2}/,
    'HH': /\d{2}/
};

export function indexOfKey (object, key) {
    let index = -1;
    for (let k in object) {
        index = key.indexOf(k);
        if (index !== -1) {
            return index;
        }
    }
    return index;
}
