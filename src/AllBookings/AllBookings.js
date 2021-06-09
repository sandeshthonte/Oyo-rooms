import React from "react";
import TopSearchBar from "../TopSearchBar/TopSearchBar.js";
import StatusCard from "../StatusCard/StatusCard";
import Loaders from "../Loaders/Loaders.js";
import NavBar from "../Navbar/Navbar.js";
import AdminNavbar from "../AdminNavbar/AdminNavbar.js";
import GETFetch from "../APIs/GETFetch.js";
import "./AllBookings.css";

function GetRequests({ id, privilege }) {
  let {
    error,
    isPending,
    data: bookings,
  } = GETFetch(`/api/selections/bookings`);
  console.log(bookings);

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
      {bookings &&
        bookings.map((booking) => (
          <StatusCard booking={booking} key={booking.bid} />
        ))}
    </div>
  );
}

export default GetRequests;
