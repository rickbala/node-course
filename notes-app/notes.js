const fs = require('fs')
const chalk = require('chalk')
const logs = require('./logs.js')

const getNotes = () => "Your notes..."

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)
    
    if (!duplicateNote){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(logs.success('New note added!'))
    }else{
        console.log(logs.error('Note title taken'))
    }
}

const removeNote = (title) => {
    const notes = loadNotes()
    const notesToKeepSaved = notes.filter((note) => note.title !== title)

    if (notes.length > notesToKeepSaved.length){
        console.log(logs.success('Note removed!'))
        saveNotes(notesToKeepSaved)
    }else{
        console.log(logs.error('No note found!'))
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString() 
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

const listNotes = () => {
    const notes = loadNotes()
    console.log(logs.success("Your notes"))
    notes.forEach((note) => console.log(note.title))
}

const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)
    if (note) {
        console.log(logs.success(note.title))
        console.log(note.body)
    }else{
        console.log(logs.error('Note not found'))
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}
