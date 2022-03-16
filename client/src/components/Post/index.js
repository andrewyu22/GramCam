import React, { useState, useEffect } from "react";
import { ADD_LIKE, REMOVE_LIKE, ADD_COMMENT } from "../../utils/mutations";
import { ALL_POST } from "../../utils/queries";
import { useMutation } from "@apollo/client";
import Auth from "../../utils/auth";
import Moment from "react-moment";
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
    <div className="card w-100 mt-3" id={postId}>
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
        className="bg-image hover-overlay ripple text-center"
        data-mdb-ripple-color="light"
      >
        <img
          src={postImg}
          className="img-fluid p-1 border-top border-bottom"
          alt="postImg"
        />
      </div>
      <div className="card-body p-0 ps-4">
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
          <h6>
            <strong>Caption: </strong>
            {caption}
          </h6>
        ) : (
          ""
        )}
      </div>
      <div className="container overflow-auto" style={{ maxHeight: "140px" }}>
        <h6 className="m-1 text-center">
          <strong>Comments: </strong>
        </h6>
        {comments.map((comment) => {
          return (
            <div className="card mb-2 border-top" key={comment._id}>
              <div className="card-body p-0 p-2">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex flex-row align-items-center">
                    <img
                      src={comment.comment_by.avatarImg}
                      alt="avatar"
                      width="30"
                      height="30"
                    />
                    <p className="small mb-0 ms-2">
                      {comment.comment_by.username}
                    </p>
                  </div>
                  <p className="mb-0 ms-2">
                    {comment.commentText.length > 40
                      ? comment.commentText.substring(0, 40) + "..."
                      : comment.commentText}
                  </p>
                  <Moment className="ms-5" fromNow>
                    {comment.createdAt}
                  </Moment>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {Auth.loggedIn() ? (
        <div className="p-0 card-footer d-flex">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Add a Comment..."
            onChange={(e) => setComment(e.target.value)}
            value={comment}
          />
          <button
            disabled={!comment.trim()}
            className="btn btn-success"
            onClick={newComment}
          >
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
