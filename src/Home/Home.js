import Navbar from "../Navbar/Navbar.js";
import AdminNavbar from "../AdminNavbar/AdminNavbar.js";
import Header from "../Header/Header.js";
import SearchBar from "../SearchBar/SearchBar.js";
import "./Home.css";
import React from "react";
import img1 from "../Assets/img1.png";
import img2 from "../Assets/img2.png";

function Home({ id, privilege }) {
  return (
    <div className="App">
      <Header />
      {privilege === "Admin" || privilege === "SuperAdmin" ? (
        <div>
          <AdminNavbar />
        </div>
      ) : (
        <div>
          <Navbar />
        </div>
      )}
      <SearchBar />
      <div className="ads">
        <img1 />
      </div>
      <div className="ads">
        <img2 />
      </div>
    </div>
  );
}

export default Home;
