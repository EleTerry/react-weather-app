import React from "react";
import "./Forecast.css";
import ReactAnimatedWeather from "react-animated-weather";
export default function Forecast() {
  return (
    <div className="Forecast">
      <div className="row">
        <div className="col-2">
          <h5>Mon</h5>
          <ReactAnimatedWeather
        icon="PARTLY_CLOUDY_DAY"
        color="black"
        size={20}
        animate={true}
      />
          <div className="forecast-temp">
            <strong>15°</strong>
          </div>
        </div>
        <div className="col-2">
          <h5>Tue</h5>
          <ReactAnimatedWeather
        icon="CLEAR_DAY"
        color="black"
        size={20}
        animate={true}
      />
          <div className="forecast-temp">
            <strong>15°</strong>
          </div>
        </div>
        <div className="col-2">
          <h5>Wed</h5>
         <ReactAnimatedWeather
        icon="RAIN"
        color="black"
        size={20}
        animate={true}
      />
       <div className="forecast-temp">
            <strong>15°</strong>
          </div>
        </div>
        <div className="col-2">
          <h5>Thu</h5>
          <ReactAnimatedWeather
        icon="PARTLY_CLOUDY_DAY"
        color="black"
        size={20}
        animate={true}
      />
          <div className="forecast-temp">
            <strong>15°</strong>
          </div>
        </div>
        <div className="col-2">
          <h5>Fri</h5>
         <ReactAnimatedWeather
        icon="RAIN"
        color="black"
        size={20}
        animate={true}
      />
          <div className="forecast-temp">
            <strong>15°</strong>
          </div>
        </div>
        <div className="col-2">
          <h5>Sat</h5>
         <ReactAnimatedWeather
        icon="CLEAR_DAY"
        color="black"
        size={20}
        animate={true}
      />
          <div className="forecast-temp">
            <strong>15°</strong>
          </div>
        </div>
      </div>
  </div>
  );
}
