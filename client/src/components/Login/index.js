import React, { useState } from "react";
import { LOG_IN } from "../../utils/mutations";
import { useMutation } from "@apollo/client";
import Auth from "../../utils/auth";
function Login() {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [login, { error }] = useMutation(LOG_IN);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log([name], value);
    setUserData({ ...userData, [name]: value });
  };
  const loginSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await login({ variables: { ...userData } });
      Auth.login(data.login.token);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div
      className="modal fade"
      id="modalLoginForm"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="myModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header text-center">
            <h4 className="modal-title w-100 font-weight-bold">LOGIN</h4>
            <button
              type="button"
              className="btn-close"
              data-mdb-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body mx-3">
            <div className="md-form mb-5">
              <label htmlFor="loginEmail">Email:</label>
              <input
                type="email"
                id="loginEmail"
                className="form-control"
                onChange={handleInputChange}
                name="email"
              />
            </div>
            <div className="md-form mb-4">
              <label htmlFor="loginPass">Password:</label>
              <input
                type="password"
                id="loginPass"
                className="form-control"
                onChange={handleInputChange}
                name="password"
              />
            </div>
          </div>
          <div className="modal-footer d-flex justify-content-center">
            <button className="btn btn-deep-orange" onClick={loginSubmit}>
              Login
            </button>
          </div>
          {error && (
            <div className="text-center mb-3 text-danger">
              Incorrect Credentials
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default Login;
