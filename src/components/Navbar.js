// import React from "react";
// // import { Container } from "react-bootstrap";
// import { NavLink, Link } from "react-router-dom";
import smallLogo from "./photos/small-logo.png";
// import "./Navbar.css";

// const Navbar = (props) => {
//   return (
//     <Container className="nav-items">
//       <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//         <div className="container">
//           <Link className="navbar-brand" to="/">
//             MERN Auth
//           </Link>
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-toggle="collapse"
//             data-target="#navbarsExample07"
//             aria-controls="#navbarsExample07"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarsExample07">
//             <ul className="navbar-nav mr-auto">
//               <li className="nav-item">
//                 <NavLink className="nav-link" exact to="/">
//                   Home
//                 </NavLink>
//               </li>
//               <li className="nav-item">
//                 <NavLink className="nav-link" to="/about">
//                   About
//                 </NavLink>
//               </li>
//             </ul>
//             {props.isAuth ? (
//               <ul className="navbar-nav ml-auto">
//                 <li className="nav-item">
//                   <NavLink className="nav-link" to="/profile">
//                     Profile
//                   </NavLink>
//                 </li>
//                 <li className="nav-item">
//                   <span
//                     onClick={props.handleLogout}
//                     className="nav-link logout-link"
//                   >
//                     Logout
//                   </span>
//                 </li>
//               </ul>
//             ) : (
//               <ul className="navbar-nav ml-auto">
//                 <li className="nav-item">
//                   <NavLink className="nav-link" to="/Walkersignup">
//                     Create Account
//                   </NavLink>
//                 </li>
//                 <li className="nav-item">
//                   <NavLink className="nav-link" to="/login">
//                     Login
//                   </NavLink>
//                 </li>
//               </ul>
//             )}
//           </div>
//         </div>
//       </nav>
//     </Container>
//   );
// };

// export default Navbar;

// const Navbar = (props) => {
//   return (
//     <div id="nav-link">
//       <Link to="/">
//         <img src={smallLogo} alt="" className="small-logo" />
//       </Link>
//       <NavLink exact to="/">
//         Home
//       </NavLink>
//       <NavLink to="/about">About</NavLink>
//       {/* <NavLink className="nav-link" to="/profile">
//         Profile
//       </NavLink> */}
//       <NavLink to="/Walkersignup">Create Account</NavLink>
//       <NavLink to="/login">Login</NavLink>
//     </div>
//   );
// };
// export default Navbar;
import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <img src={smallLogo} alt="" className="fab fa-typo3" />
            <i class="fab fa-typo3" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/WalkerHub"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Volunteer's Hub
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/ShelterHub"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Shelter's Hub
              </Link>
            </li>

            <li>
              <Link
                to="/signup"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Sign-Up
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline">SIGN-UP</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
