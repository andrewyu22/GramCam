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
      class="modal fade"
      id="modalRegisterForm"
      tabindex="-1"
      role="dialog"
      aria-labelledby="myModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header text-center">
            <h4 class="modal-title w-100 font-weight-bold">SIGN UP</h4>
            <button
              type="button"
              class="btn-close"
              data-mdb-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body mx-3">
            <div class="md-form mb-5">
              <label for="orangeForm-name">First Name:</label>
              <input
                type="text"
                id="orangeForm-name"
                class="form-control"
                onChange={handleInputChange}
                name="firstName"
              />
            </div>
            <div class="md-form mb-5">
              <label for="orangeForm-name">Last Name:</label>
              <input
                type="text"
                id="orangeForm-name"
                class="form-control"
                onChange={handleInputChange}
                name="lastName"
              />
            </div>
            <div class="md-form mb-5">
              <label for="orangeForm-name">Username:</label>
              <input
                type="text"
                id="orangeForm-name"
                class="form-control"
                onChange={handleInputChange}
                name="username"
              />
            </div>
            <div class="md-form mb-5">
              <label for="orangeForm-email">Email:</label>
              <input
                type="email"
                id="orangeForm-email"
                class="form-control"
                onChange={handleInputChange}
                name="email"
              />
            </div>

            <div class="md-form mb-4">
              <label for="orangeForm-pass">Password:</label>
              <input
                type="password"
                id="orangeForm-pass"
                class="form-control"
                onChange={handleInputChange}
                name="password"
              />
            </div>
          </div>
          <div class="modal-footer d-flex justify-content-center">
            <button class="btn btn-deep-orange" onClick={formSubmit}>
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
