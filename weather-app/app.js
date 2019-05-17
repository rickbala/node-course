const request = require('request')

const url = 'https://api.darksky.net/forecast/37b57ad6ea80743cfb46c79fc995c548/37.8267,-122.4233'

request({url: url, json: true}, (error, response) => {
    const data = response.body.currently
    const degrees = data.temperature
    const chance = data.precipProbability
    console.log('It is currently '+ degrees +' out. There is a '+ chance +'% chance of rain.')
})

SECRET_KEY = '37b57ad6ea80743cfb46c79fc995c548'
