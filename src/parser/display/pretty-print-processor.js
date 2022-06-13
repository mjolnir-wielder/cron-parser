const TokenType = require('../model/token-type');
const ErrorUtil = require('../error/error-util');
const Error = require('../model/error');

const prettyPrint = (parsedTokens) => {
    console.log('minute ' + parseEachToken(parsedTokens[0]));
    console.log('hour ' + parseEachToken(parsedTokens[1]));
    console.log('day of month ' + parseEachToken(parsedTokens[2]));
    console.log('month ' + parseEachToken(parsedTokens[3]));
    console.log('day of week ' + parseEachToken(parsedTokens[4]));
    console.log('command ' + parsedTokens[5]);
}

const parseEachToken = (parsedToken) => {
    switch(parsedToken.tokenType) {
        case TokenType.NUMBER: return processNumberToken(parsedToken);
        case TokenType.ASTERISK: return processAsteriskToken(parsedToken);
        case TokenType.COMMA: return processCommaToken(parsedToken);
        case TokenType.HYPHEN: return processHyphenToken(parsedToken);
        case TokenType.STEP: return processStepToken(parsedToken);
        default: console.log('not yet configured');
    }
}

const processNumberToken = (parsedToken) => {
    return parsedToken.tokens;
}

const processAsteriskToken = (parsedToken) => {
    let s = '';
    for(let i=parsedToken.cronType[0]; i<=parsedToken.cronType[1]; i++) {
       s += i + ' '; 
    }
    return s;
}

const processCommaToken = (parsedToken) => {
    let s = '';
    for(let i=0; i<parsedToken.tokens.length; i++) {
        s += parsedToken.tokens[i] + ' ';
    }
    return s;
}


const processStepToken = (parsedToken) => {
    let s = '';
    let start = parsedToken.tokens[0] === '*' ? parsedToken.cronType[0] : parseInt(parsedToken.tokens[0]);
    let step = parseInt(parsedToken.tokens[1]);

    while(start <= parsedToken.cronType[1]) {
        s += start + ' ';
        start += step;
    }
    return s;
}
const processHyphenToken = (parsedToken) => {
    if (parsedToken.tokens[0] > parsedToken.tokens[1]) ErrorUtil.displayErrorAndExit(Error.SCRIPT_PARSING_ERROR);
    let s = '';
    for(let i=parsedToken.tokens[0]; i<=parsedToken.tokens[1]; i++) {
        s += i + ' ';
    }
    return s;
}


module.exports = {
    prettyPrint: prettyPrint
}