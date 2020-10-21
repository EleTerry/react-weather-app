import React, {useState} from "react";
import axios from "axios";
import Forecast from "./Forecast";
import TemperatureInfo from "./Temperatureinfo";
import "./Temperature.css";


export default function Temperature(props) {
  const[city, setCity] = useState(props.defaultCity);
  const[weather, setWeather] = useState({load:false});
 
  function displayWeather(response){
setWeather({
  load: true,
  city: response.data.name,
  temperature: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
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
 axios.get(url).then(displayWeather);
  }

  if(weather.load) {
  return (
   <div>
    <TemperatureInfo data={weather} />
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
