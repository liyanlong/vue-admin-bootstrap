function isDate (input) {
    return input instanceof Date || Object.prototype.toString.call(input) === '[object Date]';
}
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

export default (date, format) => {
    if (!isDate(date)) {
        return '';
    }
    let formatStr = format;
    for (let name in getDateValueMap) {
        if (~format.indexOf(name)) {
            let method = getDateValueMap[name];
            let value = date[method]();
            if (name === 'MM') {
                value += 1;
            }
            if (~['YY', 'MM', 'DD', 'HH', 'mm', 'ss'].indexOf(name) && value < 10) {
                value = '0' + value;
            }
            formatStr = formatStr.replace(name, value);
        }
    }
    return formatStr;
}
