import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./RoomCard.css";
import trial from "../Assets/trial.jpg";

function RoomCard({ room, id, details, setDetails }) {
  // const [rooms, setrooms] = useState(null);
  const history = useHistory();
  const { rid, pricing, address, city, endDate, rating, hotelName } = room;

  const handleClick = (e) => {
    e.preventDefault();
    const { fromDate, toDate, place } = details;
    const approval = "Pending";
    const duration = "Unknown";
    const bid = Math.floor(Math.random() * 10000 + 1);
    const data = { bid, id, rid, fromDate, toDate, approval, duration };
    console.log(data);

    const result = fetch("/api/selections/addBooking", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        console.log("Added");
        // history.push("/user/myRooms");
      })
      .catch((error) => {
        console.log("Error");
      });
  };

  // setrooms(params.room);
  return (
    <div className="roomCard">
      <div className="imgroom">
        <img src={trial} alt="oyo-logo" />
        {/* <div className="name">{ user }</div> */}
      </div>
      <div className="contents">
        <div className="text">
          <h1>
            <b>Hotel Name: </b>
            {hotelName}
          </h1>
          <p>
            <b>Address: </b> {address}
          </p>
          <p>
            <b>City: </b> {city}
          </p>
          <p>
            <b>Date:</b> {endDate}
          </p>
          <p>
            <b>Rating:</b> {rating}
          </p>
        </div>
        <div className="buttons">
          <div className="price">
            <p>Rs.{pricing}</p>
          </div>
          <button type="data" className="book-btn" onClick={handleClick}>
            Book
          </button>
        </div>
      </div>
    </div>
  );
}

export default RoomCard;
