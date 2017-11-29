import mongoose from 'mongoose'

const gurdwaraSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Gurdwara must have  a name']
    },
    address_1: {
        type: String,
        required: [true, 'Gurdwara must have a address'],
        unique: true
    },
    address_2: {
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
        type: Number
    },
    country: {
        type: String,
        required: [true, 'Gurdwara must have a country'],        
    },
    phoneNumber: {
        type: Number,
        required: [true, 'Gurdwara must have a phoneNumber'],
    },
    email: {
        type: String,
    }
})


export const Gurdwara = mongoose.model('gurdwara', gurdwaraSchema)