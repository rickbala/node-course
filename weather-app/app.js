const request = require('request')

const SECRET_KEY = '37b57ad6ea80743cfb46c79fc995c548'

// const api = 'https://api.darksky.net/forecast/key/latitude,longitude'
const url = 'https://api.darksky.net/forecast/37b57ad6ea80743cfb46c79fc995c548/37.8267,-122.4233?lang=pt&units=si'

request({url: url, json: true}, (error, response) => {
    const data = response.body.currently
    const degrees = data.temperature
    const chance = data.precipProbability
    const daily = response.body.daily
    const summary = daily.data[0].summary
    console.log(summary + ' It is currently '+ degrees +' out. There is a '+ chance +'% chance of rain.')
})


