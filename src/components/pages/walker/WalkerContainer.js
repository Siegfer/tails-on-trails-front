import React from 'react'

const WalkerContainer = (props) => {
	console.log('PROPS OF WALKERS', props)
	return (
		<div>
			<h1>{props.name}</h1>
			<p>Email: {props.gender}</p>
			<p>City: {props.city}</p>
			<p>Mobile Number: {props.mobile}</p>
		</div>
	)
}

export default WalkerContainer
