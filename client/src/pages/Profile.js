import React, { useEffect, useState } from "react";
import { GET_USER } from "../utils/queries";
import { REMOVE_POST } from "../utils/mutations";
import { useQuery, useMutation } from "@apollo/client";
import Auth from "../utils/auth";
import EditProfile from "../components/UpdateProfile";
function Profile() {
  const [searchUser, setSearchUser] = useState("");
  const [removePost] = useMutation(REMOVE_POST, {
    refetchQueries: [GET_USER],
  });
  const { loading, data } = useQuery(GET_USER, {
    variables: { username: searchUser },
  });
  useEffect(() => {
    if (Auth.loggedIn) {
      setSearchUser(Auth.getProfile().data.username);
    }
  }, []);
  const userData = data?.user || {};
  const deletePost = async (e) => {
    try {
      await removePost({ variables: { _id: e.target.id } });
    } catch (err) {
      console.log(err);
    }
  };
  if (loading) {
    <div className="spinner-border" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>;
  }
  return (
    <div className="container mt-3">
      <EditProfile avatar={userData.avatarImg} />
      <div className="d-flex flex-row text-center justify-content-center align-items-center">
        <img
          className="p-3"
          src={userData.avatarImg}
          alt="User Pic"
          height="200"
          width="180"
        />
        <div className="ms-4">
          <h2>
            {userData.firstName} {userData.lastName}
          </h2>
          <button
            className="btn btn-primary mt-3"
            data-mdb-toggle="modal"
            data-mdb-target="#updateModal"
          >
            Edit Profile
          </button>
        </div>
      </div>
      <div className="row mb-5">
        {userData.posts &&
          userData.posts.map((post) => {
            return (
              <div className="col-12 col-md-6 col-lg-4 mt-3" key={post._id}>
                <div className="card h-100">
                  <img
                    src={post.postImg}
                    alt="postImg"
                    className="posts img-fluid"
                  />
                  <div className="card-footer text-center">
                    <p>
                      <strong>Caption: </strong>
                      {post.caption}
                    </p>
                    <button
                      id={post._id}
                      className="btn btn-danger"
                      onClick={deletePost}
                    >
                      Delete Post
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Profile;
