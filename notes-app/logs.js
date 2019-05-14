const chalk = require('chalk')

const error = chalk.redBright.bold
const warning = chalk.yellowBright.bold

module.exports = {
    error: error,
    warning: warning
}