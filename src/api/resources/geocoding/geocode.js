//API KEY
const key = 'AIzaSyBHKC6AoDWHA3fXYJSqs1DeNWtvfkNcyiM';

//Getting Address from Gurdwara
// const { Geocode } = require('./geocode.model');
// const { gurdwaraResolvers } = require('../gurdwaras/gurdwara.resolvers');

const address = "1600 Amphitheatre Parkway, Mountain View, CA 94043"
console.log(address);

const googleMapsClient = require('@google/maps').createClient({
    key: `${key}`
});

googleMapsClient.geocode({
    address: `${address}`
}, (err, res) => {
    if(!err) {
        const latitude = res.json.results[0].geometry.location.lat;
        console.log(latitude);
        const longitude = res.json.results[0].geometry.location.lng; 
        console.log(longitude);

        return Geocode.create({
            "latitude": latitude,
            "longitude": longitude
        })
    }
});
