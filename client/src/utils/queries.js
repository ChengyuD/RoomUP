import { gql } from '@apollo/client';

export const QUERY_LISTINGS = gql`
{
    listings {
      address
      price
      dedroom
      bathroom
      type
      amenities
      available
      contact {  
        name
        email
      }
      bookmark
      roomies
    }
  }
`;

export const QUERY_PROFILE = gql`
  {
    profile {
      name
      phoneNumber
      email
      budget
      bookmark
      roomies
    }
  }
`;
