import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Navbar.css";
import smallLogo from "./photos/small-logo.png";

function Navbar(props) {
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
            <img src={smallLogo} alt="" className="navbar-logo" />
            <i class="fab fa-typo3" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Dog" className="nav-links" onClick={closeMobileMenu}>
                Dogs
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
                to="/login"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Sign-in
              </Link>
            </li>
          </ul>
          <Link to="/login">
            {button && <Button buttonStyle="btn--outline">SIGN-IN</Button>}
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
