const { Schema } = require("mongoose");

const commentSchema = new Schema(
  {
    commentText: {
      type: String,
      required: true,
    },
    comment_by: {
      type: Schema.Types.ObjectId,
      ref: "User",
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
