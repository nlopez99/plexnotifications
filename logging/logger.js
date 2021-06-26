/* eslint-disable no-console */
const chalk = require('chalk');

function logInfo(lineToLog) {
    console.log(`${chalk.blueBright('[INFO]:')} ${lineToLog}`);
}

function logSuccess(lineToLog) {
    console.log(`${chalk.greenBright('[SUCCESS]:')} ${lineToLog}`);
}

function logError(lineToLog) {
    console.log(`${chalk.redBright('[ERROR]:')} ${lineToLog}`);
}

function logWarning(lineToLog) {
    console.log(`${chalk.yellowBright('[WARN]:')} ${lineToLog}`);
}

module.exports = {
    logInfo,
    logSuccess,
    logError,
    logWarning
};
