const validator = require('./validator/cron-validator');
const prettyPrintProcessor = require('./display/pretty-print-processor');

const parse = () => {
    const args = process.argv.slice(2);
    const parsedTokens = validator.validateCron(args);
    prettyPrintProcessor.prettyPrint(parsedTokens);
}

module.exports = {
    parse: parse
}
