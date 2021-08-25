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
  mutation createProfile($name: String!, $phoneNumber: String!, $email: String!, $budget: Int!, $bookmark: Boolean!, $roomies: Boolean!) {
    createProfile(name: $name, phoneNumber: $phoneNumber, email: $email, budget: $budget, bookmark: $bookmark, roomies: $roomies) {
      name
      phoneNumber
      email
      budget
      bookmark
      roomies
    }
  }
`;

