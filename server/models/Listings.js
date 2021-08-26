const { Schema, model } = require('mongoose');

const listingsSchema = new Schema({
    city: {
        type: String,
        required: true,
        unique: false,
        trim: true,
    },
    address: {
        type: String,
        required: true,
        trim: true,
    },
    type: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    pets: {
        type: String,
        required: true,
        trim: true,
    },
    price: {
        type: String,
        required: true,
        trim: true,
    },
    contact: [
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            trim: true,
            match: [/.+@.+\..+/, 'Must match an email address!'],
        },
    },
    ],
    roomies: {
        type: Boolean,
        required: true,
        trim: true,
    },
});

const Listings = model('Listings', listingsSchema);

module.exports = Listings;

