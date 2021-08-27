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
    _id: ID
    name: String
    phoneNumber: String
    email: String
    password: String
    budget: Int
    roomies: String
  }

  type Auth {
    token: ID!
    profile: Profile
  }
  
  type Query {
    listings: [Listings]
    listing(id: ID): [Listings]
    profile: Profile
    profiles: [Profile]!
    seedData(secret: String!): Boolean
  }

  type Mutation {
    addProfile(name: String!, email: String!, password: String!): Auth
    updateUser(name: String!, phoneNumber: String!, email: String!, budget: Int, bookmark: Boolean, roomies: Boolean): Profile
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;