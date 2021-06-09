import AdminNavbar from "../AdminNavbar/AdminNavbar.js";
import Header from "../Header/Header.js";
import SearchBar from "../SearchBar/SearchBar.js";
import "./AdminHome.css";
import React from "react";

function Home() {
  return (
    <div className="App">
      <Header />
      <AdminNavbar />
      <SearchBar />
    </div>
  );
}

export default Home;
