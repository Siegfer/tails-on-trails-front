import React, { useState } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
const { REACT_APP_SERVER_URL } = process.env;

const WalkerSignup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleCity = (e) => {
    setCity(e.target.value);
  };
  const handleMobile = (e) => {
    setMobile(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword && password.length >= 8) {
      const newUser = { name, email, city, mobile, password };
      axios
        .post(`${REACT_APP_SERVER_URL}/walkers/signup`, newUser)
        .then((response) => {
          console.log("===> Yay, new user");
          console.log(response);
          setRedirect(true);
        })
        .catch((error) => console.log("===> Error in Signup", error));
    } else {
      if (password !== confirmPassword) return alert("Passwords don't match");
      alert("Password needs to be at least 8 characters. Please try again.");
    }
  };

  if (redirect) return <Redirect to="/login" />;
  return (
    <div className="volunteer-form-container">
      <div className="col-md-7 offset-md-3">
        <div className="card card-body">
          <h2 className="title-vol">Signup as a Dog Walker!</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group-volunteer">
              <label id="label-vol" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={name}
                onChange={handleName}
                className="form-control-volunteer"
              />
            </div>
            <div className="form-group-volunteer">
              <label id="label-vol" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={handleEmail}
                className="form-control-volunteer"
              />
            </div>
            <div className="form-group-volunteer">
              <label id="label-vol" htmlFor="name">
                City
              </label>
              <input
                type="text"
                name="name"
                value={city}
                onChange={handleCity}
                className="form-control-volunteer"
              />
            </div>
            <div className="form-group-volunteer">
              <label id="label-vol" htmlFor="name">
                Mobile
              </label>
              <input
                type="text"
                name="mobile"
                value={mobile}
                onChange={handleMobile}
                className="form-control-volunteer"
              />
            </div>
            <div className="form-group-volunteer">
              <label id="label-vol" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={handlePassword}
                className="form-control-volunteer"
              />
            </div>
            <div className="form-group-volunteer">
              <label id="label-vol" htmlFor="confirmPassword">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={confirmPassword}
                onChange={handleConfirmPassword}
                className="form-control-volunteer"
              />
            </div>
            <button
              id="vol-submit"
              type="submit"
              className="btn btn-primary float-right"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default WalkerSignup;
