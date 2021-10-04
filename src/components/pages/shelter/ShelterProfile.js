import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'
import Dog from '../dogs/Dog'
const { REACT_APP_SERVER_URL } = process.env

const ShelterProfile = (props) => {
	const { handleLogout, user } = props
	const { id, name, email, exp } = user

	const expirationTime = new Date(exp * 1000)
	let currentTime = Date.now()

	// make a condition that compares exp and current time
	if (currentTime >= expirationTime) {
		handleLogout()
		alert('Session has ended. Please login to continue.')
	}

	const userData = user ? (
		<div>
			<h1>Profile</h1>
			<p>Name: {name}</p>
			<p>Email: {email}</p>
			<p>ID: {id}</p>
		</div>
	) : (
		<h2>Loading...</h2>
	)

	const [Dog, setDog] = useState([])

	useEffect(() => {
		const dogsData = async () => {
			const res = await Axios.get(`${REACT_APP_SERVER_URL}/dogs`)
			console.log('ALL DOGS DATA', res.data.dogs)
			setDog(res.data.dogs)
		}
		dogsData()
	}, [])

	const allDogs = () => {
		return dogs.map((e, i) => {
			return (
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
			)
		})
	}

	let displayDogsList = dogs ? allDogs() : <h2> Loading NUGGIES.... </h2>

	const errorDiv = () => {
		return (
			<div className='text-center pt-4'>
				<h3>
					Please <Link to='./neutral/OneLogin'>login</Link> to view this page
				</h3>
			</div>
		)
	}

	return (
		<div className='text-center pt-4'>
			{user ? userData : errorDiv()}
			{displayDogsList}
		</div>
	)
}

export default ShelterProfile

// import React from 'react'
// import Dog from './pages/dogs/Dog'
// import { Link } from 'react-router-dom'

// const Profile = (props) => {
// 	const { handleLogout, user, dog } = props
// 	console.log(`🧚🏽‍♂️ ~ Profile ~ props`, props)
// 	const { name, email, volunteer, exp } = user
// 	const { breed, gender, size, characteristic, age, description } = Dog
// 	const expirationTime = new Date(exp * 1000)
// 	let currentTime = Date.now()

// 	// make a condition that compares exp and current time
// 	if (currentTime >= expirationTime) {
// 		handleLogout()
// 		alert('Session has ended. Please login to continue.')
// 	}

// 	const userData = user ? (
// 		<div>
// 			<h1>Profile</h1>
// 			<p>Name: {name}</p>
// 			<p>Email: {email}</p>
// 		</div>
// 	) : (
// 		<h2>Loading...</h2>
// 	)

// 	const allDogs = Dog ? (
// 		<div>
// 			<h1>All Dogs</h1>
// 			<h1>{props.name}</h1>
// 			<p>Breed: {breed}</p>
// 			<p>Gender: {gender}</p>
// 			<p>Size: {size}</p>
// 			<p>Characteristic: {characteristic}</p>
// 			<p>Age: {age}</p>
// 			<p>Description: {description}</p>
// 		</div>
// 	) : (
// 		<h2>Loading...</h2>
// 	)

// 	const errorDiv = () => {
// 		return (
// 			<div className='text-center pt-4'>
// 				<h3>
// 					Please <Link to='/login'>login</Link> to view this page
// 				</h3>
// 			</div>
// 		)
// 	}

// 	return (
// 		<div className='text-center pt-4'>
// 			{user ? userData : errorDiv()}
// 			{Dog ? allDogs : errorDiv()}
// 		</div>
// 	)
// }

// export default Profile
