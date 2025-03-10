const request = require("request");

const geocode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=${process.env.MAPBOX_API_TOKEN}&limit=1`;

  request({ url, json: true }, (error, { body }) => {
    if (error) callback(body.error);
    else if (body.features.length === 0)
      callback("Unable to find location. Please try again");
    else {
      callback(undefined, {
        latitude: body.features[0].center[0],
        longitude: body.features[0].center[1],
        location: body.features[0].place_name,
      });
    }
  });
};

module.exports = geocode;
