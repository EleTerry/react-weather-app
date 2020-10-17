import React from 'react';
import Temperature from "./Temperature";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
      <Temperature defaultCity="London"/>
      <footer>
        <a href="https://github.com/EleTerry/react-weather-app" target="_blank" rel="noopener noreferrer">Open-source code</a> by Elena Terraneo
      </footer>
    </div>
    </div>
  );
}

export default App;
