// // Imports
// import React, { useEffect, useState } from "react";
// import { Route, Switch, Redirect } from "react-router-dom";
// import jwt_decode from "jwt-decode";
// import setAuthToken from "./utils/setAuthToken";

// // CSS
// import "./App.css";

// // Components
// import WalkerSignup from "./components/WalkerSignup";
// import WalkerLogin from "./components/WalkerLogin";
// import WalkerProfile from "./components/WalkerProfile";
// import About from "./components/About";
// import Footer from "./components/Footer";
// import Login from "./components/Login";
// import Navbar from "./components/Navbar";
// import Profile from "./components/Profile";
// import Welcome from "./components/Welcome";

// const PrivateRoute = ({ component: Component, ...rest }) => {
//   let token = localStorage.getItem("jwtToken");
//   console.log("===> Hitting a Private Route");
//   return (
//     <Route
//       {...rest}
//       render={(props) => {
//         return token ? (
//           <Component {...rest} {...props} />
//         ) : (
//           <Redirect to="/login" />
//         );
//       }}
//     />
//   );
// };

// function App() {
// Set state values
// const [currentUser, setCurrentUser] = useState("");
// const [isAuthenticated, setIsAuthenticated] = useState(true);

// useEffect(() => {
//   let token;

//   if (!localStorage.getItem("jwtToken")) {
//     setIsAuthenticated(false);
//     console.log("====> Authenticated is now FALSE");
//   } else {
//     token = jwt_decode(localStorage.getItem("jwtToken"));
//     setAuthToken(localStorage.getItem("jwtToken"));
//     setCurrentUser(token);
//   }
// }, []);

// const nowCurrentUser = (userData) => {
//   console.log("===> nowCurrent is here.");
//   setCurrentUser(userData);
//   setIsAuthenticated(true);
// };

// const handleLogout = () => {
//   if (localStorage.getItem("jwtToken")) {
//     // remove token for localStorage
//     localStorage.removeItem("jwtToken");
//     setCurrentUser(null);
//     setIsAuthenticated(false);
//   }
// };

//   return (
// <div className="app">
//   <div className="navbar">
//     <Navbar handleLogout={handleLogout} isAuth={isAuthenticated} />
//     <div className="container mt-5 ">
//       <Switch>
//         <Route path="/Walkersignup" component={WalkerSignup} />
//         <Route
//           path="/login"
//           render={(props) => (
//             <Login
//               {...props}
//               nowCurrentUser={nowCurrentUser}
//               setIsAuthenticated={setIsAuthenticated}
//               user={currentUser}
//             />
//           )}
//         />
//         <PrivateRoute
//           path="/profile"
//           component={Profile}
//           user={currentUser}
//           handleLogout={handleLogout}
//         />
//         <Route exact path="/" component={Welcome} />
//         <Route path="/about" component={About} />
//       </Switch>
//     </div>
//   </div>
// </div>;
//   );
// }

// export default App;

// import React from "react";
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
import WalkerLogin from "./components/pages/walker/WalkerLogin";
import Shelter from "./components/pages/shelter/ShelterHub";
import ShelterLogin from "./components/pages/shelter/ShelterLogin";
import Footer from "./components/Footer";
import Login from "./components/pages/neutral/Login";
import Dog from "./components/pages/dogs/Dog"; // import Login from "./components/Login";
import Profile from "./components/Profile";

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
      <Router>
        <Navbar handleLogout={handleLogout} isAuth={isAuthenticated} />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/Login" component={Login} />
          <Route path="/WalkerHub" component={Walker} />
          <Route path="/ShelterHub" component={Shelter} />
          <Route path="/Dog" exact component={Dog} />
          <Route
            path="/WalkerLogin"
            render={(props) => (
              <WalkerLogin
                {...props}
                nowCurrentUser={nowCurrentUser}
                setIsAuthenticated={setIsAuthenticated}
                user={currentUser}
              />
            )}
          />
          <Route
            path="/ShelterLogin"
            render={(props) => (
              <ShelterLogin
                {...props}
                nowCurrentUser={nowCurrentUser}
                setIsAuthenticated={setIsAuthenticated}
                user={currentUser}
              />
            )}
          />
          <PrivateRoute
            path="/Profile"
            component={Profile}
            user={currentUser}
            handleLogout={handleLogout}
          />
        </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default App;
