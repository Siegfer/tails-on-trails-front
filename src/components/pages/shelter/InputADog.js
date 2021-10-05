// Imports
import React, { useState } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
const { REACT_APP_SERVER_URL } = process.env;

const InputADog = () => {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [gender, setGender] = useState("");
  const [size, setSize] = useState("");
  const [characteristic, setCharicteristic] = useState("");
  const [age, setAge] = useState("");
  const [description, setDescription] = useState("");

  const [redirect, setRedirect] = useState(false);

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleBreed = (e) => {
    setBreed(e.target.value);
  };

  const handleGender = (e) => {
    setGender(e.target.value);
  };

  const handleSize = (e) => {
    setSize(e.target.value);
  };

  const handleCharicteristic = (e) => {
    setCharicteristic(e.target.value);
  };

  const handleAge = (e) => {
    setAge(e.target.value);
  };

  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newDog = { name, breed, gender, size, characteristic };
    axios
      .post(`${REACT_APP_SERVER_URL}/shelters/add`, newDog)
      .then((response) => {
        console.log("===> Yay, new Dog");
        console.log(response);
        setRedirect(true);
      })
      .catch((error) => console.log("===> Error Adding new Dog", error));
  };
  if (redirect) return <Redirect to="/Dogs" />; // You can have them redirected to profile (your choice)

  return (
    <div className="add-a-dog">
      <div className="row mt-4">
        <div className="col-md-7 offset-md-3">
          <div className="card card-body">
            <h2 className="py-2">Add a new dog to your doggy database</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="profile-form-label" htmlFor="name">
                  Dog Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={handleName}
                  className="profile-form-control"
                />
              </div>
              <div className="form-group">
                <label className="profile-form-label" htmlFor="breed">
                  Breed
                </label>
                <input
                  type="text"
                  name="breed"
                  value={breed}
                  onChange={handleBreed}
                  className="profile-form-control"
                />
              </div>
              <div className="form-group">
                <label className="profile-form-label" htmlFor="gender">
                  Gender
                </label>
                <input
                  type="text"
                  name="gender"
                  value={gender}
                  onChange={handleGender}
                  className="profile-form-control"
                />
              </div>
              <div className="form-group">
                <label className="profile-form-label" htmlFor="size">
                  Size
                </label>
                <input
                  type="text"
                  name="size"
                  value={size}
                  onChange={handleSize}
                  className="profile-form-control"
                />
              </div>
              <div className="form-group">
                <label className="profile-form-label" htmlFor="characteristic">
                  Characteristic
                </label>
                <input
                  type="text"
                  name="characteristic"
                  value={characteristic}
                  onChange={handleCharicteristic}
                  className="profile-form-control"
                />
              </div>
              <div className="form-group">
                <label className="profile-form-label" htmlFor="characteristic">
                  Age
                </label>
                <input
                  type="text"
                  name="characteristic"
                  value={age}
                  onChange={handleAge}
                  className="profile-form-control"
                />
              </div>
              <div className="form-group">
                <label className="profile-form-label" htmlFor="characteristic">
                  Description
                </label>
                <input
                  type="text"
                  name="characteristic"
                  value={description}
                  onChange={handleDescription}
                  className="profile-form-control"
                />
              </div>
              <button id="profile-form-button" type="submit" className="">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputADog;
