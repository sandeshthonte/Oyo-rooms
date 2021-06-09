import AdminHome from "./AdminHome/AdminHome.js";
import Admin from "./Admin/Admin.js";
import User from "./User/User";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Auth/Login";
import Signup from "./Auth/Signup";
import "./App.css";
import React, { useState, useEffect } from "react";
function App() {
  const [user, setuser] = useState(null);

  return (
    <Router>
      <div className="App">
        <Switch>
          {!user ? (
            <div>
              <Route path="/">
                <Login setuser={setuser} />
              </Route>
              <Route path="/login">
                <Login setuser={setuser} />
              </Route>
              <Route path="/signup">
                <Signup />
              </Route>
            </div>
          ) : (
            <div>
              <Route path="/user">
                <User id={user.id} privilege={user.privilege} />
              </Route>
              <Route path="/admin">
                <Admin id={user.id} privilege={user.privilege} />
              </Route>
            </div>
          )}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
