import React, { useState, useEffect } from "react";
import { ADD_LIKE, REMOVE_LIKE } from "../../utils/mutations";
import { useMutation } from "@apollo/client";
import Auth from "../../utils/auth";
function Post(props) {
  const { postId, avatarImg, username, caption, postImg, likeCount, likes } =
    props;
  const [liked, setLiked] = useState(false);
  useEffect(() => {
    if (Auth.loggedIn()) {
      if (likes.some((like) => like._id === Auth.getProfile().data._id)) {
        setLiked(true);
      }
    }
  }, []);
  const [addLike] = useMutation(ADD_LIKE);
  const [removeLike] = useMutation(REMOVE_LIKE);
  const likePost = async () => {
    try {
      await addLike({ variables: { _id: postId } });
    } catch (err) {
      console.log(err);
    }
  };
  const removeLikedPost = async () => {
    try {
      await removeLike({ variables: { _id: postId } });
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
          liked ? (
            <h5 className="card-title d-flex align-items-center">
              <a href="#!" onClick={removeLikedPost}>
                <i className="fas fa-heart fa-lg"></i>
              </a>
              <p className="m-2">{likeCount} likes</p>
            </h5>
          ) : (
            <h5 className="card-title d-flex align-items-center">
              <a href="#!" onClick={likePost}>
                <i className="far fa-heart fa-lg"></i>
              </a>
              <p className="m-2">{likeCount} likes</p>
            </h5>
          )
        ) : (
          ""
        )}
        {caption ? (
          <p className="card-text">
            <strong>{username}: </strong>
            {caption}
          </p>
        ) : (
          ""
        )}
      </div>
      <div className="card-footer">Comments</div>
    </div>
  );
}

export default Post;
