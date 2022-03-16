import React, { useEffect, useState } from "react";
import { GET_USER } from "../utils/queries";
import { useQuery } from "@apollo/client";
import Auth from "../utils/auth";
function Profile() {
  const [searchUser, setSearchUser] = useState("");
  const { loading, data } = useQuery(GET_USER, {
    variables: { username: searchUser },
  });
  useEffect(() => {
    if (Auth.loggedIn) {
      setSearchUser(Auth.getProfile().data.username);
    }
  }, []);
  const userData = data?.user || {};
  if (loading) {
    <div class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>;
  }
  console.log(userData);
  return (
    <div className="container mt-3">
      <div className="d-flex justify-content-center border">
        <div className="row text-center align-items-center">
          <div className="col">
            <img src={userData.avatarImg} alt="User Pic" height="200" />
            <h2>
              {userData.firstName} {userData.lastName}
            </h2>
          </div>
          <div className="col">
            <button className="btn btn-primary">Edit Profile</button>
          </div>
        </div>

        <div className="row">
          <h1>HI</h1>
        </div>
      </div>
    </div>
  );
}

export default Profile;
