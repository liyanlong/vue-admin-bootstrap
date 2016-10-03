 /*!
 * parse string to Date Object
 */
// import {dateFormats, timeFormats} from 'src/utils/global.js'
import {getDateFormat, getTimeFormat} from 'src/utils/validate.js'
function createTruncatDateTime (placeholder, defaultReturn, filter) {
    let length = placeholder && placeholder.length || 0;
    return function (dateStr, format) {
        let index = -1;
        let val = (!~(index = format.indexOf(placeholder))) ? defaultReturn : parseInt(dateStr.substr(index, length));
        return typeof filter === 'function' ? filter(val) : val;
    }
}

const truncatDateTime = {
    years: createTruncatDateTime('YYYY', 1970),

    months: createTruncatDateTime('MM', 0, function (val) {
        // months is : 0 ~ 11
        return val === 0 ? 0 : val - 1
    }),
    days: createTruncatDateTime('DD', 1),
    hours: createTruncatDateTime('HH', 0),
    minutes: createTruncatDateTime('mm', 0),
    seconds: createTruncatDateTime('ss', 0)
}
export default (val) => {
    let years, months, days, hours, minutes, seconds;
    let formatDateStr = getDateFormat(val);
    let formatTimeStr = getTimeFormat(val);
    var date = new Date();
    if (formatDateStr) {
        years = truncatDateTime.years(val, formatDateStr);
        months = truncatDateTime.months(val, formatDateStr);
        days = truncatDateTime.days(val, formatDateStr);
        date.setFullYear(years);
        date.setMonth(months);
        date.setDate(days);
    }

    if (formatTimeStr) {
        if (formatDateStr) {
            formatTimeStr = [formatDateStr, formatTimeStr].join(' ');
        }
        hours = truncatDateTime.hours(val, formatTimeStr);
        minutes = truncatDateTime.minutes(val, formatTimeStr);
        seconds = truncatDateTime.seconds(val, formatTimeStr);
        date.setHours(hours);
        date.setMinutes(minutes);
        date.setSeconds(seconds);
    }
    return date;
}
