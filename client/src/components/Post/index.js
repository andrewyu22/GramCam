import React, { useState, useEffect } from "react";
import { ADD_LIKE, REMOVE_LIKE, ADD_COMMENT } from "../../utils/mutations";
import { ALL_POST } from "../../utils/queries";
import { useMutation } from "@apollo/client";
import Auth from "../../utils/auth";

function Post(props) {
  const {
    postId,
    avatarImg,
    username,
    caption,
    postImg,
    likeCount,
    likes,
    comments,
  } = props;
  const [liked, setLiked] = useState(false);
  const [comment, setComment] = useState("");
  useEffect(() => {
    if (Auth.loggedIn()) {
      if (likes.some((like) => like._id === Auth.getProfile().data._id)) {
        setLiked(true);
      }
    }
  }, [likes]);
  const [addLike] = useMutation(ADD_LIKE, {
    refetchQueries: [ALL_POST],
  });
  const [removeLike] = useMutation(REMOVE_LIKE, {
    refetchQueries: [ALL_POST],
  });
  const [addComment] = useMutation(ADD_COMMENT, {
    refetchQueries: [ALL_POST],
  });
  const likePost = async () => {
    try {
      await addLike({ variables: { _id: postId } });
      setLiked(true);
    } catch (err) {
      console.log(err);
    }
  };
  const removeLikedPost = async () => {
    try {
      await removeLike({ variables: { _id: postId } });
      setLiked(false);
    } catch (err) {
      console.log(err);
    }
  };
  const newComment = async () => {
    try {
      await addComment({ variables: { _id: postId, commentText: comment } });
      setComment("");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="card w-50 mt-3" id={postId}>
      <div className="card-header d-flex align-items-center">
        <img
          src={avatarImg}
          className="rounded-circle"
          height="40"
          alt="avatarImg"
          loading="lazy"
        />
        <h3 className="ms-2">{username}</h3>
      </div>
      <div
        className="bg-image hover-overlay ripple"
        data-mdb-ripple-color="light"
      >
        <img
          src={postImg}
          className="img-fluid p-1 border-top border-bottom"
          alt="postImg"
        />
      </div>
      <div className="card-body">
        {Auth.loggedIn() ? (
          <h5 className="card-title d-flex align-items-center">
            {liked ? (
              <a href="#!" onClick={removeLikedPost}>
                <i className="fas fa-heart fa-lg"></i>
              </a>
            ) : (
              <a href="#!" onClick={likePost}>
                <i className="far fa-heart fa-lg"></i>
              </a>
            )}
            <p className="m-2">{likeCount} likes</p>
          </h5>
        ) : (
          ""
        )}
        {caption ? (
          <p className="card-text">
            <strong>Caption: </strong>
            {caption}
          </p>
        ) : (
          ""
        )}
        {comments.map((comment) => {
          return (
            <p className="card-text">
              <strong>{comment.created_by}: </strong>
              {comment.commentText}
            </p>
          );
        })}
      </div>
      {Auth.loggedIn() ? (
        <div className="p-0 card-footer d-flex">
          <input
            type="text"
            id="addComments"
            className="form-control form-control-lg"
            placeholder="Add a Comment..."
            onChange={(e) => setComment(e.target.value)}
          />
          <button className="btn btn-success" onClick={newComment}>
            Post
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Post;
