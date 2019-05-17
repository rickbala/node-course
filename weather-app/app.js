const request = require('request')

const url = 'https://api.darksky.net/forecast/37b57ad6ea80743cfb46c79fc995c548/37.8267,-122.4233'

request({url: url}, (error, response) => {
    const data = JSON.parse(response.body)
    console.log(data.currently)
})

SECRET_KEY = '37b57ad6ea80743cfb46c79fc995c548'
