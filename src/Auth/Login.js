import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import GETFetch from "../APIs/GETFetch.js";
import Loaders from "../Loaders/Loaders.js";
import "./Login.css";

function Login(props) {
  const setuser = props.setuser;

  const [email, setemail] = useState(null);
  const [password, setpassword] = useState(null);
  const [isPending, setisPending] = useState(false);
  const [error, setError] = useState(null);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("clicked");
    fetch(`/api/privilege/getUser/${email}/${password}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        setuser(data);
        console.log(data);
        setisPending(false);
        setError(null);
        if (data.privilege === "User") {
          history.push("/user/home");
        } else if (
          data.privilege === "Admin" ||
          data.privilege === "SuperAdmin"
        ) {
          history.push("/admin/home");
        }
        // else if (data.privilege === "Super Admin") {
        //   history.push("/admin/home");
        // }
      })
      .catch((error) => {
        setisPending(false);
        setError(error.message);
      });
  };

  return (
    <div className="login">
      <div className="login-header">
        <div className="login-box">
          Login
          <div className="login-form">
            <form action="#" className="login">
              <div className="fields">
                <div className="login-form-text">Email</div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setemail(e.target.value);
                  }}
                  className="login-form-input"
                  required
                />
                <br />
                <div className="login-form-text">Password</div>
                <input
                  type="password"
                  className="login-form-input"
                  value={password}
                  onChange={(e) => {
                    setpassword(e.target.value);
                  }}
                  required
                />
                <br />
              </div>

              <button
                type="submit"
                className="login-form-button"
                onClick={handleSubmit}
              >
                Get me in
              </button>
              <button type="button" className="login-form-button">
                <Link to="/signup">Sign Up</Link>
              </button>
              <br />
              <br />
              {error && <div>{error}</div>}
              {isPending && <Loaders />}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
