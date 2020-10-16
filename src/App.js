import React from 'react';
import ReactDOM from "react-dom";
import Form from "./Form";
import Temperature from "./Temperature";
import Forecast from "./Forecast";


import './App.css';

function App() {
  return (
    <div className="App">
      
      <Temperature />
      <Forecast />
      <Form />
      <footer>
        <a href="https://github.com/EleTerry/react-weather-app" target="_blank">Open source</a> by Elena Terraneo
      </footer>
    </div>
  );
}

export default App;
