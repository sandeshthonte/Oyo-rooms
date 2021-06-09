import './User.css';
import Home from '../Home/Home.js';
import GetRooms from '../GetRooms/GetRooms.js'
import MyRooms from '../MyRooms/MyRooms.js';
import UserProfile from '../UserProfile/UserProfile.js'
import React from 'react';
import ContactUs from '../ContactUs/ContactUs.js';
import AboutUs from '../AboutUs/AboutUs.js';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function User(params) {
    const id = params.id;
    const privilege = params.privilege;
    console.log(id);
    return (
        <Router>
        <div className="App">
          <Switch>
              <div>
                <Route exact path="/user/home">
                  <Home id={id} privilege = {privilege} />
                </Route>
                <Route exact path="/user/bookRooms">
                  <GetRooms id={id} privilege = {privilege} />
                </Route>
                <Route exact path="/user/myRooms">
                  myRooms
                  <MyRooms id={id} privilege = {privilege}/>
                </Route>
                <Route exact path="/user/userProfile">
                  userProfile
                  <UserProfile id={id} privilege = {privilege}/>
                </Route>
                <Route exact path="/user/contactUs">
                  <ContactUs id={id}  privilege = {privilege} />
                </Route>
                <Route exact path="/user/aboutUs">
                  <AboutUs id={id}  privilege = {privilege} />
                </Route>
              </div>
          </Switch>
        </div>
        </Router>
    )
}

export default User;
