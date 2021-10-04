import React from "react";

const DogsContainer = (props) => {
  console.log("PROPS OF DOGS", props);
  return (
    <div>
      <h1>{props.name}</h1>
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
