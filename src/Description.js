import React from "react";
import "./Description.css";

export default function Description() {
  return (
    <div className="container-text">
      <div className="row">
        <div className="col-6">
          Humidity: <span id="humidity"></span>%
        </div>
        <div className="col-6">
          Wind Speed: <span id="wind"></span>km/h
        </div>
      </div>
    </div>
  );
}
