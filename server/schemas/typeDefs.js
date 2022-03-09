const {gql} = require("apollo-server-express");

const typeDefs = gql`
type User {
    firstName: String
    lastName: String
    username: String
    email: String
    avatarImg: String
    posts: [Post]
    created_by: String
}

type Post {
    _id: ID
    posting: String
    caption: String
    created_by: String
    created_by_at: String
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
}`;

module.exports = typeDefs;