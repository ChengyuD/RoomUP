import { gql } from '@apollo/client';

export const QUERY_LISTINGS = gql`
{
  listings {
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
  {
    profile {
      name
      phoneNumber
      email
      budget
      roomies
    }
  }
`;
