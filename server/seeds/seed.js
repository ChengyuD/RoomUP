const db = require('../config/connection');
const { Listings, Profile } = require('../models');

const listingsData = require('./listingsData.json');

db.once('open', async () => {
  await Tech.deleteMany({});

  const technologies = await Tech.insertMany(techData);

  console.log('Technologies seeded!');
  process.exit(0);
});
