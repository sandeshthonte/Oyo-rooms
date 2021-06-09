import React from "react";
import TopSearchBar from "../TopSearchBar/TopSearchBar.js";
import Header from "../Header/Header";
import RoomCard from "../RoomCard/RoomCard.js";
import NavBar from "../Navbar/Navbar.js";
import AdminNavbar from "../AdminNavbar/AdminNavbar.js";
import Loaders from "../Loaders/Loaders.js";
import GETFetch from "../APIs/GETFetch.js";
import "./ContactUs.css";

function GetRooms({ id, privilege }) {
  const { error, isPending, data: rooms } = GETFetch("/api/hotels/rooms");

  return (
    <div>
      <Header />
      {privilege === "Admin" || privilege === "SuperAdmin" ? (
        <div>
          <AdminNavbar />
        </div>
      ) : (
        <div>
          <NavBar />
        </div>
      )}
      <p>Contact Us</p>
    </div>
  );
}

export default GetRooms;
