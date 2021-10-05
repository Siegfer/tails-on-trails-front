import Logo from "./Logo";
import "./Welcome.css";
import MyVid from "./videos/field.mp4";
import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./Welcome.css";
import { Link } from "react-router-dom";

function Welcome() {
  return (
    <div className="hero-container">
      <video src={MyVid} autoPlay loop muted />
      <Logo />
      <p>Your New Playmate Awaits...</p>
      <div className="hero-btns">
        <Link to="./WalkerHub">
          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
          >
            VOLUNTEER NOW!
          </Button>
        </Link>

        <Link to="./ShelterHub">
          <Button
            className="btns"
            buttonStyle="btn--primary"
            buttonSize="btn--large"
            onClick={console.log("hey")}
          >
            NEED A WALKER?
            <i className="far fa-play-circle" />
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Welcome;
