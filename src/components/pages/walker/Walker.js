import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import WalkerContainer from './WalkerContainer'
const { REACT_APP_SERVER_URL } = process.env

const Walkers = () => {
	const [walkers, setWalkers] = useState([])

	useEffect(() => {
		const walkerData = async () => {
			const res = await Axios.get(`${REACT_APP_SERVER_URL}/shelters/volunteer`)
			console.log(`🧚🏽‍♂️ ~ walkerData ~ res`, res)
			console.log('ALL WALKERS DATA', res.data.walkers)
			setWalkers(res.data.walkers)
		}
		walkerData()
	}, [])

	const allWalkers = () => {
		return walkers.map((e, i) => {
			return (
				<WalkerContainer
					key={i}
					_id={e._id}
					name={e.name}
					email={e.email}
					city={e.city}
					mobile={e.mobile}
				/>
			)
		})
	}

	let displayWalkerList = walkers ? allWalkers() : <h2> Loading NUGGIES.... </h2>

	return (
		<div>
			<h2>All Volunteers</h2>
			{displayWalkerList}
		</div>
	)
}

export default Walkers
