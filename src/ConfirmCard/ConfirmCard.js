import React, { useState } from "react";
import GETFetch from "../APIs/GETFetch.js";
import "./ConfirmCard.css";
import Loaders from "../Loaders/Loaders.js";
import { useHistory } from "react-router-dom";
import trial from "../Assets/trial.jpg";

function BookingCard({ booking }) {
  // const [rooms, setrooms] = useState(null);
  // setrooms(params.room);
  const bid = booking.bid;
  const rid = booking.rid;
  const id = booking.id;
  const approval = "Approved";
  const duration = booking.duration;
  const fromDate = booking.fromDate;
  const toDate = booking.toDate;

  const history = useHistory();
  const { error, isPending, data: room } = GETFetch(`/api/hotels/room/${rid}`);
  console.log(room);

  const handleAccept = (e) => {
    // const finalbooking = { bid, approval, duration, fromDate, id, rid, toDate };
    const result = fetch(`/api/selections/updateBooking/${bid}/${approval}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        console.log("Added");
        return response.json();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleReject = (e) => {
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

              {/* <p>{room.rating}</p>
          <p>{room.date}</p>

          <p>{room.address}</p> */}
            </div>
            <div className="buttonsdiff">
              <div className="price">
                <p>From Date: {booking.fromDate}</p>
              </div>
              <div className="price">
                <p>From Date: {booking.toDate}</p>
              </div>
            </div>
            <div className="buttons">
              <div className="price">
                <p>
                  <b>Price: </b> Rs.{room.price}
                </p>
              </div>
              <button type="data" className="book-btn" onClick={handleAccept}>
                Accept
              </button>
              <button type="data" className="book-btn" onClick={handleReject}>
                Reject
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default BookingCard;
