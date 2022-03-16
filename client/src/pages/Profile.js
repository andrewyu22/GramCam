import React, { useEffect, useState } from "react";
import { GET_USER } from "../utils/queries";
import { useQuery } from "@apollo/client";
import Auth from "../utils/auth";
import EditProfile from "../components/UpdateProfile";
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
  return (
    <div className="container mt-3">
      <EditProfile
        avatar={userData.avatarImg}
        first={userData.firstName}
        last={userData.lastName}
      />
      <div className="d-flex flex-column text-center align-items-center">
        <img
          className="rounded-circle p-3"
          src={userData.avatarImg}
          alt="User Pic"
          height="200"
          width="180"
        />
        <h2>
          {userData.firstName} {userData.lastName}
        </h2>
        <button
          className="btn btn-primary"
          data-mdb-toggle="modal"
          data-mdb-target="#updateModal"
        >
          Edit Profile
        </button>
      </div>
    </div>
  );
}

export default Profile;
