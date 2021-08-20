const mongoose = require('mongoose');

const { Schema } = mongoose;

const profileSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    phoneNumber: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
    },
    budget: {
        type: Number,
        default: 0,
    },
    bookmark: {
        type: Boolean,
        default: false,
    },
    roomies: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Profile',
        }
    ]
});

const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;