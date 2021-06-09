import React from "react";
import TopSearchBar from "../TopSearchBar/TopSearchBar.js";
import BookingCard from "../BookingCard/BookingCard.js";
import Loaders from "../Loaders/Loaders.js";
import NavBar from "../Navbar/Navbar.js";
import AdminNavbar from "../AdminNavbar/AdminNavbar.js";
import GETFetch from "../APIs/GETFetch.js";
import "./MyRooms.css";

function MyRooms({ id, privilege }) {
  const approved = "Approved";
  let {
    error,
    isPending,
    data: bookings,
  } = GETFetch(`/api/selections/bookingApp/${approved}`);
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
          <BookingCard booking={booking} key={booking.bid} />
        ))}
    </div>
  );
}

export default MyRooms;
