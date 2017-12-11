import mongoose from 'mongoose'
mongoose.Promise = require('bluebird');

const geocodeSchema = new mongoose.Schema({
    gurdwara: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'gurdwara'
    },

    latitude: {
        type: String,
        required: [true, 'Geocode must have a latitude']
    },

    longitude: {
        type: String,
        required: [true, 'Geocode must have a longitude']
    }
})

export const Geocode = mongoose.model('geocode', geocodeSchema)
