const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");
const commentsSchema = require("./Comment.js");

const postSchema = new Schema(
  {
    postImg: {
      type: String,
      required: true,
    },
    caption: {
      type: String,
    },
    created_by: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    comments: [commentsSchema],
    likes: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    toJSON: {
      getters: true,
    },
    timestamps: true,
  }
);

postSchema.virtual("likeCount").get(function () {
  return this.likes.length;
});

const Post = model("Post", postSchema);

module.exports = Post;
