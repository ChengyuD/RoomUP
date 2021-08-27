const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { Schema } = mongoose;

const profileSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
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

// set up pre-save middleware to create password
profileSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        console.log('pw: ', this.password);
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();
});
  
// compare the incoming password with the hashed password
profileSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
};

const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;