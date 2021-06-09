import React, { useState, useEffect } from "react";
import TopSearchBar from "../TopSearchBar/TopSearchBar.js";
import RoomCard from "../RoomCard/RoomCard.js";
import NavBar from "../Navbar/Navbar.js";
import AdminNavbar from "../AdminNavbar/AdminNavbar.js";
import Loaders from "../Loaders/Loaders.js";
import Footer from "../Footer/Footer.js";
import GETFetch from "../APIs/GETFetch.js";
import "./AllRooms.css";

function GetRooms({ id, privilege }) {
  const [data, setdata] = useState(null);
  const [isPending, setisPending] = useState(true);
  const [error, setError] = useState(null);
  const [temp, settemp] = useState(null);
  const [details, setDetails] = useState({
    fromDate: "2012-01-01",
    toDate: "2012-01-02",
    place: "r",
  });

  useEffect(() => {
    const { fromDate, toDate, place } = details;
    console.log(toDate);
    setTimeout(() => {
      fetch(`/api/hotels/rooms`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Unable to fetch from server");
          }
          return response.json();
        })
        .then((data) => {
          setdata(data);
          setisPending(false);
          setError(null);
        })
        .catch((error) => {
          setisPending(false);
          setError(error.message);
          setdata(null);
        });
    }, 1000);
  }, [details]);

  // if(details){
  //     data.filter(room => room.city !== details.city);
  // }

  return (
    <div className="common">
      <TopSearchBar />
      {privilege === "SuperAdmin" ? (
        <div>
          <AdminNavbar />
        </div>
      ) : (
        <div>
          <NavBar />
        </div>
      )}
      <div>
        {error && <div>{error}</div>}
        {isPending && <Loaders />}
        {data &&
          data.map((room) => (
            <RoomCard details={details} room={room} id={id} key={room.id} />
          ))}
      </div>
      )
      <Footer />
    </div>
  );
}
export default GetRooms;
