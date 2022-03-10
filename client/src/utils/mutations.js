import { gql } from "@apollo/client";

export const NEW_USER = gql`
  mutation newUser(
    $firstname: String!
    $lastName: String!
    $username: String!
    $email: String!
    $password: String!
  ) {
    newUser(
      firstName: $firstname
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
