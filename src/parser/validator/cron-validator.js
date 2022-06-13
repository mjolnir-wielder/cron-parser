const Error = require('../model/error');
const ErrorUtil = require('../error/error-util');
const ExpressionType = require('../model/expression-type');
const CronValidator = require('./separate-cron-validator');

const validateCron = (args) => {
    const cronTokens = validateArgs(args);
    return validateSeparateCrons(cronTokens);
}

const validateArgs = (args) => {
    if (!Array.isArray(args) || args.length !== 1) ErrorUtil.displayErrorAndExit(Error.PARSING_ERROR);
    const argTokens = args[0].split(' ');
    if (argTokens.length !== 6) ErrorUtil.displayErrorAndExit(Error.PARSING_ERROR);
    return argTokens;
}

const validateSeparateCrons = (argTokens) => {
    const parsedTokens = [];

    if (CronValidator.validateMinutes(argTokens[0])) {
        if (CronValidator.validateHours(argTokens[1])) {
            if (CronValidator.validateDayOfMonth(argTokens[2])) {
                if (CronValidator.validateMonth(argTokens[3])) {
                    if (CronValidator.validateDayOfTheWeek(argTokens[4])) {
                        parsedTokens.push(
                            CronValidator.validateMinutes(argTokens[0]),
                            CronValidator.validateHours(argTokens[1]),
                            CronValidator.validateDayOfMonth(argTokens[2]),
                            CronValidator.validateMonth(argTokens[3]),
                            CronValidator.validateDayOfTheWeek(argTokens[4]),
                            argTokens[5]
                        );    
                    } else { ErrorUtil.displayErrorAndExit(Error.DAY_OF_WEEK_PARSING_ERROR); }
                } else { ErrorUtil.displayErrorAndExit(Error.MONTH_PARSING_ERROR); }
            } else { ErrorUtil.displayErrorAndExit(Error.DAY_OF_MONTH_PARSING_ERROR); }
        } else { ErrorUtil.displayErrorAndExit(Error.HOUR_PARSING_ERROR); }
    } else { ErrorUtil.displayErrorAndExit(Error.MINUTE_PARSING_ERROR); }

    return parsedTokens;
}

module.exports = {
    validateCron: validateCron 
}
