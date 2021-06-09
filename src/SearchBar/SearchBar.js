import React, { useState } from "react";
import "./SearchBar.css";
import DatePicker from "react-datepicker";
import { useHistory } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";

function SearchBar({ id, privilege }) {
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);
  const [place, setplace] = useState(null);
  const history = useHistory();
  const details = { fromDate, toDate, place };

  const handleClick = (event) => {
    if (privilege === "Admin") {
      history.push("/admin/bookRooms");
    } else if (privilege === "User") {
      history.push("/user/bookRooms");
    } else if (privilege === "SuperAdmin") {
      history.push("/admin/bookRooms");
    }
  };

  return (
    <div className="searchbarred">
      <div className="search-text">
        <h1>World's Fastest Growing Hotel Chain</h1>
      </div>
      <div className="actual-searchbar">
        <input
          type="text"
          className="search-fields"
          value={place}
          placeholder="Search City"
          onChange={(e) => {
            setplace(e.target.value);
          }}
        />
        {/* <div>
          <PlacesAutocomplete
            value={place}
            onChange={(e) => {
              setplace(e);
            }}
            onSelect={(e) => {
              setplace(e);
            }}
          >
            {({
              getInputProps,
              suggestions,
              getSuggestionItemProps,
              loading,
            }) => (
              <div>
                <input
                  {...getInputProps({
                    placeholder: "Search Places ...",
                    className: "location-search-input",
                  })}
                />
                <div className="autocomplete-dropdown-container">
                  {loading && <div>Loading...</div>}
                  {suggestions.map((suggestion) => {
                    const className = suggestion.active
                      ? "suggestion-item--active"
                      : "suggestion-item";
                    // inline style for demonstration purpose
                    const style = suggestion.active
                      ? { backgroundColor: "#fafafa", cursor: "pointer" }
                      : { backgroundColor: "#ffffff", cursor: "pointer" };
                    return (
                      <div
                        {...getSuggestionItemProps(suggestion, {
                          className,
                          style,
                        })}
                      >
                        <span>{suggestion.description}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </PlacesAutocomplete>
        </div> */}

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
        <button type="data" className="search-fields-btn" onClick={handleClick}>
          Search
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
