import React from "react";
import WalkerSignup from "./WalkerSignup";
import "./WalkerHub.css";
import Video from "../../videos/volunteer.mp4";

function WalkerHub() {
  return (
    <div>
      <div>
        <video
          id="video"
          src={Video}
          className="profile-video"
          autoPlay
          loop
          muted
        />
      </div>
      <div class="volunteer-container">
        <div>
          <WalkerSignup />
        </div>
      </div>
    </div>
  );
}

export default WalkerHub;
