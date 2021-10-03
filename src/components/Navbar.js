import React, { useState, useEffect } from 'react'
import { Button } from './Button'
import { Link } from 'react-router-dom'
import './Navbar.css'
import smallLogo from './photos/small-logo.png'

const Navbar = (props) => {
	console.info(props)
	const { isAuth, currentUser, handleLogout, closeMobileMenu } = props
	if (isAuth && currentUser.volunteer) {
		return (
			<>
				<ul className='navbar-nav ml-auto'>
					<li className='nav-item'>
						<Link className='nav-links' to='/WalkerProfile'>
							Profile
						</Link>
					</li>
					<li className='nav-item'>
						<span onClick={handleLogout} className='nav-link logout-links'>
							Logout
						</span>
					</li>
				</ul>
			</>
		)
	} else if (!currentUser.volunteer && isAuth) {
		return (
			<>
				<ul className='navbar-nav ml-auto'>
					<li className='nav-item'>
						<Link className='nav-links' to='/ShelterProfile'>
							Profile
						</Link>
					</li>
					<li className='nav-item'>
						<span onClick={handleLogout} className='nav-link logout-links'>
							Logout
						</span>
					</li>
				</ul>
			</>
		)
	} else {
		return (
			<>
				<ul>
					<li className='nav-item'>
						<Link to='/WalkerHub' className='nav-links' onClick={closeMobileMenu}>
							Volunteer's Hub
						</Link>
					</li>
					<li className='nav-item'>
						<Link to='/ShelterHub' className='nav-links' onClick={closeMobileMenu}>
							Shelter's Hub
						</Link>
					</li>
					<li>
						<Link to='/login' className='nav-links-mobile' onClick={closeMobileMenu}>
							Sign-in
						</Link>
					</li>
				</ul>
			</>
		)
	}
}

const NavbarContainer = (props) => {
	console.log('NavbarContainer: ', props)
	const [click, setClick] = useState(false)
	const [button, setButton] = useState(true)

	const handleClick = () => setClick(!click)
	const closeMobileMenu = () => setClick(false)

	const showButton = () => {
		if (window.innerWidth <= 960) {
			setButton(false)
		} else {
			setButton(true)
		}
	}

	useEffect(() => {
		showButton()
	}, [])

	window.addEventListener('resize', showButton)

	return (
		<>
			<nav className='navbar'>
				<div className='navbar-container'>
					<Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
						<img src={smallLogo} alt='' className='navbar-logo' />
						<i className='fab fa-typo3' />
					</Link>
					<div className='menu-icon' onClick={handleClick}>
						<i className={click ? 'fas fa-times' : 'fas fa-bars'} />
					</div>
					<ul className={click ? 'nav-menu active' : 'nav-menu'}>
						<li className='nav-item'>
							<Link to='/about' className='nav-links' onClick={closeMobileMenu}>
								About Us
							</Link>
						</li>
						<li className='nav-item'>
							<Link to='/Dogs' className='nav-links' onClick={closeMobileMenu}>
								Dogs
							</Link>
						</li>
					</ul>
					<Navbar
						isAuth={props.isAuth}
						currentUser={props.currentUser}
						handleLogout={props.handleLogout}
						//closeMobileMenu={props.closeMobileMenu}
					/>
					<Link to='/login'>{button && <Button buttonStyle='btn--outline'>SIGN-IN</Button>}</Link>
				</div>
			</nav>
		</>
	)
}

export default NavbarContainer
