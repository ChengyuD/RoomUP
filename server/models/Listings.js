const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { Schema } = mongoose;

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
        type: Boolean,
        required: true,
        trim: true,
    },
    price: {
        type: String,
        required: true,
        default: 0,
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
        type: Schema.Types.ObjectId,
        ref: 'Listings',
    },
});

const Listings = mongoose.model('Listings', listingsSchema);

module.exports = Listings;

