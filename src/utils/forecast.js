const request = require("request")

const forecast = (latitude, longitude, callback) => {
    const url = `https://api.darksky.net/forecast/${process.env.DARKSKY_TOKEN}/${latitude},${longitude}`
    request({url, json : true}, (error, { body }) => {
        if(error)   
            callback('Unable to connect to weather services', undefined)
        else  if(body.error)
            callback(body.error, undefined)
        else    {
            callback(undefined, body.currently.summary + '. ')
        }
        })  
}

module.exports = forecast