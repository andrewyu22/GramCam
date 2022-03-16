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

export const ADD_COMMENT = gql`
  mutation addComment($_id: ID!, $commentText: String!) {
    addComment(_id: $_id, commentText: $commentText) {
      _id
      postImg
      comments {
        _id
        commentText
        comment_by {
          _id
          username
          avatarImg
        }
      }
    }
  }
`;

export const UPDATE_PROFILE = gql`
  mutation updateAvatar($avatarImg: String!) {
    updateAvatar(avatarImg: $avatarImg) {
      _id
      username
      avatarImg
      firstName
      lastName
    }
  }
`;
