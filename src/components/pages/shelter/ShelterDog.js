import React, { useState, useEffect } from "react";
import Axios from "axios";
import DogsContainer from "../dogs/DogsContainer";
const { REACT_APP_SERVER_URL } = process.env;

const Dogs = () => {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    const dogsData = async () => {
      const res = await Axios.get(`${REACT_APP_SERVER_URL}/shelters/dogs`);
      setDogs(res.data.update.dog);
    };
    dogsData();
  }, []);

  const allDogs = () => {
    return dogs.map((e, i) => {
      return (
        <div id="your-dogs">
          <DogsContainer
            key={i}
            _id={e._id}
            name={e.name}
            breed={e.breed}
            gender={e.gender}
            size={e.size}
            characteristic={e.characteristic}
            age={e.age}
            description={e.description}
          />
        </div>
      );
    });
  };

  let displayDogsList = dogs ? (
    allDogs()
  ) : (
    <h2> DOOGGGGIIIEEEE NUGGIES.... </h2>
  );

  return (
    <div>
      <div id="profile-dog-title">
        <h2>All of your Dogs!</h2>
      </div>
      <div id="doggy-data">{displayDogsList}</div>
    </div>
  );
};

export default Dogs;
