const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

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
        notes.addNote(argv.title, argv.body)
    }
})

//remove note
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title to remove',
            demandOption: true, //required
            type: 'string'
        }
    },
    handler: function (argv) { 
        notes.removeNote(argv.title)
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
