const { AuthenticationError } = require('apollo-server-express');
const { Listings, Profile } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    profile: async (_, args, context) => {
      if (context.profile) {
        return Profile.findById(context.profile.id);
      }

      throw new AuthenticationError('Not logged in');
    },
    listings: async () => {
      return Listings.find();
    },
    listing: async (_, { id }) => {
      return Listings.findById(id);
    },
  },
  Mutation: {
    addProfile: async (_, args) => {
      const profile = await Profile.create(args);
      const token = signToken(profile);

      return { token, profile };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

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
