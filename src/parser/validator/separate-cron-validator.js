const ValidationRegex = require('./validation-regex');
const ParsedCronToken = require('../model/parsed-cron-token');
const TokenType = require('../model/token-type');

const validateMinutes = (minutesCron) => {
    let token;
    if (ValidationRegex.minutesRegex.number.test(minutesCron)) { token = new ParsedCronToken(minutesCron, TokenType.NUMBER, ValidationRegex.minutesRegex.cronType); }
    if (ValidationRegex.minutesRegex.asterisk.test(minutesCron)) {token = new ParsedCronToken(minutesCron, TokenType.ASTERISK, ValidationRegex.minutesRegex.cronType); }
    if (ValidationRegex.minutesRegex.hyphen.test(minutesCron)) {token = new ParsedCronToken(minutesCron.split('-'), TokenType.HYPHEN, ValidationRegex.minutesRegex.cronType); }
    if (ValidationRegex.minutesRegex.comma.test(minutesCron)) {token = new ParsedCronToken(minutesCron.split(','), TokenType.COMMA, ValidationRegex.minutesRegex.cronType); }
    if (ValidationRegex.minutesRegex.step.test(minutesCron)) {token = new ParsedCronToken(minutesCron.split('/'), TokenType.STEP, ValidationRegex.minutesRegex.cronType); }
    return token;
}

const validateHours = (hourCron) => {
    let token;
    if (ValidationRegex.hourRegex.number.test(hourCron)) { token = new ParsedCronToken(hourCron, TokenType.NUMBER, ValidationRegex.hourRegex.cronType); }
    if (ValidationRegex.hourRegex.asterisk.test(hourCron)) { token = new ParsedCronToken(hourCron, TokenType.ASTERISK, ValidationRegex.hourRegex.cronType); }
    if (ValidationRegex.hourRegex.hyphen.test(hourCron)) { token = new ParsedCronToken(hourCron.split('-'), TokenType.HYPHEN, ValidationRegex.hourRegex.cronType); }
    if (ValidationRegex.hourRegex.comma.test(hourCron)) { token = new ParsedCronToken(hourCron.split(','), TokenType.COMMA, ValidationRegex.hourRegex.cronType); }
    if (ValidationRegex.hourRegex.step.test(hourCron)) { token = new ParsedCronToken(hourCron.split('/'), TokenType.STEP, ValidationRegex.hourRegex.cronType); }
    return token;
}

const validateDayOfMonth = (dayOfTheMonthCron) => {
    let token;
    if (ValidationRegex.dayOfTheMonthRegex.number.test(dayOfTheMonthCron)) { token = new ParsedCronToken(dayOfTheMonthCron, TokenType.NUMBER, ValidationRegex.dayOfTheMonthRegex.cronType); }
    if (ValidationRegex.dayOfTheMonthRegex.asterisk.test(dayOfTheMonthCron)) { token = new ParsedCronToken(dayOfTheMonthCron, TokenType.ASTERISK, ValidationRegex.dayOfTheMonthRegex.cronType); }
    if (ValidationRegex.dayOfTheMonthRegex.hyphen.test(dayOfTheMonthCron)) { token = new ParsedCronToken(dayOfTheMonthCron.split('-'), TokenType.HYPHEN, ValidationRegex.dayOfTheMonthRegex.cronType); }
    if (ValidationRegex.dayOfTheMonthRegex.comma.test(dayOfTheMonthCron)) { token = new ParsedCronToken(dayOfTheMonthCron.split(','), TokenType.COMMA, ValidationRegex.dayOfTheMonthRegex.cronType); }
    if (ValidationRegex.dayOfTheMonthRegex.step.test(dayOfTheMonthCron)) { token = new ParsedCronToken(dayOfTheMonthCron.split('/'), TokenType.STEP, ValidationRegex.dayOfTheMonthRegex.cronType); }
    return token;
}

const validateMonth = (monthCron) => {
    let token;
    if (ValidationRegex.monthRegex.number.test(monthCron)) { token = new ParsedCronToken(monthCron, TokenType.NUMBER, ValidationRegex.monthRegex.cronType); }
    if (ValidationRegex.monthRegex.asterisk.test(monthCron)) { token = new ParsedCronToken(monthCron, TokenType.ASTERISK, ValidationRegex.monthRegex.cronType); }
    if (ValidationRegex.monthRegex.hyphen.test(monthCron)) { token = new ParsedCronToken(monthCron.split('-'), TokenType.HYPHEN, ValidationRegex.monthRegex.cronType); }
    if (ValidationRegex.monthRegex.comma.test(monthCron)) { token = new ParsedCronToken(monthCron.split(','), TokenType.COMMA, ValidationRegex.monthRegex.cronType); }
    if (ValidationRegex.monthRegex.step.test(monthCron)) { token = new ParsedCronToken(monthCron.split('/'), TokenType.STEP, ValidationRegex.monthRegex.cronType); }
    return token;
}

const validateDayOfTheWeek = (dayOfTheWeekCron) => {
    let token;
    if (ValidationRegex.dayOfTheWeekRegex.number.test(dayOfTheWeekCron)) { token = new ParsedCronToken(dayOfTheWeekCron, TokenType.NUMBER, ValidationRegex.dayOfTheWeekRegex.cronType); }
    if (ValidationRegex.dayOfTheWeekRegex.asterisk.test(dayOfTheWeekCron)) { token = new ParsedCronToken(dayOfTheWeekCron, TokenType.ASTERISK, ValidationRegex.dayOfTheWeekRegex.cronType); }
    if (ValidationRegex.dayOfTheWeekRegex.hyphen.test(dayOfTheWeekCron)) { token = new ParsedCronToken(dayOfTheWeekCron.split('-'), TokenType.HYPHEN, ValidationRegex.dayOfTheWeekRegex.cronType); }
    if (ValidationRegex.dayOfTheWeekRegex.comma.test(dayOfTheWeekCron)) { token = new ParsedCronToken(dayOfTheWeekCron.split(','), TokenType.COMMA, ValidationRegex.dayOfTheWeekRegex.cronType); }
    if (ValidationRegex.dayOfTheWeekRegex.step.test(dayOfTheWeekCron)) { token = new ParsedCronToken(dayOfTheWeekCron.split('/'), TokenType.STEP, ValidationRegex.dayOfTheWeekRegex.cronType); }
    return token;
}

module.exports = {
    validateMinutes: validateMinutes,
    validateHours: validateHours,
    validateDayOfMonth: validateDayOfMonth,
    validateMonth: validateMonth,
    validateDayOfTheWeek: validateDayOfTheWeek
}