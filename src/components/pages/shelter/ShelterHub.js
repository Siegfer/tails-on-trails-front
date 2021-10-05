import React from "react";
import ShelterSignup from "./ShelterSignup";
import "./ShelterHub.css";
import Snow from "../../videos/snow.mp4";
import SnowFall from "../../videos/snowfall.mp4";

function ShelterHub() {
  return (
    <div>
      <video
        id="snowfall"
        src={SnowFall}
        className="backdrop"
        autoPlay
        loop
        muted
      />
      <div>
        <video
          id="snow"
          src={Snow}
          className="profile-video"
          autoPlay
          loop
          muted
        />
      </div>
      <div id="shelter-container-signup">
        <div>
          <ShelterSignup />
        </div>
      </div>
    </div>
  );
}

export default ShelterHub;
