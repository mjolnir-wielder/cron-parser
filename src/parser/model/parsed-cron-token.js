module.exports = class ParsedCronToken {

    tokens;
    tokenType;
    cronType;

    constructor(tokens, tokenType, cronType) {
        this.tokens = tokens;
        this.tokenType = tokenType;
        this.cronType = cronType;
    }

}