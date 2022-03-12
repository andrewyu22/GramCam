import React, { useState } from "react";

function Login() {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log([name], value);
    setUserData({ ...userData, [name]: value });
  };
  return (
    <div
      class="modal fade"
      id="modalLoginForm"
      tabindex="-1"
      role="dialog"
      aria-labelledby="myModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header text-center">
            <h4 class="modal-title w-100 font-weight-bold">LOGIN</h4>
            <button
              type="button"
              class="btn-close"
              data-mdb-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body mx-3">
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
            <button class="btn btn-deep-orange">Login</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
