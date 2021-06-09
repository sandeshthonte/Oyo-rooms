import React from "react";
import TopSearchBar from "../TopSearchBar/TopSearchBar.js";
import RoomCard from "../RoomCard/RoomCard.js";
import UserCard from "../UserCard/UserCard.js";
import NavBar from "../Navbar/Navbar.js";
import AdminNavbar from "../AdminNavbar/AdminNavbar.js";
import Loaders from "../Loaders/Loaders.js";
import GETFetch from "../APIs/GETFetch.js";
import "./UserProfile.css";

function UserProfile({ id, privilege }) {
  const {
    error,
    isPending,
    data: user,
  } = GETFetch(`/api/privilege/user/${id}`);

  return (
    <div>
      <TopSearchBar />
      {privilege === "Admin" || privilege === "SuperAdmin" ? (
        <div>
          <AdminNavbar />
        </div>
      ) : (
        <div>
          <NavBar />
        </div>
      )}
      {error && <div>{error}</div>}
      {isPending && <Loaders />}
      {user && <UserCard user={user} />}
    </div>
  );
}

export default UserProfile;
