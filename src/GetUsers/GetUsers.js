import React, { useState, useEffect } from "react";
import TopSearchBar from "../TopSearchBar/TopSearchBar.js";
import RoomCard from "../RoomCard/RoomCard.js";
import UserCard from "../UserCard/UserCard";
import NavBar from "../Navbar/Navbar.js";
import AdminNavbar from "../AdminNavbar/AdminNavbar.js";
import Loaders from "../Loaders/Loaders.js";
import Footer from "../Footer/Footer.js";
import GETFetch from "../APIs/GETFetch.js";
import "./GetUsers.css";

function GetRooms({ id, privilege }) {
  const [data, setdata] = useState(null);
  const [isPending, setisPending] = useState(true);
  const [error, setError] = useState(null);
  const [details, setDetails] = useState({
    fromDate: "2012-01-01",
    toDate: "2012-01-02",
    place: "r",
  });
  const { place } = details;

  useEffect(() => {
    setTimeout(() => {
      fetch(`/api/privilege/users`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
        .then((response) => {
          // if(!response.ok){
          //     throw new Error('Unable to fetch from server');
          // }
          return response.json();
        })
        .then((data) => {
          setdata(data);
          console.log(data);
          setisPending(false);
          setError(null);
        })
        .catch((error) => {
          setisPending(false);
          setError(error.message);
          setdata(null);
        });
    }, 1000);
  }, [place]);

  // if(details){
  //     data.filter(room => room.city !== details.city);
  // }

  return (
    <div>
      <TopSearchBar setDetails={setDetails} />
      {privilege === "SuperAdmin" ? (
        <div>
          <AdminNavbar />
        </div>
      ) : (
        <div>
          <NavBar />
        </div>
      )}
      {!details ? (
        <div>
          {error && <div>{error}</div>}
          {isPending && <Loaders />}
          {data &&
            data.map((room) => (
              <UserCard details={details} room={room} id={id} key={room.id} />
            ))}
        </div>
      ) : (
        <div>
          {error && <div>{error}</div>}
          {isPending && <Loaders />}
          {data && data.map((user) => <UserCard user={user} />)}
        </div>
      )}
      <Footer />
    </div>
  );
}
export default GetRooms;
