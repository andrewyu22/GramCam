import React, { useState } from "react";
import { NEW_USER } from "../../utils/mutations";
import { useMutation } from "@apollo/client";
import Auth from "../../utils/auth";
function Signup() {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
  });
  const [newUser, { error }] = useMutation(NEW_USER);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  const formSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await newUser({ variables: { ...userData } });
      Auth.login(data.newUser.token);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div
      className="modal fade"
      id="modalRegisterForm"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="myModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content" style={{ background: "aliceblue" }}>
          <div
            className="modal-header text-center"
            style={{ background: "lightsteelblue" }}
          >
            <h4 className="modal-title w-100 font-weight-bold">SIGN UP</h4>
            <button
              type="button"
              className="btn-close"
              data-mdb-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body mx-3">
            <div className="md-form mb-5">
              <label htmlFor="signUpFirst">First Name:</label>
              <input
                type="text"
                id="signUpFirst"
                className="form-control"
                onChange={handleInputChange}
                name="firstName"
              />
            </div>
            <div className="md-form mb-5">
              <label htmlFor="signUpLast">Last Name:</label>
              <input
                type="text"
                id="signUpLast"
                className="form-control"
                onChange={handleInputChange}
                name="lastName"
              />
            </div>
            <div className="md-form mb-5">
              <label htmlFor="signUpUsername">Username:</label>
              <input
                type="text"
                id="signUpUsername"
                className="form-control"
                onChange={handleInputChange}
                name="username"
              />
            </div>
            <div className="md-form mb-5">
              <label htmlFor="signUpEmail">Email:</label>
              <input
                type="email"
                id="signUpEmail"
                className="form-control"
                onChange={handleInputChange}
                name="email"
              />
            </div>
            <div className="md-form mb-4">
              <label htmlFor="signUpPass">Password:</label>
              <input
                type="password"
                id="signUpPass"
                className="form-control"
                onChange={handleInputChange}
                name="password"
              />
            </div>
          </div>
          <div className="modal-footer d-flex justify-content-center">
            <button className="btn btn-primary" onClick={formSubmit}>
              Register
            </button>
          </div>
          {error && (
            <div className="text-center mb-3 text-danger">
              Missing Information!
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Signup;
