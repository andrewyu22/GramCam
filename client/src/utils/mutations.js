import { gql } from "@apollo/client";

export const NEW_USER = gql`
  mutation newUser(
    $firstName: String!
    $lastName: String!
    $username: String!
    $email: String!
    $password: String!
  ) {
    newUser(
      firstName: $firstName
      lastName: $lastName
      username: $username
      email: $email
      password: $password
    ) {
      token
      user {
        firstName
        lastName
        email
        username
      }
    }
  }
`;

export const LOG_IN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        firstName
        lastName
        email
        username
      }
    }
  }
`;
