import React from "react";

const DogsContainer = (props) => {
  return (
    <div className="dogs-container">
      <h2>{props.name}</h2>
      <p>Breed: {props.breed}</p>
      <p>Gender: {props.gender}</p>
      <p>Size: {props.size}</p>
      <p>Characteristic: {props.characteristic}</p>
      <p>Age: {props.age}</p>
      <p>Description: {props.description}</p>
    </div>
  );
};

export default DogsContainer;
