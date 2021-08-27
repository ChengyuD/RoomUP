import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
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

export const ADD_PROFILE = gql`
  mutation addProfile($name: String!, $email: String!, $password: String!) {
    addProfile(name: $name, email: $email, password: $password) {
      token
      profile {
        _id
        name
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
  mutation createListings($img: String!, $city: String!, $address: String!, $description: String!, $pets: Boolean!, $price: Srting!, $contact: String!, $roomies: String!) {
    createListings(img: $img, ity: $city, address: $address, description: $description, pets: $pets, price: $price, contact: $contact, roomies: $roomies) {
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