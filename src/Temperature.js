import React from "react";
import Forecast from "./Forecast";
import "./Temperature.css";
import ReactAnimatedWeather from "react-animated-weather";
export default function Temperature(props) {
  return (
    <div className="Temperature">
      <div className="row">
        <div className="col-2">
          <ReactAnimatedWeather
        icon="CLOUDY"
        color="orange"
        size={50}
        animate={false}
      />
        </div>
        <div className="col-5">
          <span className="updated-temperature"> 14 </span>
          <span className="units">
             °C |°F
           
          </span>
        </div>
        <div className="col-5">
          <h3 className="city">Nottingham</h3>
          <ul>
            <li>
              <span id="description"> Clouds</span>
            </li>
          </ul>
        </div>
      </div>
       <div className="information-text">
      <div className="row">
        <div className="col-6">
          Humidity: <span id="humidity"></span>%
        </div>
        <div className="col-6">
          Wind Speed: <span id="wind"></span>km/h
        </div>
      </div>
    </div>
      <Forecast />
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
    </div>
  );
}
