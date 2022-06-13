module.exports = class ExpressionType {

    cronType;
    asterisk = new RegExp('^\\*$');
    comma;
    hyphen;
    number;
    step;

    constructor(cronType) {
        this.cronType = cronType;
    }
}