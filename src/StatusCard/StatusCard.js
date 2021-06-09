import React, { useState } from "react";
import GETFetch from "../APIs/GETFetch.js";
import "./StatusCard.css";
import Loaders from "../Loaders/Loaders.js";
import trial from "../Assets/trial.jpg";

function StatusCard({ booking }) {
  // const [rooms, setrooms] = useState(null);
  // setrooms(params.room);
  const rid = booking.rid;
  const id = booking.id;
  const bid = booking.bid;
  const approval = booking.approval;
  const { error, isPending, data: room } = GETFetch(`/api/hotels/room/${rid}`);
  // const { errors, isPendings, data: user } = GETFetch(`/api/privilege/${id}`);
  console.log(room);

  const handleReject = (e) => {
    e.preventDefault();
    const result = fetch(`/api/selections/deleteBooking/${bid}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        console.log("Deleted");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      {error && <div>{error}</div>}
      {isPending && <Loaders />}
      {room && (
        <div className="roomCard">
          <div className="imgroom">
            <img src={trial} alt="oyo-logo" />
            {/* <div className="name">{ user }</div> */}
          </div>
          <div className="contents">
            <div className="text">
              <h1>
                <b>Hotel Name:</b>
                {room.hotelName}
              </h1>
              <p>
                <b>Address:</b> {room.address}
              </p>
              <p>
                <b>City:</b>
                {room.city}
              </p>
              <p>
                <b>Booking ID:</b>
                {bid}
              </p>
              <p>
                <b>Status:</b> {booking.approval}
              </p>
            </div>
            <div className="buttonsdiff">
              <div className="price">
                <p>From Date: {booking.fromDate}</p>
              </div>
              <div className="price">
                <p>To Date: {booking.toDate}</p>
              </div>
            </div>
            <div className="buttons">
              <div className="price">
                <p>
                  <b>Price:</b> Rs.{room.pricing}
                </p>
              </div>
              <button type="data" onClick={handleReject} className="book-btn">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default StatusCard;
