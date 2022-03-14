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

export const ADD_POST = gql`
  mutation addPost($postImg: String!, $caption: String) {
    addPost(postImg: $postImg, caption: $caption) {
      _id
      postImg
      caption
      created_by {
        _id
        username
        avatarImg
      }
      likeCount
      likes {
        _id
      }
    }
  }
`;

export const ADD_LIKE = gql`
  mutation addLike($_id: ID!) {
    addLike(_id: $_id) {
      postImg
      likeCount
      likes {
        _id
      }
    }
  }
`;

export const REMOVE_LIKE = gql`
  mutation removeLike($_id: ID!) {
    removeLike(_id: $_id) {
      postImg
      likeCount
      likes {
        _id
      }
    }
  }
`;
