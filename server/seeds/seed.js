const db = require('../config/connection');
const { Listings, Profile } = require('../models');

const listingsData = require('./search.json');

module.exports.seeder = async () => {
    console.log("doing the seed!");
    try {
        await Listings.deleteMany({});
        const listings = await Listings.insertMany(listingsData);
        console.log("data seeded --- ", listings)
        console.log('Search results seeded!');
    } catch (err) {
        console.log("error while seeding! --- ", err);
        return null
    }
    return true
}

