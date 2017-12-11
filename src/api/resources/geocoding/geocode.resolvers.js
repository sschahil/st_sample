import { Geocode } from './geocode.model'
import { Gurdwara } from '../gurdwaras/gurdwara.model'

const getGeocode = (_, {id}) => {
    return Geocode.findById(id).exec()
}

const allGeocodes = () => {
    return Geocode.find({}).exec()
}

const newGeocode = (_, {input}) => {

    //API KEY
    const key = 'AIzaSyBHKC6AoDWHA3fXYJSqs1DeNWtvfkNcyiM';
    const address = "1600 Amphitheatre Parkway, Mountain View, CA 94043"
    // const address = `${gurdwara.address_1}, ` + `${gurdwara.city}, ` + `${gurdwara.state} ` + `${gurdwara.zipcode}`;

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
                "longitude": longitude,
                "gurdwara": input.gurdwara
            })
        }
    });
}

export const geocodeResolvers = {
    Query: {
        allGeocodes,
        Geocode: getGeocode
    },

    Mutation: {
        newGeocode
    },

    Geocode: {
        async gurdwara(geocode) {
            const populated = await geocode
            .populate('gurdwara')
            .execPopulate()

            return populated.gurdwara
        }   
    }
}