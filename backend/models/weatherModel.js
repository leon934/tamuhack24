/* {"flightNumber":"8380",
    "origin":{"code":"JFK","city":"New York City","timezone":"America/New_York","location":{"latitude":40.6413,"longitude":-73.7781}},
    "destination":{"code":"DFW","city":"Dallas-Fort Worth","timezone":"America/Chicago","location":{"latitude":32.8998,"longitude":-97.0403}},
    "distance":1390,
    "duration":{"locale":"3h 39m","hours":3,"minutes":39},
    "departureTime":"2023-11-10T03:38:40.000-05:00",
    "arrivalTime":"2023-11-10T06:17:40.000-06:00",
    "aircraft":{"model":"757","passengerCapacity":{"total":176,"main":160,"first":16},"speed":380}} */

    const mongoose = require("mongoose")

    const weatherIdentifier = mongoose.Schema({
        "location": {
          "name": String,
          "region": String,
        },
        current: {
          "temp_f": Number,
          "temp_c": Number,
          "condition": {
            "text": String,
          },
          "wind_mph": Number,
          "precip_in": Number,
          "cloud": String,
          "gust_mph": Number,
          "humidity": Number,
        },
      });
    
    const Weather = mongoose.model("Weather", weatherIdentifier)
    
    module.exports = Weather;