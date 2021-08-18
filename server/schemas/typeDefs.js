const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Listings {
    _id: ID
    name: String
  }

  type Profile {
    
  }

  type Query {
    listings: [Listings]
  }

  type Mutation {
    
  }
`;

module.exports = typeDefs;
