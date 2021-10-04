// Imports
import React, { useState } from 'react'
import Switch from 'react-switch'
import axios from 'axios'
import jwt_decode from 'jwt-decode'
import { Redirect } from 'react-router-dom'
import setAuthToken from '../../../utils/setAuthToken'
const { REACT_APP_SERVER_URL } = process.env

const OneLogin = (props) => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [checked, setChecked] = useState(false)

	const handleEmail = (e) => {
		setEmail(e.target.value)
	}

	const handlePassword = (e) => {
		setPassword(e.target.value)
	}

	const handleChange = (e) => {
		setChecked(e)
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		const userData = { email, password, checked }
		const role = checked ? 'shelters' : 'walkers'
		const loginEndpoint = `${REACT_APP_SERVER_URL}/${role}/login`
		axios
			.post(loginEndpoint, userData)
			.then((response) => {
				const { token } = response.data
				localStorage.setItem('jwtToken', token)
				setAuthToken(token)
				const decoded = jwt_decode(token)
				props.nowCurrentUser(decoded)
			})
			.catch((error) => {
				console.log('===> Error on login', error)
				alert('Either email or password is incorrect. Please try again')
			})
	}

	if (props.user) return <Redirect to='/profile' />

	return (
		<div className='login-form-shelter'>
			<div className='row mt-4'>
				<div className='col-md-7 offset-md-3'>
					<div className='card card-body'>
						<h2 className='py-2'>Login</h2>
						<form onSubmit={handleSubmit}>
							<div className='form-group'>
								<label htmlFor='email'>Email</label>
								<input type='email' name='email' value={email} onChange={handleEmail} className='form-control' />
							</div>
							<div className='form-group'>
								<label htmlFor='password'>Password</label>
								<input
									type='password'
									name='password'
									value={password}
									onChange={handlePassword}
									className='form-control'
								/>
							</div>
							<div className='form-group'>
								<label htmlFor='role'>I am a ...</label>
								<span>
									<span htmlFor='walker'>Volunteer</span>
									<Switch
										onChange={handleChange}
										checked={checked}
										className='react-switch'
										checkedHandleIcon={<div>🏥</div>}
										uncheckedHandleIcon={<div>🦮</div>}
										checkedIcon={false}
										uncheckedIcon={false}
										onColor={'#eb9834'}
										offColor={'#34ebe8'}
									/>
									<span htmlFor='shelter'>Shelter worker</span>
								</span>
							</div>
							<button type='submit' className='submit-button'>
								Submit
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}

export default OneLogin
