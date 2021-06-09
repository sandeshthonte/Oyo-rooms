import "./Admin.css";
import AdminHome from "../AdminHome/AdminHome.js";
import GetRooms from "../GetRooms/GetRooms.js";
import GetUsers from "../GetUsers/GetUsers.js";
import AllBookings from "../AllBookings/AllBookings.js";
import AllRooms from "../AllRooms/AllRooms.js";
import GetRequests from "../GetRequests/GetRequests.js";
import MyRooms from "../MyRooms/MyRooms.js";
import UserProfile from "../UserProfile/UserProfile.js";
import React from "react";
import ContactUs from "../ContactUs/ContactUs.js";
import AboutUs from "../AboutUs/AboutUs.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddRooms from "../AddRooms/AddRooms.js";

function admin(params) {
  const id = params.id;
  const privilege = params.privilege;
  console.log(id);
  return (
    <Router>
      <div className="App">
        <Switch>
          <div>
            <Route exact path="/admin/home">
              <AdminHome id={id} privilege={privilege} />
            </Route>
            <Route exact path="/admin/showRequests">
              <GetRequests id={id} privilege={privilege} />
            </Route>
            <Route exact path="/admin/showAllRooms">
              {privilege === "SuperAdmin" ? (
                <div>
                  <AllRooms id={id} privilege={privilege} />
                </div>
              ) : (
                <div></div>
              )}
            </Route>
            <Route exact path="/admin/showAllBookings">
              {privilege === "SuperAdmin" ? (
                <div>
                  <AllBookings id={id} privilege={privilege} />
                </div>
              ) : (
                <div></div>
              )}
            </Route>
            <Route exact path="/admin/showUsers">
              {privilege === "SuperAdmin" ? (
                <div>
                  <GetUsers id={id} privilege={privilege} />
                </div>
              ) : (
                <div></div>
              )}
            </Route>
            <Route exact path="/admin/addRoom">
              <AddRooms id={id} privilege={privilege} />
            </Route>
            <Route exact path="/admin/bookRooms">
              <GetRooms id={id} privilege={privilege} />
            </Route>
            <Route exact path="/admin/myRooms">
              <MyRooms id={id} privilege={privilege} />
            </Route>
            <Route exact path="/admin/userProfile">
              <UserProfile id={id} privilege={privilege} />
            </Route>
            <Route exact path="/admin/contactUs">
              <ContactUs id={id} privilege={privilege} />
            </Route>
            <Route exact path="/admin/aboutUs">
              <AboutUs id={id} privilege={privilege} />
            </Route>
          </div>
        </Switch>
      </div>
    </Router>
  );
}

export default admin;
