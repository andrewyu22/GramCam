import React from "react";
import Auth from "../../utils/auth";
function Post(props) {
  const { postId, avatarImg, username, caption, postImg } = props;
  return (
    <div class="card w-50 mt-3">
      <div class="card-header d-flex align-items-center">
        <img
          src={avatarImg}
          className="rounded-circle"
          height="40"
          alt="avatarImg"
          loading="lazy"
        />
        <a href="#!">
          <div
            class="mask"
            style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
          ></div>
        </a>
        <h3 className="ms-2">{username}</h3>
      </div>
      <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
        <img src={postImg} class="img-fluid" alt="postImg" />
      </div>
      <div class="card-body">
        <h5 class="card-title d-flex align-items-center">
          <a href="#!" className="p-2">
            <span>
              <i className="far fa-heart fa-lg"></i>
            </span>
          </a>
          <h4 className="m-2">0 likes</h4>
        </h5>
        <p class="card-text">
          <strong>{username}: </strong>
          {caption}
        </p>
      </div>
      <div class="card-footer">Comments</div>
    </div>

    // <div
    //   style={{
    //     maxWidth: "600px",
    //     border: "1px solid lightgray",
    //   }}
    //   id={postId}
    //   className="mt-3"
    // >
    //   <div className="d-flex m-1 ms-2">
    //     <img
    //       src={avatarImg}
    //       className="rounded-circle"
    //       height="40"
    //       alt="avatarImg"
    //       loading="lazy"
    //     />
    //     <h3 className="ms-2">{username}</h3>
    //   </div>
    //   <img
    //     src={postImg}
    //     alt="postImg"
    //     className="img-fluid border-top border-bottom"
    //   />
    //   {Auth.loggedIn() ? (
    //     <div className="d-flex mt-3 ms-3 align-items-center">
    //       <a href="#">
    //         <span>
    //           <i className="far fa-heart fa-lg"></i>
    //         </span>
    //       </a>
    //       <h4 className="m-2">0 likes</h4>
    //     </div>
    //   ) : (
    //     ""
    //   )}

    //   {caption ? (
    //     <h4 className="p-3">
    //       <strong>{username}: </strong>
    //       {caption}
    //     </h4>
    //   ) : (
    //     ""
    //   )}
    // </div>
  );
}

export default Post;
