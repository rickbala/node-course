const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')
const fs = require('fs')
const logs = require('./logs.js')

//read version number from package.json
const packageJson = JSON.parse(fs.readFileSync('package.json'))
const version = packageJson.version

//changing yargs version output
yargs.version(version)

//sample command
yargs.command({
    command: 'getNotes',
    handler(){
        console.log(logs.success(notes.getNotes()))
    }
})

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
    handler(argv) {
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
    handler(argv) { 
        notes.removeNote(argv.title)
    }
})

//list note
yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler () {
        notes.listNotes()
    }
})

//read note
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler (argv) {
        notes.readNote(argv.title)
    }
})

yargs.parse()