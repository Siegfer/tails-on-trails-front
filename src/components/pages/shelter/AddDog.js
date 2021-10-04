// // Imports
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Redirect } from "react-router-dom";

// const { REACT_APP_SERVER_URL } = process.env;

// const DogForm = () => {
//   const [name, setName] = useState("");
//   const [img, setImg] = useState("");
//   const [breed, setBreed] = useState("");
//   const [gender, setGender] = useState("");
//   const [size, setSize] = useState("");
//   const [characteristic, setCharacteristic] = useState('');
//   const [age, setAge] = useState('');
//   const [description, setDescription] = useState('');

//   useEffect(() => {

//   const handleName = (e) => {
//     setName(e.target.value);
//   };

//   const handleImg = (e) => {
//     setImg(e.target.value);
//   };

//   const handleBreed = (e) => {
//     setBreed(e.target.value);
//   };

//   const handleGender = (e) => {
//     setGender(e.target.value);
//   };

//   const handleSize = (e) => {
//     setSize(e.target.value);
//   };

//   const handleCharacteristic = (e) => {
//     setCharacteristic(e.target.value);
//   };

//   const handleAge = (e) => {
//     setAge(e.target.value);
//   };

//   const handleDescription = (e) => {
//     setDescription(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//       const newDog = { name, img , breed , gender , size, characteristic, age, description };
//       axios
//         .post(`${REACT_APP_SERVER_URL}/shelters/add`, newDog)
//         .then((res) => {
//           console.log("===> New dog added");
//           console.log('DOG RESPONSE', res);
//           setRedirect(true);
//         })
//         .catch((error) => console.log("===> Error in Adding Dog", error));

//   };

// if (redirect) return <Redirect to="/Profile" />;

// return (
//     <div>

//     </div>
// )

//   return (
//     <div className="row mt-4">
//       <div className="col-md-7 offset-md-3">
//         <div className="card card-body">
//           <h2 className="py-2">Add your exercise:</h2>
//           <form onSubmit={handleSubmit}>
//             <div className="form-group">
//               <label htmlFor="type">Exercise type: </label>
//               <br/>
//               <select name="type" id="types" onChange={handleType}>
//                 <option value="Resistance">Resistance</option>
//                 <option value="Cardio">Cardio</option>
//               </select>
//               <br/>
//               <label htmlFor="muscleGroup">Target Muscle Group: </label>
//               <br/>
//               <select name="muscleGroup" id="muscleGroup" onChange={handleMuscleGroup} value={muscleGroup}>
//                 <option value="Chest">Chest</option>
//                 <option value="Back">Back</option>
//                 <option value="Arms">Arms</option>
//                 <option value="Shoulders">Shoulders</option>
//                 <option value="Legs">Legs</option>
//                 <option value="Calves">Calves</option>
//                 <option value="Core">Core</option>
//                 <option value="Heart/Respiratory">Heart/Respiratory</option>
//               </select>
//               <br/>
//               <label htmlFor="name">Name</label>
//               <input
//                 type="text"
//                 name="name"
//                 value={name}
//                 onChange={handleName}
//                 className="form-control"
//                 id="name"
//               />
//               <label htmlFor="img_url">Image URL</label>
//               <input
//                 type="text"
//                 name="img_url"
//                 value={img_url}
//                 onChange={handleImage}
//                 className="form-control"
//                 id="img_url"
//               />
//               <label htmlFor="equipment">Equipment Needed</label>
//               <input
//                 type="text"
//                 name="equipment"
//                 value={equipment}
//                 onChange={handleEquipment}
//                 className="form-control"
//                 id="equipment"
//               />
//               <label htmlFor="steps">Steps</label>
//               <input
//                 type="text"
//                 name="steps"
//                 value={steps}
//                 onChange={handleSteps}
//                 className="form-control"
//                 id="steps"
//               />
//             </div>
//             {
//               type === 'Resistance' ?
//               <>
//               <div className="form-group">
//               <label htmlFor="weightGoal">Weight Goal</label>
//               <input
//                 type="text"
//                 name="weightGoal"
//                 value={weightGoal}
//                 onChange={handleWeightGoal}
//                 className="form-control"
//                 id="weightGoal"
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="repsGoal">Reps Goal</label>
//               <input
//                 type="text"
//                 name="repsGoal"
//                 value={repsGoal}
//                 onChange={handleRepsGoal}
//                 className="form-control"
//                 id='repsGoal'
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="setsGoal">Sets Goal</label>
//               <input
//                 type="text"
//                 name="setsGoal"
//                 value={setsGoal}
//                 onChange={handleSetsGoal}
//                 className="form-control"
//                 id='setsGoal'
//               />
//             </div>
//               </>
//               :
//               <>
//                <div className="form-group">
//               <label htmlFor="durationGoal">Duration Goal</label>
//               <input
//                 type="text"
//                 name="durationGoal"
//                 value={durationGoal}
//                 onChange={handleDurationGoal}
//                 className="form-control"
//                 id="durationGoal"
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="distanceGoal">Distance Goal</label>
//               <input
//                 type="text"
//                 name="distanceGoal"
//                 value={distanceGoal}
//                 onChange={handleDistanceGoal}
//                 className="form-control"
//                 id='distanceGoal'
//               />
//             </div>
//               </>
//             }
//             <button type="submit" className="btn btn-primary float-right">
//               Submit
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default DogForm
