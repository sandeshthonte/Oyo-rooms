import React from "react";
import { Link } from "react-router-dom";
import "./AdminNavbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/admin/home" className="navbar-link">
        Home
      </Link>
      <Link to="/admin/showRequests" className="navbar-link">
        All Requests
      </Link>
      <Link to="/admin/showAllRooms" className="navbar-link">
        All Rooms
      </Link>
      <Link to="/admin/showAllBookings" className="navbar-link">
        All Bookings
      </Link>

      <Link to="/admin/addRoom" className="navbar-link">
        Add a Room
      </Link>
      <Link to="/admin/bookRooms" className="navbar-link">
        Book Rooms
      </Link>
      <Link to="/admin/myRooms" className="navbar-link">
        Accepted Requests
      </Link>
      <Link to="/admin/showUsers" className="navbar-link">
        All Users
      </Link>
      <Link to="/admin/userProfile" className="navbar-link">
        User Profile
      </Link>
      <Link to="/admin/contactUs" className="navbar-link">
        Contact Us
      </Link>
      <Link to="/admin/aboutUs" className="navbar-link">
        About Us
      </Link>
    </nav>
  );
}
// #F3F5F7
export default Navbar;
