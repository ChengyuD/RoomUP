const db = require('../config/connection');
const { Listings, Profile } = require('../models');

const listingsData = require('./search.json');

db.once('open', async () => {
  await Listings.deleteMany({});

  const technologies = await Listings.insertMany(techData);

  console.log('Technologies seeded!');
  process.exit(0);
});

