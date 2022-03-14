const { Schema } = require("mongoose");
const dateFormat = require("../utils/dateFormat");
const commentSchema = new Schema(
  {
    commentText: {
      type: String,
      required: true,
    },
    created_by: {
      type: String,
      required: true,
    },
  },
  {
    toJSON: {
      getters: true,
    },
    timestamps: true,
  }
);

module.exports = commentSchema;
