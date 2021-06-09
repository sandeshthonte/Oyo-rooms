import React, { useState, useEffect } from "react";
import "./TopSearchBar.css";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import GETFetch from "../APIs/GETFetch.js";
import "react-datepicker/dist/react-datepicker.css";
import oyo from "../Assets/oyo-logo.png";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";

function TopSearchBar(props) {
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);
  const setDetails = props.setDetails;
  const [place, setplace] = useState(null);
  const [suggest, setsuggest] = useState(null);
  const details = { fromDate, toDate, place };

  const handleClick = (event) => {
    event.preventDefault();
    setDetails(details);
  };

  useEffect(() => {
    fetch(`/api/city/cities/${place}`, {
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
  }, [place]);

  return (
    <div className="searchbar">
      <div className="imglogo">
        <img src={oyo} alt="oyo-logo" />
      </div>

      <div className="actual-searchbar">
        <div className="one-field">
          <input
            type="text"
            className="search-fields"
            value={place}
            placeholder="Search City"
            onChange={(e) => {
              setplace(e.target.value);
            }}
          />
          {suggest &&
            suggest.map((home) => (
              <li
                className="auto-suggest"
                onClick={(e) => {
                  setplace(home.city);
                }}
              >
                {home.city}
              </li>
            ))}
        </div>
        <input
          type="date"
          className="search-fields-date"
          value={fromDate}
          placeholder="From Date"
          onChange={(e) => {
            setFromDate(e.target.value);
          }}
        />
        <input
          type="date"
          className="search-fields-date"
          value={toDate}
          placeholder="To Date"
          onChange={(e) => {
            setToDate(e.target.value);
          }}
        />
        <button type="data" onClick={handleClick} className="search-fields-btn">
          Search
        </button>
      </div>
      <div className="other-headers">
        <div className="boxes">
          <Link className="Link" to="/login">
            English
          </Link>
        </div>
        <div className="boxes">
          <Link className="Link" to="/login">
            Log Out
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TopSearchBar;
