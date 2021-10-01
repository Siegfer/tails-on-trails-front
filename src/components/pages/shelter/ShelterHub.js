import React from "react";
import ShelterSignup from "./ShelterSignup";
import ShelterLogin from "./ShelterLogin";
import "./Form.css";

function ShelterHub() {
  return (
    <div>
      <h1>Shelter Hub</h1>
      <ShelterLogin />
      <ShelterSignup />
    </div>
  );
}

export default ShelterHub;
