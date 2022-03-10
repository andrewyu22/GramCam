import React from "react";
function Signup() {
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
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body mx-3">
            <div class="md-form mb-5">
              <label for="orangeForm-name">First Name:</label>
              <input type="text" id="orangeForm-name" class="form-control" />
            </div>
            <div class="md-form mb-5">
              <label for="orangeForm-name">Last Name:</label>
              <input type="text" id="orangeForm-name" class="form-control" />
            </div>
            <div class="md-form mb-5">
              <label for="orangeForm-name">Username:</label>
              <input type="text" id="orangeForm-name" class="form-control" />
            </div>
            <div class="md-form mb-5">
              <label for="orangeForm-email">Email:</label>
              <input type="email" id="orangeForm-email" class="form-control" />
            </div>

            <div class="md-form mb-4">
              <label for="orangeForm-pass">Password:</label>
              <input
                type="password"
                id="orangeForm-pass"
                class="form-control"
              />
            </div>
          </div>
          <div class="modal-footer d-flex justify-content-center">
            <button class="btn btn-deep-orange">Register</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
