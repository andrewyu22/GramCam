const { Schema, model } = require('mongoose');
const commentsSchema - require('./Comment.js');

const postSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
  
    },
	comments: [commentsSchema]
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

userSchema.virtual('commentCount').get(function () {
  return this.comments.length;
});

const Post = model('post', postSchema);

module.exports = Post;