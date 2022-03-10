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
  },
};

module.exports = resolvers;
