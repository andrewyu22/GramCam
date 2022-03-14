import React from "react";

function Post(props) {
  const { postId, avatarImg, username, caption, postImg } = props;
  return (
    <div
      style={{
        maxWidth: "600px",
        border: "1px solid lightgray",
      }}
      id={postId}
      className="mt-3"
    >
      <div className="d-flex m-1 ms-2">
        <img
          src={avatarImg}
          className="rounded-circle"
          height="40"
          alt="avatarImg"
          loading="lazy"
        />
        <h3 className="ms-2">{username}</h3>
      </div>
      <img
        src={postImg}
        alt="postImg"
        className="img-fluid border-top border-bottom"
      />
      {caption ? (
        <h4 className="p-3">
          <strong>{username}: </strong>
          {caption}
        </h4>
      ) : (
        ""
      )}
    </div>
  );
}

export default Post;
