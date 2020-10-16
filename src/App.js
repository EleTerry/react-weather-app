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
    </div>
  );
}

export default App;
