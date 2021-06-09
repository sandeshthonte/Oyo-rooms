import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css'
import oyo from '../Assets/oyo-logo.png';

function Header(params) {
    return (
        <div className="header">
            <div className="imglogo">
                <img src= {oyo} alt="oyo-logo" />
                {/* <div className="name">{ user }</div> */}
                </div>
            <div className="other-headers">
                <div className="boxes"><Link className="Link" to="/login">Become A Membar</Link></div>
                <div className="boxes"><Link className="Link" to="/login">English</Link></div>
                <div className="boxes"><Link className="Link" to="/login">Log Out</Link></div>
            </div>
            
        </div>
    )
}

export default Header;
