import React from "react";
import "./Form.css";
export default function Form() {
  return (
    <form className="form-search">
      <div className="row">
        <div className="col-6">
          <input
            type="text"
            className="form-control"
            placeholder="Enter your City 📍"
            id="text-input"
          />
        </div>
        <div className="col-2">
          <button type="submit" className="rounded-sm" id="search-form">
            {" "}
            Search
          </button>
        </div>
        <div className="col-4">
          <button className="geolocation">Current Location</button>
        </div>
      </div>
      <br />
      <span id="geolocation-text">
        <h6> Your current location is </h6>
      </span>
    </form>
  );
}
