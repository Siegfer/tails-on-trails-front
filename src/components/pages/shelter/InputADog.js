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
                <label htmlFor="name">Dog Name</label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={handleName}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label htmlFor="breed">Breed</label>
                <input
                  type="text"
                  name="breed"
                  value={breed}
                  onChange={handleBreed}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label htmlFor="gender">Gender</label>
                <input
                  type="text"
                  name="gender"
                  value={gender}
                  onChange={handleGender}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label htmlFor="size">Size</label>
                <input
                  type="text"
                  name="size"
                  value={size}
                  onChange={handleSize}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label htmlFor="characteristic">Characteristic</label>
                <input
                  type="text"
                  name="characteristic"
                  value={characteristic}
                  onChange={handleCharicteristic}
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
    </div>
  );
};

export default InputADog;
