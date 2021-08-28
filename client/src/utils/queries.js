import { gql } from '@apollo/client';

export const QUERY_LISTINGS = gql`
{
  listings {
    img
    city
    address
    type
    description
    pets
    price
    contact {  
      name
      email
    }
    roomies
  }
  }
`;

export const QUERY_PROFILE = gql`
   query singleProfile {
    profile(id: "61284e701628134e2e508484") {
      _id
      name
      email
    }
  }
`;
