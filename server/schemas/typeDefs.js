const { gql } = require('apollo-server-express');

const typeDefs = gql`
  scalar Date
  type Contact {
    name: String
    email: String
  }
  type Listings {
    city: String
    address: String
    type: String
    description: String
    pets: Boolean
    price: String
    contact: [Contact]
    roomies: String
  }

  type Profile {
    name: String
    phoneNumber: String
    email: String
    budget: Int
    roomies: String
  }

  type Query {
    listings: [Listings]
    listing(id: ID): [Listings]
    profile: Profile
    seedData(secret: String!): Boolean
  }

  type Mutation {
    addProfile(name: String!, phoneNumber: String!, email: String!, budget: Int, bookmark: Boolean, roomies: Boolean): Auth
    updateUser(name: String!, phoneNumber: String!, email: String!, budget: Int, bookmark: Boolean, roomies: Boolean): Profile
    login(email: String!, password: String!): Auth
  }
  type Auth {
    profile: Profile
    token: ID!
  }
`;

module.exports = typeDefs;