import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";

import Navbar from "./components/Navbar";
import Home from "./components/Welcome";
import About from "./components/About";
import Walker from "./components/pages/walker/WalkerHub";
import Shelter from "./components/pages/shelter/ShelterHub";
import Footer from "./components/Footer";
import Dog from "./components/pages/dogs/Dog";
import Profile from "./components/Profile";
import OneLogin from "./components/pages/neutral/OneLogin";

import "./App.css";

const PrivateRoute = ({ component: Component, ...rest }) => {
  let token = localStorage.getItem("jwtToken");
  console.log("===> Hitting a Private Route");
  return (
    <Route
      {...rest}
      render={(props) => {
        return token ? (
          <Component {...rest} {...props} />
        ) : (
          <Redirect to="/Login" />
        );
      }}
    />
  );
};

function App() {
  const [currentUser, setCurrentUser] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  console.log(currentUser);
  useEffect(() => {
    let token;

    if (!localStorage.getItem("jwtToken")) {
      setIsAuthenticated(false);
      console.log("====> Authenticated is now FALSE");
    } else {
      token = jwt_decode(localStorage.getItem("jwtToken"));
      setAuthToken(localStorage.getItem("jwtToken"));
      setCurrentUser(token);
    }
  }, []);

  const nowCurrentUser = (userData) => {
    console.log("===> nowCurrent is here.");
    setCurrentUser(userData);
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    if (localStorage.getItem("jwtToken")) {
      // remove token for localStorage
      localStorage.removeItem("jwtToken");
      setCurrentUser(null);
      setIsAuthenticated(false);
    }
  };

  return (
    <>
      <Navbar
        currentUser={currentUser}
        handleLogout={handleLogout}
        isAuth={isAuthenticated}
      />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route
          path="/Login"
          render={(props) => (
            <OneLogin
              {...props}
              nowCurrentUser={nowCurrentUser}
              setIsAuthenticated={setIsAuthenticated}
              user={currentUser}
            />
          )}
        />
        <Route path="/WalkerHub" component={Walker} />
        <Route path="/ShelterHub" component={Shelter} />
        <Route path="/Dog" exact component={Dog} />
        <PrivateRoute
          path="/Profile"
          component={Profile}
          user={currentUser}
          handleLogout={handleLogout}
        />
      </Switch>
      <Footer />
    </>
  );


}

export default App;
