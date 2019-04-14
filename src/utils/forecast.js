const request = require('request')

const forecast = (lat, long, callback) => {
    const url = `https://api.darksky.net/forecast/7f4c31485f6ccdfde9e3f0b6ee7997f0/${lat},${long}?units=si`

    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to server!', undefined)
        } else if (body.error) {
            callback('Location not found!', undefined)
        } else {
            callback(undefined, `${body.daily.data[0].summary} It's ${body.currently.temperature} degrees out and there's ${body.currently.precipProbability} change of rain. The minimum temperature is ${body.daily.data[0].temperatureLow} and the maximum temperatures is ${body.daily.data[0].temperatureHigh}.`)
        }
    })
}

module.exports = forecast