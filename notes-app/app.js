const chalk = require('chalk')
const yargs = require('yargs')
const getNotes = require('./notes.js')

//changing yargs version output
yargs.version('1.12.0') 

//add note
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true, //required
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true, //required
            type: 'string'
        }
    },
    handler: function (argv) {
        console.log('Adding a new note!')
        console.log('Title = ' + argv.title)
        console.log('Body = ' + argv.body)
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
    describe: 'List your notes',
    handler: function () {
        console.log('Listing out all notes!')
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

yargs.parse()
//console.log(yargs.argv)








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