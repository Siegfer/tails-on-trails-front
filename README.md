# Tails on Trails Frontend

This is the frontend repository for the Tails on Trails app. It contains the code necessary for the client to view the app. It was designed to work with the app's [backend repository](https://github.com/Siegfer/tails-on-trails-backend). To use the entire app, visit the [Tails on Trails](https://tails-on-trails-front.herokuapp.com/) site.

## About

Tails on Trails is an app for shelters to help them keep track of all their current dogs & volunteers. It was made through the collaborative efforts of Robert Estrella and Nicholas Tran.

## Installation

### Create Local Repo

1. Fork and clone this repository and the corresponding [backend repository](https://github.com/Siegfer/tails-on-trails-backend) to your local computer.
2. Run `npm i` to install all necessary dependencies
3. Set up a `.env` file to hold the `REACT_APP_SERVER_URL` variable (set to `http://localhost:8000`).

### Set Up Local Database

1. Ensure you have MongoDB installed on your local computer by typing `mongosh` into your terminal to launch the Mongo shell (install MongoDB if necessary)
2. Upon running the backend repo (see next step), a new database named `tailsontrails` should automatically appear in your local MongoDB (confirm by typing `show dbs` while in the Mongo shell)

### Run Locally

1. Run `npm start` from within both the backend directory and the frontend directory
2. View the live version of the site at `http://localhost:3000` in the browser of your choosing

Alternatively, you may use the live version of the [Tails on Trails](https://tails-on-trails-front.herokuapp.com/) app.

## Explanation

What is Tails on Trails?
Here at Tails on Trails we offer the very best in help Shelters keep track of all their dogs and allow volunteers to sign up to walk them We started Tails on Trails with a single purpose, to provide the finest website for Shelters keep track of all their dogs and for potential volunteers If you are like us then you love animals and want all Shelters to be empty! If this is the case, we’ve got you covered! We want to help shelters increase adoption rate by having volunteers helps giving dogs in shelters some attention
Thats Where You Come In!
Your roll as a Volunteer is important to both dogs and shelters. Shelters don't have enough people to volunteer, which means more dogs aren't getting their daily needs fullfilled. You're here to fix that problem! Yay for doggies!

## User Stories

- As a potential Shelter, I want to sign up for Tails on Trails, so I can use the service.
- As a potential Volunteer, I want to sign up for Tails on Trails, so I can use the service.
- As a user, I want the ability to log in, so I can securely access my data.
- As a user, I want to log out of the application, so I can keep my information secure.
- As a shelter, I want to see all dogs.
- As a volunteer, I want to see see all dogs currently in the shelter I volunteer for.
- As a shelter, I want to add more dogs.
- As a volunteer, I want to see all dogs currently in the shelter I volunteer for.
## Features

- Forms for signing up and logging two different type of users
- Forms for creating and adding dogs to shelters
- Views for a homepage and about page
- Views for all dogs currently in all shelters
- Views for all volunteers 

## Dependencies

- @testing-library/jest-dom
- @testing-library/react
- @testing-library/user-event
- axios
- dotenv
- jwt-decode
- bootstrap
- framer-motion
- react
- react-switch
- semantic-ui-react
- react-bootstrap
- react-dom
- react-router-dom
- react-scripts
- react-transition-group
- recharts
- web-vitals
  

## Designs

**Main Page**
![Main Page](/public/img/Page1.png)

**Shelter Sign Up**
![Shelter Sign Up](/public/img/ShelterSignup.png)

**Volunteer Sign Up**
![Volunteer Sign Up](/public/img/VolunteerSignup.png)

**Log In**
![Log In](/public/img/Login.png)

**Profile**
![Profile]()

**All Dogs**
![All Dogs](/public/img/AllDogs.png)


## Code Snippet

**Determine if what type of user is logging in**
```javascript
const handleSubmit = (e) => {
    e.preventDefault();
    const userData = { email, password, checked };
    const role = checked ? "shelters" : "walkers";
    const loginEndpoint = `${REACT_APP_SERVER_URL}/${role}/login`;
    axios
      .post(loginEndpoint, userData)
      .then((response) => {
        const { token } = response.data;
        localStorage.setItem("jwtToken", token);
        setAuthToken(token);
        const decoded = jwt_decode(token);
        props.nowCurrentUser(decoded);
      })
      .catch((error) => {
        console.log("===> Error on login", error);
        alert("Either email or password is incorrect. Please try again");
      });
  };
}
```


## Stretch Goals

- Add more type of volunteers
- Add ability to set allow volunteers to set when they are available
- Further customize the shelter & volunteers profile to display more relevant information
- Add additional features like ability to show all a chart of all dogs that have been adopted.
- While our app is designed for desktop use and not mobile use, we could make its design more responsive (it already is responsive, but it is not as mobile friendly as the user might want); alternatively, we could create a separate mobile version of the app
