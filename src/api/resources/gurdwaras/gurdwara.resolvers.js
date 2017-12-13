import{ Gurdwara } from './gurdwara.model'

const getGurdwara = (_, {id}, {gurdwara}) => {
    return Gurdwara.findById(id).exec()
}

const allGurdwaras = () => {
    return Gurdwara.find({}).exec()
}

const newGurdwara = (_, {input}) => {
    //API KEY
    const key = 'AIzaSyBHKC6AoDWHA3fXYJSqs1DeNWtvfkNcyiM';
    const address = `${input.addressLine1}, ` + `${input.city}, ` + `${input.state} ` + `${input.zipcode}`;

    const googleMapsClient = require('@google/maps').createClient({
        key: `${key}`
    });

    googleMapsClient.geocode({
        address: `${address}`
    }, (err, res) => {
        if(!err) {
            const latitude = res.json.results[0].geometry.location.lat;
            const longitude = res.json.results[0].geometry.location.lng; 
            const inputLatLong = {
                name: `${input.name}`,
                addressLine1: `${input.addressLine1}`,
                addressLine2: `${input.addressLine2}`,
                city: `${input.city}`,
                state: `${input.state}`,
                zipcode: `${input.zipcode}`,
                country: `${input.country}`,
                phoneNumber: `${input.phoneNumber}`,
                email: `${input.email}`,
                latitude: `${latitude}`,
                longitude: `${longitude}`
            }
            
            return Gurdwara.create(inputLatLong)
        }
    });
}

const updateGurdwara = (_, {input}) => {
    const {id, ...update} = input

    return Gurdwara.findByIdAndUpdate(id, update, {new: true}).exec()
}

export const gurdwaraResolvers = {
    Query: {
        allGurdwaras,
        Gurdwara: getGurdwara
    },

    Mutation: {
        newGurdwara,
        updateGurdwara
    }
}