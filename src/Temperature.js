import React from "react";
import Description from "./Description";
import "./Temperature.css";

export default function Temperature(props) {
  return (
    <div className="Temperature">
      <div className="row">
        <div className="col-2">
          <img src="#" id="description-icon" />{" "}
        </div>
        <div className="col-5">
          <span className="now-temp"> 14 </span>
          <span className="units">
            <a href="#" id="celsius-link" className="active">
              °C{" "}
            </a>{" "}
            |
            <a href="#" id="fahrenheit-link">
              {" "}
              °F
            </a>
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
      <Description />
    </div>
  );
}
