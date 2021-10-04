import React from 'react'
import { Link } from 'react-router-dom'
import Dogs from '../dogs/Dog'
import Walker from '../walker/Walker'
import InputADog from './InputADog'

const ShelterProfile = (props) => {
	const { handleLogout, user } = props
	const { id, name, email, exp } = user

	const expirationTime = new Date(exp * 1000)
	let currentTime = Date.now()

	if (currentTime >= expirationTime) {
		handleLogout()
		alert('Session has ended. Please login to continue.')
	}

	const userData = user ? (
		<div className='shelter-container'>
			<div className='shelter-profile-data'>
				<h1>Profile</h1>
				<p>Name: {name}</p>
				<p>Email: {email}</p>
				<p>ID: {id}</p>
			</div>
			<div className='shelter-dogs-form'>
				<InputADog />
			</div>
		</div>
	) : (
		<h2>Loading...</h2>
	)

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
			<Dogs />
			<Walker />
		</div>
	)
}

export default ShelterProfile
