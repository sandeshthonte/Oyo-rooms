import React, { useState, useEffect } from "react";
import TopSearchBar from "../TopSearchBar/TopSearchBar.js";
import AdminNavbar from "../AdminNavbar/AdminNavbar.js";
import Navbar from "../Navbar/Navbar.js";

import { Link, useHistory } from "react-router-dom";
import DatePicker from "react-datepicker";
import Footer from "../Footer/Footer.js";
import "./AddRooms.css";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";

function AddRooms({ id, privilege }) {
  const [hotelName, sethotelName] = useState(null);
  const [address, setaddress] = useState(null);
  const [city, setcity] = useState(null);
  const [price, setprice] = useState(null);
  const [rating, setrating] = useState(null);
  const [endDate, setendDate] = useState(null);
  const [suggest, setsuggest] = useState(null);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const rid = Math.floor(Math.random() * 10000 + 1);
    const pricing = price;
    const room = {
      rid,
      address,
      city,
      endDate,
      hotelName,
      pricing,
      rating,
    };
    const redirect = "/admin/myRooms";
    console.log(room);
    const result = fetch("/api/hotels/addRoom", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(room),
    })
      .then((response) => {
        console.log("Added");
        return response.json();
      })
      .then((data) => {
        console.log("Room Added");
        history.push(redirect);
        return data;
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(JSON.stringify(result));
  };

  useEffect(() => {
    fetch(`/api/city/cities/${city}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data) {
          setsuggest(data);
        }
      })
      .catch((error) => {
        setsuggest(null);
      });
    console.log(suggest);
  }, [city]);

  return (
    <div className="login">
      <TopSearchBar />
      {privilege === "Admin" || privilege === "SuperAdmin" ? (
        <div>
          <AdminNavbar />
        </div>
      ) : (
        <div>
          <Navbar />
        </div>
      )}

      <div className="login-header">
        <div className="login-box">
          Add a Room
          <div className="login-form">
            <form onSubmit={handleSubmit} className="login">
              <div className="fields">
                <div className="login-form-text">Hotel Name</div>
                <input
                  type="text"
                  value={hotelName}
                  onChange={(e) => {
                    sethotelName(e.target.value);
                  }}
                  className="login-form-input"
                  required
                />
                <br />
                <div className="login-form-text">Address</div>
                <input
                  type="text"
                  value={address}
                  onChange={(e) => {
                    setaddress(e.target.value);
                  }}
                  className="login-form-input"
                  required
                />

                <br />
                <div className="login-form-text">City</div>
                <div className="one-field">
                  <input
                    type="text"
                    className="search-fields"
                    value={city}
                    placeholder="Search City"
                    required
                    onChange={(e) => {
                      setcity(e.target.value);
                    }}
                  />
                  {suggest &&
                    suggest.map((home) => (
                      <li
                        className="auto-suggest"
                        onClick={(e) => {
                          e.preventDefault();
                          setcity(home.city);
                        }}
                      >
                        {home.city}
                      </li>
                    ))}
                </div>
                <br />
                <div className="login-form-text">Valid upto Date</div>
                <DatePicker
                  className="search-fields-date"
                  selected={endDate}
                  onSelect={(e) => {
                    setendDate(e);
                  }}
                  dateFormat="yyyy-MM-dd"
                  minDate={new Date()}
                  isClearable
                  showFullMonthYearPicker
                  required
                  showYearDropdown
                />
                <br />
                <div className="login-form-text">Pricing</div>
                <input
                  type="text"
                  value={price}
                  onChange={(e) => {
                    setprice(e.target.value);
                  }}
                  className="login-form-input"
                  required
                />
                <br />
                <div className="login-form-text">Rating</div>
                <input
                  type="text"
                  value={rating}
                  onChange={(e) => {
                    setrating(e.target.value);
                  }}
                  className="login-form-input"
                  required
                />
                <br />
              </div>

              <button
                type="submit"
                onClick={handleSubmit}
                className="login-form-button"
              >
                Add a Room
              </button>
              <button type="reset" className="login-form-button">
                Reset
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AddRooms;
