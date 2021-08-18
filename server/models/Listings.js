const { Schema, model } = require('mongoose');

const listingsSchema = new Schema({
    address: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    price: {
        type: Number,
        required: true,
        min: 0.99,
    },
    bedroom: {
        type: Number,
        required: true,
        unique: false,
    },
    bathroom: {
        type: Number,
        required: true,
        unique: false,
    },
    type: {
        type: String,
        required: true,
        unique: false,
    },
    amenities: {
        type: String,
        required: true,
        unique: false,
    },
    avilable: {
        type: Date,
        required: true,
        unique: false,
    },
    contact: [
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/, 'Must match an email address!'],
        },
    },
    ],
    bookmark,
    roomies,
});

const Listings = model('Listings', listingsSchema);

module.exports = Listings;

