const chalk = require('chalk')
const yargs = require('yargs')
const getNotes = require('./notes.js')

//changing yargs version output
yargs.version('1.12.0') 

//add note
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    handler: function () {
        console.log('Adding a new note!')
    }
})

//remove note
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function () {
        console.log('Removing a note!')
    }
})

//list note
yargs.command({
    command: 'list',
    describe: 'List all notes',
    handler: function () {
        console.log('Listing all notes!')
    }
})

//read note
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function () {
        console.log('Reading a note!')
    }
})

console.log(yargs.argv)








/*

const chalkAnimation = require('chalk-animation')

const name = process.argv[2]

console.log("Hello, " + name + "!")
console.log("How are you doing?")
console.log("These are your saved notes:\n")

console.log(chalk.green.bold('Success!'))

if (name === 'Rick') console.log(chalk.green.inverse('Be safe, Ricardo! ;)\n'))

console.log(chalk.cyan.bold('You\'re doing great!\n'))

const msg = getNotes()
chalkAnimation.rainbow(msg, 0.6).start()*/