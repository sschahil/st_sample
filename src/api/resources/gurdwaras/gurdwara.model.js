const mongoose = require('mongoose');

const gurdwaraSchema = new mongoose.Schema({
    name: {
        type: String,
        // required: [true, 'Gurdwara must have  a name']
    },
    addressLine1: {
        type: String,
        required: [true, 'Gurdwara must have a address'],
        unique: true
    },
    addressLine2: {
        type: String
    },
    city: {
        type: String,
        required: [true, 'Gurdwara must have a city'],        
    },
    state: {
        type: String,
        required: [true, 'Gurdwara must have a state'],        
    },
    zipcode: {
        type: String
    },
    country: {
        type: String,
        // required: [true, 'Gurdwara must have a country'],        
    },
    phoneNumber: {
        type: String,
        // required: [true, 'Gurdwara must have a phoneNumber'],
    },
    email: {
        type: String,
    }
})

exports.Gurdwara = mongoose.model('gurdwara', gurdwaraSchema)