const { User, Post } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select("-__v -password")
          .populate("posts");
        return userData;
      }
      throw new AuthenticationError("You need to be logged in.");
    },
    user: async (parent, { username }, context) => {
      if (context.user) {
        const userData = await User.findOne({ username })
          .select("-__v -password")
          .populate("posts");
        return userData;
      }
      throw new AuthenticationError("You need to be logged in.");
    },
    allPosts: async (parent, args) => {
      return Post.find({}).populate("created_by").sort({ createdAt: -1 });
    },
  },
  Mutation: {
    newUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new AuthenticationError("Invaild user.");
      }
      const checkPassword = await user.isCorrectPassword(password);
      if (!checkPassword) {
        throw new AuthenticationError("Invalid password.");
      }
      const token = signToken(user);
      return { token, user };
    },
    addPost: async (parent, args, context) => {
      if (context.user) {
        const post = await Post.create({
          ...args,
          created_by: context.user._id,
        });
        const userData = await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { posts: post._id } },
          { new: true }
        );
        return post;
      }
      throw new AuthenticationError("You need to be Logged In!");
    },
    removePost: async (parent, { _id }, context) => {
      if (context.user) {
        const updateUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { posts: _id } },
          { new: true }
        ).populate("posts");
        await Post.findByIdAndDelete({ _id });
        return updateUser;
      }
      throw new AuthenticationError("You need to be Logged In!");
    },
    addLike: async (parent, { _id }, context) => {
      if (context.user) {
        const updatePost = await Post.findOneAndUpdate(
          { _id: _id },
          { $addToSet: { likes: context.user._id } },
          { new: true }
        );
        return updatePost;
      }
      throw new AuthenticationError("You need to be Logged In!");
    },
    removeLike: async (parent, { _id }, context) => {
      if (context.user) {
        const updatePost = await Post.findOneAndUpdate(
          { _id: _id },
          { $pull: { likes: context.user._id } },
          { new: true }
        );
        return updatePost;
      }
      throw new AuthenticationError("You need to be Logged In!");
    },
    addComment: async (parent, { _id, commentText }, context) => {
      if (context.user) {
        const addComment = await Post.findOneAndUpdate(
          { _id: _id },
          {
            $push: {
              comments: { commentText, created_by: context.user.username },
            },
          },
          { new: true }
        );
        return addComment;
      }
      throw new AuthenticationError("You need to be Logged In!");
    },
  },
};

module.exports = resolvers;
