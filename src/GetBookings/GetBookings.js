import React from "react";
import BookingCard from "../BookingCard/BookingCard.js";
import Header from "../Header/Header.js";
import AdminNavbar from "../AdminNavbar/AdminNavbar.js";
import Navbar from "../Navbar/Navbar.js";
import Loaders from "../Loaders/Loaders.js";
import GETFetch from "../APIs/GETFetch.js";

function GetRooms({ id, privilege }) {
  const { error, isPending, data: bookings } = GETFetch("/api/hotels/rooms");

  return (
    <div>
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
      {error && <div>{error}</div>}
      {isPending && <Loaders />}
      {bookings &&
        bookings.map((booking) => (
          <BookingCard booking={booking} key={booking.rid} />
        ))}
    </div>
  );
}

export default GetRooms;
