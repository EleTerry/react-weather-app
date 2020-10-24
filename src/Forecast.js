import React, {useState} from "react";
import axios from "axios";

import "./Forecast.css";
import ForecastInfo from "./ForecastInfo";

export default function Forecast(props) {
  const[load, setLoad] = useState(false);
const[forecast, setForecast] = useState(null);

  function showForecast(response){
   setForecast(response.data); 
setLoad(true);
}

  if (load && props.city === forecast.city.name) {
    return (
    <div className="Forecast">
      <div className="row">
   <ForecastInfo data={forecast.list[0]} />
    <ForecastInfo data={forecast.list[1]} />
     <ForecastInfo data={forecast.list[2]} />
      <ForecastInfo data={forecast.list[3]} />
       <ForecastInfo data={forecast.list[4]} />
        <ForecastInfo data={forecast.list[5]} />
          </div>
        </div>
  );
  } else {
    const apiKey="00f59b8f2bccd0db3d87558a2dc2abfa";
 let apiUrl=`https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
 axios.get(apiUrl).then(showForecast);

 return null;
}
}