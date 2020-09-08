const request = require('request');

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiMDAwamFzb24wMDAiLCJhIjoiY2tlY2F2Mng3MDdhYzJ2dHAza3JxN3MyNiJ9.U-bpO76-9jGIhtBnyTagUg&limit=1';
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to the location services.', undefined)
        } else if (body.features[0].length === 0) {
            callback('Unable to find the location, try another search.', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[0],
                longtitude: body.features[0].center[1],
                location: body.features[0].place_name
            })
        }
    })
}



module.exports = geocode;