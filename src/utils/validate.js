import * as global from './global.js'
export function getDateFormat (dateStr) {
    let dateFormats = global.dateFormats;
    for (let name in dateFormats) {
        if (dateFormats[name].test(dateStr)) {
            return name;
        }
    }
    return false;
}
export function getTimeFormat (timeStr) {
    let timeFormats = global.timeFormats;
    for (let name in timeFormats) {
        if (timeFormats[name].test(timeStr)) {
            return name;
        }
    }
    return false;
}

export function isDate (dateStr) {
    return getDateFormat(dateStr) !== false;
}
export function isTime (timeStr) {
    return getTimeFormat(timeStr) !== false;
}
export function isDateTime (dateTimeStr) {
    return isDate(dateTimeStr) && isTime(dateTimeStr);
}
