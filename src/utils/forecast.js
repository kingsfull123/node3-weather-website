const request = require('request');

const forecast = (latitude, longtitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=933989b3c3a0b1fb30c5dcac0427eb78&query=' + longtitude + ',' + latitude;
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to the weather server.', undefined)
        } else if (body.error) {
            callback('unable to find location', undefined)
        } else {
            callback(undefined, `${body.current.weather_descriptions[0]}. It is currently ${body.current.temperature} degrees out. It feels like ${body.current.feelslike} degrees out.`)
        }
    })
}



module.exports = forecast;
