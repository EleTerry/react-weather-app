import React from "react";
import "./Forecast.css";
export default function Forecast() {
  return (
    <div className="Forecast">
      <div className="row">
        <div className="col-2">
          <h5>Mon</h5>
          <img src="#" alt="icon" />
          <div className="forecast-text">
            <strong>15°</strong>
          </div>
        </div>
        <div className="col-2">
          <h5>Tue</h5>
          <img src="#"  alt="icon" />
          <div className="forecast-text">
            <strong>15°</strong>
          </div>
        </div>
        <div className="col-2">
          <h5>Wed</h5>
          <img src="#"  alt="icon" />
          <div className="forecast-text">
            <strong>15°</strong>
          </div>
        </div>
        <div className="col-2">
          <h5>Thu</h5>
          <img src="#"  alt="icon" />
          <div className="forecast-text">
            <strong>15°</strong>
          </div>
        </div>
        <div className="col-2">
          <h5>Fri</h5>
          <img src="#"  alt="icon" />
          <div className="forecast-text">
            <strong>15°</strong>
          </div>
        </div>
        <div className="col-2">
          <h5>Sat</h5>
          <img src="#"  alt="icon" />
          <div className="forecast-text">
            <strong>15°</strong>
          </div>
        </div>
      </div>
    </div>
  );
}
