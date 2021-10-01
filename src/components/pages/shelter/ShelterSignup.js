// Imports
import React, { useState } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
const { REACT_APP_SERVER_URL } = process.env;

const ShelterSignup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [city, setCity] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleCity = (e) => {
    setCity(e.target.value);
  };

  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // at the beginning of a submit function
    // make sure password and confirm password are equal
    // password length >= 8 characters
    if (password === confirmPassword && password.length >= 8) {
      const newUser = { name, email, password };
      axios
        .post(`${REACT_APP_SERVER_URL}/shelters/signup`, newUser)
        .then((response) => {
          console.log("===> Yay, new Shelter");
          console.log(response);
          setRedirect(true);
        })
        .catch((error) => console.log("===> Error in Signup", error));
    } else {
      if (password !== confirmPassword) return alert("Passwords don't match");
      alert("Password needs to be at least 8 characters. Please try again.");
    }
  };

  if (redirect) return <Redirect to="/ShelterProfile" />; // You can have them redirected to profile (your choice)

  return (
    <form className="signup-form-shelter">
      <div className="row mt-4">
        <div className="col-md-7 offset-md-3">
          <div className="card card-body">
            <h2 className="py-2">Signup</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Company Name</label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={handleName}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleEmail}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label htmlFor="city">City</label>
                <input
                  type="text"
                  name="city"
                  value={city}
                  onChange={handleCity}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={handlePassword}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={handleConfirmPassword}
                  className="form-control"
                />
              </div>
              <button type="submit" className="submit-button">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ShelterSignup;
