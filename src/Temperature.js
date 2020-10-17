import React, {useState} from "react";
import axios from "axios";
import Forecast from "./Forecast";
import "./Temperature.css";


export default function Temperature(props) {
  const[city, setCity] = useState(props.defaultCity);
  const[weather, setWeather] = useState({load:false});
 
  function showWeather(response){
setWeather({
  load: true,
  temperature: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      description: response.data.weather[0].description,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    });
    
  }

  function handleSubmit(event){
    event.preventDefault();
 search();
  }

  function updateCity(event){
    setCity(event.target.value);
  }

  function search(){
const apiKey ="00f59b8f2bccd0db3d87558a2dc2abfa";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
 axios.get(url).then(showWeather);
  }

  if(weather.load) {
  return (
    <div className="Temperature">
      <div className="row">
        <div className="col-2">
          <img src={weather.icon} alt="Weather-icon" />
        </div>
        <div className="col-5">
          <span className="updated-temperature">{weather.temperature}</span>
          <span className="units">
             °C |°F
           
          </span>
        </div>
        <div className="col-5">
           <ul>
             <li className="city">
          <h3 >{city}</h3>
         </li>
            <li clssName="description">
              <span className="text-capitalize">{weather.description}</span>
            </li>
          </ul>
        </div>
      </div>
       <div className="information-text">
      <div className="row">
        <div className="col-6">
          Humidity: <span>{weather.humidity}</span>%
        </div>
        <div className="col-6">
          Wind Speed: <span>{weather.wind}</span>km/h
        </div>
      </div>
    </div>
      <Forecast />
        <form className="form-search" onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-6">
          <input
            type="text"
            className="form-control"
            placeholder="Enter your City 📍"
            autoFocus="on"
            onChange={updateCity}
          />
        </div>
        <div className="col-2">
          <button type="submit" className="rounded-sm" >
            {" "}
            Search
          </button>
        </div>
        <div className="col-4">
          <button className="geolocation">Current Location</button>
        </div>
      </div>
      <br />
      <span className="geolocation-text">
        <h6> Your current location is </h6>
      </span>
    </form>
    </div>
  );
} else {
 search();
 return "Loading ...";
}
}
