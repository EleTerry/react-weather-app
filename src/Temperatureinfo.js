import React from "react";
import WeatherIcon from "./WeatherIcon";
export default function TemperatureInfo(props){
return (
     <div className="TemperatureInfo">
      <div className="row">
        <div className="col-2">
          <WeatherIcon code={props.data.icon} />
        </div>
        <div className="col-5">
          <span className="updated-temperature">{props.data.temperature}</span>
          <span className="units">
             °C |°F
          </span>
        </div>
        <div className="col-5">
           <ul>
             <li className="city">
          <h3 >{props.data.city}</h3>
         </li>
            <li clssName="description">
              <span className="text-capitalize">{props.data.description}</span>
            </li>
          </ul>
        </div>
      </div>
       <div className="information-text">
      <div className="row">
        <div className="col-6">
          Humidity: <span>{props.data.humidity}</span>%
        </div>
        <div className="col-6">
          Wind Speed: <span>{props.data.wind}</span>km/h
        </div>
      </div>
   </div>
   </div>
);
}