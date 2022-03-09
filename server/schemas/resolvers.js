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
};

module.exports = resolvers;
