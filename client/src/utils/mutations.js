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

