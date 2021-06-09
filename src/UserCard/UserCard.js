import React, { useState } from "react";
import "./UserCard.css";
import trial from "../Assets/trial.jpg";

function userCard({ user }) {
  return (
    <div className="roomCard">
      <div className="imgroom">
        <img src={trial} alt="oyo-logo" />
      </div>
      <div className="contents">
        <div className="text">
          <h1>
            <b>User Name: </b>
            {user.name}
          </h1>
          <h3>
            <b>Email: </b> {user.email}
          </h3>
          <p>
            <b>Privilege: </b>
            {user.privilege}
          </p>
          <p>
            <b>Password: </b> {user.password}
          </p>
        </div>
      </div>
    </div>
  );
}

export default userCard;
