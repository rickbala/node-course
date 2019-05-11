const chalk = require('chalk')
const getNotes = require('./notes.js')
const chalkAnimation = require('chalk-animation')

const name = process.argv[2]

console.log("Hello, " + name + "!")
console.log("How are you doing?")
console.log("These are your saved notes:\n")

console.log(chalk.green.bold('Success!\n'))

const msg = getNotes()
chalkAnimation.rainbow(msg, 0.6).start()