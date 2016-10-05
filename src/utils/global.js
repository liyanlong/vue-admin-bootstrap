export const dateFormats = {
    'YYYY-MM-DD': /\d{4}[\-\/ ]\d{2}[\-\/ ]\d{2}/,
    'DD-MM-YYYY': /\d{2}[\-\/ ]\d{2}[\-\/ ]\d{4}/,
    'YYYY-MM': /\d{4}[\-\/ ]\d{2}/,
    'MM-YYYY': /\d{2}[\-\/ ]\d{4}/,
    'MM-DD': /\d{2}[\-\/ ]\d{2}/
};
export const timeFormats = {
    'HH:mm:ss': /\d{2}:\d{2}:\d{2}/,
    'HH:mm': /\d{2}:\d{2}/,
    'HH': /\d{2}/
};

/**
 * 在对象中寻找是否包含key的键名
 * @param  {Object} object 被匹配对象
 * @param  {string} key    匹配的key
 * @return {int} 返回的下标
 */
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
