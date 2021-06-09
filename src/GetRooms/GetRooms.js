import React, { useState, useEffect } from "react";
import TopSearchBar from "../TopSearchBar/TopSearchBar.js";
import RoomCard from "../RoomCard/RoomCard.js";
import NavBar from "../Navbar/Navbar.js";
import AdminNavbar from "../AdminNavbar/AdminNavbar.js";
import Loaders from "../Loaders/Loaders.js";
import Footer from "../Footer/Footer.js";
import GETFetch from "../APIs/GETFetch.js";

function GetRooms({ id, privilege }) {
  const [data, setdata] = useState(null);
  const [isPending, setisPending] = useState(true);
  const [error, setError] = useState(null);
  const [temp, settemp] = useState(null);
  const [details, setDetails] = useState(null);
  const [place, setplace] = useState(null);

  useEffect(() => {
    if (!details) {
      setTimeout(() => {
        fetch(`/api/hotels/rooms`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        })
          .then((response) => {
            // if (!response.ok) {
            //   throw new Error("Unable to fetch from server");
            // }
            return response.json();
          })
          .then((data) => {
            setdata(data);
            console.log(data);
            console.log(`/api/hotels/rooms`);
            setisPending(false);
            setError(null);
          })
          .catch((error) => {
            setisPending(false);
            setError(error.message);
            setdata(null);
          });
      }, 1000);
    } else {
      const { fromDate, toDate, place } = details;
      setTimeout(() => {
        fetch(`/api/hotels/roomCity/${place}/${fromDate}/${toDate}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        })
          .then((response) => {
            // if (!response.ok) {
            //   throw new Error("Unable to fetch from server");
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
    }
  }, [details]);

  // if(details){
  //     data.filter(room => room.city !== details.city);
  // }

  return (
    <div className="common">
      <TopSearchBar setDetails={setDetails} />
      {privilege === "Admin" || privilege === "SuperAdmin" ? (
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
              <RoomCard
                details={details}
                setDetails={setDetails}
                room={room}
                id={id}
                key={room.id}
              />
            ))}
        </div>
      ) : (
        <div>
          {error && <div>{error}</div>}
          {isPending && <Loaders />}
          {data &&
            data.map((room) => (
              <RoomCard
                details={details}
                setDetails={setDetails}
                room={room}
                id={id}
                key={room.id}
              />
            ))}
        </div>
      )}
      <Footer />
    </div>
  );
}
export default GetRooms;
