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
      post_created_at
      comments {
        commentText
      }
      likeCount
      likes {
        _id
      }
    }
  }
`;
