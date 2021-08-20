import { gql } from '@apollo/client';

export const QUERY_LISTINGS = gql`
  query listings {
    tech {
      _id
      address
      price
      dedroom
      bathroom
      type
      amenities
      available
      contact [{
        name
        email
      }]
      bookmark
      roomies
    }
  }
`;

export const QUERY_PROFILE = gql`
  query profile($_id: String) {
    profile(_id: $_id) {
      _id
      name
      phoneNumber
      email
      budget
      bookmark
      roomies
    }
  }
`;
