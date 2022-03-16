const { gql } = require("apollo-server-express");

const typeDefs = gql`
  scalar Date

  type User {
    _id: ID
    firstName: String
    lastName: String
    username: String
    email: String
    avatarImg: String
    posts: [Post]
    createdAt: Date
  }

  type Post {
    _id: ID
    postImg: String
    caption: String
    created_by: User
    comments: [Comment]
    likeCount: Int
    likes: [User]
    createdAt: Date
    updatedAt: Date
  }

  type Comment {
    _id: ID
    commentText: String
    comment_by: User
    createdAt: Date
    updatedAt: Date
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    user(username: String): User
    allPosts: [Post]
    post(_id: ID!): Post
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    newUser(
      firstName: String!
      lastName: String!
      username: String!
      email: String!
      password: String!
    ): Auth
    addPost(postImg: String!, caption: String): Post
    removePost(_id: ID!): User
    addLike(_id: ID!): Post
    removeLike(_id: ID!): Post
    addComment(_id: ID!, commentText: String!): Post
    updateAvatar(avatarImg: String!): User
  }
`;

module.exports = typeDefs;
