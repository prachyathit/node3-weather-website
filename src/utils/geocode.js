const request = require('request')

const geocode = (address, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoibWVlc2VyIiwiYSI6ImNqOG91bnltdTA3bzAzM3VtODBmZGtpOGwifQ.g-_Ly3O2ZyPhRp58iBUn9Q&limit=1`

    request({ url, json: true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to server!', undefined)
        } else if (body.features.length === 0) {
            callback('Location not found! Try other search')
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode