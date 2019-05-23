const request = require('request')

//const DARKSKY_SECRET_KEY = '37b57ad6ea80743cfb46c79fc995c548'

// const url = 'https://api.darksky.net/forecast/37b57ad6ea80743cfb46c79fc995c548/37.8267,-122.4233?lang=pt&units=si'

// request({url: url, json: true}, (error, response) => {
//     const data = response.body.currently
//     const degrees = data.temperature
//     const chance = data.precipProbability
//     const daily = response.body.daily
//     const summary = daily.data[0].summary
//     console.log(summary + '\nIt is currently '+ degrees +'°C out. There is a '+ chance +'% chance of rain.')
// })

const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoicmljYXJkb3YiLCJhIjoiY2p2enk1YjJnMDVibTRhcXFpenIwOTdoYiJ9.uYYRBRSHAynIHipBr9R-SA&limit=1'

request({url: url, json: true}, (error, response) => {
    if (error) console.log('api error: ' + error + '\n\n')
    const latitude = response.body.features[0].geometry.coordinates[0]
    const longitude = response.body.features[0].geometry.coordinates[1]
    console.log('Latitude: ' + latitude + ', Longitude: ' + longitude)
})