import React from "react";
import WalkerLogin from "../walker/WalkerLogin";
import ShelterLogin from "../shelter/ShelterLogin";

function Login() {
  return (
    <div className="login-page-forms">
      <div className="login-page-shelter">
        <h1>Sign In as a Shelter</h1>
        <ShelterLogin />
      </div>
      <div className="login-page-volunteer">
        <h1>Sign In as a Volunteer</h1>
        <WalkerLogin />
      </div>
    </div>
  );
}

export default Login;
