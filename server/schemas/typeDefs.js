const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Listings {
    _id: ID
    address: String
    price: Int
    bedroom: Int
    bathroom: Int
    type: String
    amenities: String
    available: Date
    contact: {
      name: String
      email: String
    }
    bookmark: Boolean
    roomies: Boolean
  }

  type Profile {
    _id: ID
    name: String
    phoneNumber: String
    email: String
    budget: Int
    bookmark: Boolean
    roomies: Boolean
  }

  type Query {
    listings: [Listings]
    profile: Profile
  }

  type Mutation {
    addProfile(name: String!, phoneNumber: String!, email: String!, budget: Int, bookmark: Boolean, roomies: Boolean): Auth
    updateUser(name: String!, phoneNumber: String!, email: String!, budget: Int, bookmark: Boolean, roomies: Boolean): Profile
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
