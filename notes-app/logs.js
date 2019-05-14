const chalk = require('chalk')

const error = chalk.redBright.bold
const success = chalk.greenBright.bold.inverse

module.exports = {
    error: error,
    success: success
}