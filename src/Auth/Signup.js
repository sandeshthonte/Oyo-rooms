import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import POSTFetch from'../APIs/POSTFetch';

import "./Signup.css"

function Signup() {

    const [name, setname] = useState(null);
    const [email, setemail] = useState(null);
    const [privilege, setprivilege] = useState(null);
    const [password, setpassword] = useState(null);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const id = Math.floor(Math.random()*10000 + 1);
        const user = { id, email, name, password, privilege };
        const redirect = '/login';
        
        //const { result } = POSTFetch("/api/privilege/addUser", user, redirect);

        
        const result = fetch("/api/privilege/addUser",{
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(user)
        })
        .then((response) => {
            console.log("Added");
            return response.json();
        }
        )
        .then((data) => {
            console.log("Signed up");
            history.push(redirect);
            return data;
        })
        .catch((error) => {
            console.log(error);
        });
        console.log(JSON.stringify(result));
    };

    return (
        <div className="login">
            <div className="login-header">
                <div className="login-box">
                    Signup
                    <div className="login-form">
                        <form onSubmit={handleSubmit}  className="login">
                            <div className="fields">
                            <div className="login-form-text">
                                Name
                            </div>
                            <input type="text" value={name} onChange={(e) => {setname(e.target.value)}} className="login-form-input" required/>
                            <br />    
                            <div className="login-form-text">
                                Email
                            </div>
                            <input type="email" value={email} onChange={(e) => {setemail(e.target.value)}} className="login-form-input" required/>
                            <br />
                            <div className="login-form-text">
                                Privilege
                            </div>
                            <select className="login-form-select" name="privilege" id="privilege" value={privilege} onChange={(e) => setprivilege(e.target.value)} required>
                                <option className="login-form-select" name="privilege" value="Create as...">Create as...</option>
                                <option className="login-form-select" name="privilege" value="User">User</option>
                                <option className="login-form-select" name="privilege" value="Admin">Admin</option>
                            </select>
                            <br />
                            <div className="login-form-text">
                                Password
                            </div>
                            <input type="password" className="login-form-input" value ={password} onChange={(e) => {setpassword(e.target.value)}} required/>
                            <br />
                            </div>

                            <button type="submit" className="login-form-button">Create Account</button>
                            <button type="button" className="login-form-button"><Link to="/login">Login</Link></button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup;
