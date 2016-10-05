/**
 * format for the DateMethod
 * @type {Object}
 */
const getDateValueMap = {
    'YYYY': 'getFullYear',
     // warning: YY need under the YYYY
    'YY': 'getYear',
    'MM': 'getMonth',
    'DD': 'getDate',
    'HH': 'getHours',
    'mm': 'getMinutes',
    'ss': 'getSeconds'
};

function isDate (input) {
    return input instanceof Date || Object.prototype.toString.call(input) === '[object Date]';
}

/**
 *  Date format to string
 * @param  {Date} date  日期对象
 * @param  {string} format 格式字符串
 * @return {string} 格式后字符串
 */
export default (date, format) => {
    let formatStr = format;
    if (!isDate(date)) {
        date = new Date();
    }
    for (let name in getDateValueMap) {
        if (~format.indexOf(name)) {
            let method = getDateValueMap[name];
            let value = date[method]();

            // 默认月的值为 0 ~ 11
            if (name === 'MM') {
                value += 1;
            }

            // 自动补 0
            if (~['YY', 'MM', 'DD', 'HH', 'mm', 'ss'].indexOf(name) && value < 10) {
                value = '0' + value;
            }
            formatStr = formatStr.replace(name, value);
        }
    }
    return formatStr;
}
