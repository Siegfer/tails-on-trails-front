import React from "react";
import { Link } from "react-router-dom";
import Dogs from "../dogs/Dog";
// import Walker from "../walker/Walker";
import InputADog from "./InputADog";
import "./ShelterProfile.css";
import video2 from "../../videos/video2.mp4";

const ShelterProfile = (props) => {
  const { handleLogout, user } = props;
  const { id, name, email, exp } = user;

  const expirationTime = new Date(exp * 1000);
  let currentTime = Date.now();

  if (currentTime >= expirationTime) {
    handleLogout();
    alert("Session has ended. Please login to continue.");
  }

  const userData = user ? (
    <div className="shelter-container">
      <h2 className="username"> Welcome {name} !</h2>
      <video src={video2} className="profile-video" autoPlay loop muted />
      <div className="shelter-dogs-form">
        <InputADog />
      </div>
      <div className="shelter-profile-data">
        <h1>Profile</h1>
        <p>Name: {name}</p>
        <p>Email: {email}</p>
        <p>ID: {id}</p>
        <button id="edit-user-data">edit</button>
      </div>

      <div className="doggy-data">
        <Dogs />
      </div>
      {/* <div className="walker-data"><Walker /></div> */}
    </div>
  ) : (
    <h2>Loading...</h2>
  );

  const errorDiv = () => {
    return (
      <div className="text-center pt-4">
        <h3>
          Please <Link to="./neutral/OneLogin">login</Link> to view this page
        </h3>
      </div>
    );
  };

  return (
    <div className="text-center pt-4">
      {user ? userData : errorDiv()}
      {/* <Dogs />
      <Walker /> */}
    </div>
  );
};

export default ShelterProfile;

