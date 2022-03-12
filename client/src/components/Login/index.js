import React from "react";

function Login() {

  return (
    <div>
      <h1>Hi</h1>
      <form>
    <div class="mb-3">
        <label class="form-label" for="inputEmail">Email</label>
        <input type="email" class="form-control" id="inputEmail" placeholder="Email"/> 
    </div>
    <div class="mb-3">
        <label class="form-label" for="inputPassword">Password</label>
        <input type="password" class="form-control" id="inputPassword" placeholder="Password"/>
    </div>
    <div class="mb-3">
        <div class="form-check">
            <input class="form-check-input" type="checkbox" id="checkRemember"/>
            <label class="form-check-label" for="checkRemember">Remember me</label>
        </div>
    </div>
    <button type="submit" class="btn btn-primary">Sign in</button>
</form>
    </div>
  );
}

export default Login;
