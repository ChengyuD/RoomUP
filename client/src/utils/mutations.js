import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      profile {
        _id
        email
      }
    }
  }
`;

export const CREATE_PROFILE = gql`
  mutation createProfile($name: String!, $phoneNumber: String!, $email: String!, $budget: Int!, $roomies: Boolean!) {
    createProfile(name: $name, phoneNumber: $phoneNumber, email: $email, budget: $budget, roomies: $roomies) {
      name
      phoneNumber
      email
      budget
      roomies
    }
  }
`;

export const CREATE_Listings = gql`
  mutation createListings($city: String!, $address: String!, $description: String!, $pets: Boolean!, $price: Srting!, $contact: String!, $roomies: String!) {
    createListings(city: $city, address: $address, description: $description, pets: $pets, price: $price, contact: $contact, roomies: $roomies) {
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