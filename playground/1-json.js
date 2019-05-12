const fs = require('fs')

// const dataBuffer = fs.readFileSync('1-json.json')
// const dataString = dataBuffer.toString()
// const user = JSON.parse(dataString)

const user = JSON.parse(fs.readFileSync('1-json.json').toString())
user.name = "Ricardo"
user.age = "32"

fs.writeFileSync('1-json.json', JSON.stringify(user))

