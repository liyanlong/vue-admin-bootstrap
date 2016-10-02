const dateFormats = {
    'YYYY-MM-DD': /\d{4}-\d{2}-\d{2}/,
    'YYYY/MM/DD': /\d{4}\/\d{2}\/\d{2}/,
    'YYYY MM DD': /\d{4} \d{2} \d{2}/,
    'DD-MM-YYYY': /\d{2}-\d{2}-\d{4}/
};

const timeFormats = {
    'HH:mm:ss': /\d{2}:\d{2}:\d{2}/,
    'HH:mm': /\d{2}:\d{2}/,
    'HH': /\d{2}/
};

function createTruncatDateTime (placeholder, defaultReturn) {
    let length = placeholder && placeholder.length;
    return function (dateStr, format) {
        let index = -1;
        return (!~(index = format.indexOf(placeholder))) ? defaultReturn : dateStr.substr(index, length);
    }
}

const truncatDateTime = {
    years: createTruncatDateTime('YYYY', 1970),
    months: createTruncatDateTime('MM', 0),
    days: createTruncatDateTime('DD', 1),
    hours: createTruncatDateTime('HH', 0),
    minutes: createTruncatDateTime('mm', 0),
    seconds: createTruncatDateTime('ss', 0)
}
export default (val) => {
    let years, months, days, hours, minutes, seconds;
    let formatDateStr = '';
    let formatTimeStr = '';
    let isValidDate = false;
    for (let name in dateFormats) {
        if (dateFormats[name].test(val)) {
            formatDateStr = name;
            isValidDate = true;
            break;
        }
    }
    let isValidTime = false;
    for (let name in timeFormats) {
        if (timeFormats[name].test(val)) {
            formatTimeStr = [formatDateStr, name].join(' ');
            isValidTime = true;
            break;
        }
    }
    var date = new Date();
    if (isValidDate) {
        years = truncatDateTime.years(val, formatDateStr);
        // months is : 0 ~ 11
        months = truncatDateTime.months(val, formatDateStr) - 1;
        days = truncatDateTime.days(val, formatDateStr);
        date.setFullYear(years);
        date.setMonth(months);
        date.setDate(days);
    }

    if (isValidTime) {
        hours = truncatDateTime.hours(val, formatTimeStr);
        minutes = truncatDateTime.minutes(val, formatTimeStr);
        seconds = truncatDateTime.seconds(val, formatTimeStr);
        date.setHours(hours);
        date.setMinutes(minutes);
        date.setSeconds(seconds);
    }
    return date;
}
