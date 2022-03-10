const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    firstName: String
    lastName: String
    username: String
    email: String
    avatarImg: String
    posts: [Post]
    created_at: String
  }

  type Post {
    _id: ID
    postImg: String
    caption: String
    created_by: String
    post_created_at: String
    comments: [Comment]
    likeCount: Int
    likes: [User]
  }

  type Comment {
    _id: ID
    commentText: String
    created_by: String
    comment_created_at: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    user(username: String!): User
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
  }
`;

module.exports = typeDefs;
