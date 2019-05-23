const request = require('request')

const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoicmljYXJkb3YiLCJhIjoiY2p2enk1YjJnMDVibTRhcXFpenIwOTdoYiJ9.uYYRBRSHAynIHipBr9R-SA&limit=1'

request({url: url, json: true}, (error, response) => {
    const latitude = response.body.features[0].geometry.coordinates[0]
    const longitude = response.body.features[0].geometry.coordinates[1]
    console.log('Latitude: ' + latitude + ', Longitude: ' + longitude)
})