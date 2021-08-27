const db = require('../config/connection');
const { Listings, Profile } = require('../models');

const listingsData = require('./search.json');

db.once('open', async () => {
  try {
    await Listings.deleteMany({});

    const listingResults = await Listings.collection.insertMany(listingsData);

    console.log('Search results seeded!');
    process.exit(0);
  } catch (err) {
    console.log("error while seeding", err);
  }
  
});

