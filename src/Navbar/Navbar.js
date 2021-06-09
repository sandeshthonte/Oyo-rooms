import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

function Navbar() {
    return (
        <nav className="navbar">
            <Link to='/user/home' className="navbar-link">Home</Link>
            <Link to='/user/bookRooms' className="navbar-link">Book Rooms</Link>
            <Link to='/user/myRooms' className="navbar-link">My Booked Rooms</Link>
            <Link to='/user/userProfile' className="navbar-link">User Profile</Link>
            <Link to='/user/contactUs' className="navbar-link">Contact Us</Link>
            <Link to='/user/aboutUs' className="navbar-link">About Us</Link>
        </nav>
    )
}
// #F3F5F7
export default Navbar
