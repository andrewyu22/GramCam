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
    comment_created_at: {
      type: Date,
      default: Date.now,
      get: (timestamp) => dateFormat(timestamp),
    },
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

module.exports = commentSchema;
