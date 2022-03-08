const { Schema, model } = require('mongoose');
const commentSchema = new Schema(
  {
    text: {
      type: String,
  
    },
	
},
  {
    toJSON: {
      virtuals: true,
    },
  }
);


const Comment = model('comment', commentSchema);

module.exports = Comment;