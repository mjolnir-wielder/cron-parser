const ExpressionType = require('../model/expression-type');
const CronType = require('../model/cron-type');

const minutesRegex = new ExpressionType(CronType.MINUTE);
minutesRegex.comma = new RegExp('^([1-5][0-9]|[0-9])(,([1-5][0-9]|[0-9])){1,}$');
minutesRegex.hyphen = new RegExp('^([1-5][0-9]|[0-9])\\-([1-5][0-9]|[0-9])$');
minutesRegex.number = new RegExp('^([1-5][0-9]|[0-9])$');
minutesRegex.step = new RegExp('^(\\*|([1-5][0-9]|[0-9]))\\/([1-5][0-9]|[0-9])$');

const hourRegex = new ExpressionType(CronType.HOUR);
hourRegex.comma = new RegExp('^([2][0-3]|[1][0-9]|[0-9])(,([2][0-3]|[1][0-9]|[0-9])){1,}$');
hourRegex.hyphen = new RegExp('^([2][0-3]|[1][0-9]|[0-9])\\-([2][0-3]|[1][0-9]|[0-9])$');
hourRegex.number = new RegExp('^([2][0-3]|[1][0-9]|[0-9])$');
hourRegex.step = new RegExp('^(\\*|([2][0-3]|[1][0-9]|[1-9]))\\/([2][0-3]|[1][0-9]|[1-9])$');

const dayOfTheMonthRegex = new ExpressionType(CronType.DAY_OF_MONTH);    
dayOfTheMonthRegex.comma = new RegExp('^(3[0-1]|[1-2][0-9]|[1-9])(,(3[0-1]|[1-2][0-9]|[1-9])){1,}$');
dayOfTheMonthRegex.hyphen = new RegExp('^(3[0-1]|[1-2][0-9]|[1-9])\\-(3[0-1]|[1-2][0-9]|[1-9])$');
dayOfTheMonthRegex.number = new RegExp('^(3[0-1]|[1-2][0-9]|[1-9])$');
dayOfTheMonthRegex.step = new RegExp('^(\\*|(3[0-1]|[1-2][0-9]|[1-9]))\\/(3[0-1]|[1-2][0-9]|[1-9])$');


const monthRegex = new ExpressionType(CronType.MONTH);
monthRegex.comma = new RegExp('^(1[0-2]|[1-9])(,(1[0-2]|[1-9])){1,}$');
monthRegex.hyphen = new RegExp('^(1[0-2]|[1-9])\\-(1[0-2]|[1-9])$');
monthRegex.number = new RegExp('^(1[0-2]|[1-9])$');
monthRegex.step = new RegExp('^(\\*|(1[0-2]|[1-9]))\\/(1[0-2]|[1-9])$');

const dayOfTheWeekRegex = new ExpressionType(CronType.DAY_OF_WEEK);
dayOfTheWeekRegex.comma = new RegExp('^[0-6](,[0-6]){1,}$');
dayOfTheWeekRegex.hyphen = new RegExp('^[0-6]\\-[0-6]$');
dayOfTheWeekRegex.number = new RegExp('^[0-6]$');
dayOfTheWeekRegex.step = new RegExp('^(\\*|[1-6])\\/[1-6]$');

module.exports = {
    minutesRegex: minutesRegex,
    hourRegex: hourRegex,
    dayOfTheMonthRegex: dayOfTheMonthRegex,
    monthRegex: monthRegex,
    dayOfTheWeekRegex: dayOfTheWeekRegex
}