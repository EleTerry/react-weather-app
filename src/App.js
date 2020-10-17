import React from 'react';

import Form from "./Form";
import Temperature from "./Temperature";
import Forecast from "./Forecast";


import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
      <Temperature />
      <Forecast />
      <Form />
      <footer>
        <a href="https://github.com/EleTerry/react-weather-app" target="_blank" rel="noopener noreferrer">Open-source code</a> by Elena Terraneo
      </footer>
    </div>
    </div>
  );
}

export default App;
