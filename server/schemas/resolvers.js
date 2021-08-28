const { AuthenticationError } = require('apollo-server-express');
const { Listings, Profile } = require('../models');
const { signToken } = require('../utils/auth');
const {seeder} = require("../seeds/graphqlSeed");

const { GraphQLScalarType } = require('graphql');

const dateScalar = new GraphQLScalarType({
  name: 'Date',
  parseValue(value) {
    return new Date(value);
  },
  serialize(value) {
    return value.toISOString();
  },
})

console.log(process.env.SEED_SECRET)

const resolvers = {
  Query: {
    profiles: async () => {
      return Profile.find();
    },
    profile: async (_, args, context) => {
      if (context.profile) {
        return Profile.findById(context.profile.id);
      }

      throw new AuthenticationError('Not logged in');
    },
    listings: async () => {
      return Listings.find().populate('roomies').exec();
    },
    listing: async (_, { id }) => {
      return Listings.findById(id);
    },
    seedData: async (_, {secret}) =>{
      console.log('secret ', secret)
     return  secret !== process.env.SEED_SECRET ?  null : seeder()
    }
  },
  Mutation: {
    addProfile: async (_, args) => {
      const profile = await Profile.create(args);
      const token = signToken(profile);

      return { token, profile };
    },
    login: async (parent, { email, password }) => {
      const user = await Profile.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
  }
};

module.exports = resolvers;
