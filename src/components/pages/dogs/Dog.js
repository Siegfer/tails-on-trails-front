import React, { useState, useEffect } from "react";
import Axios from "axios";
import DogsContainer from "./DogsContainer";
import "./Dog.css";
import video from "../../videos/dogpage.mp4";

const { REACT_APP_SERVER_URL } = process.env;

const Dogs = () => {
  const [dogs, setDogs] = useState([]);
  const [img, setImg] = useState("");

  useEffect(() => {
    const dogsData = async () => {
      const res = await Axios.get(`${REACT_APP_SERVER_URL}/dogs`);
      console.log("ALL DOGS DATA", res.data.dogs);
      setDogs(res.data.dogs);
    };
    dogsData();
  }, []);

  const handleImg = (e) => {
    setImg(e.target.value);
  };

  const allDogs = () => {
    return dogs.map((e, i) => {
      return (
        <div>
          <div className="each-doggy">
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
        </div>
      );
    });
  };
  let displayDogsList = dogs ? allDogs() : <h2> Loading NUGGIES.... </h2>;

  return (
    <div className="dogs-page">
      <div>
        <video src={video} className="dog-page-video" autoPlay loop muted />
      </div>
      <div className="dogs-page-header">
        <h2 id="dog-page-title">All Shelter Dogs Ready To Go!</h2>
      </div>
      <div className="dogs-div">{displayDogsList}</div>
    </div>
  );
};

export default Dogs;
