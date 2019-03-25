import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Travel from "./Travel";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Travel</h1>
        </header>
        <Travel
          destination="France"
          country="Lyon"
          photo="https://image.noelshack.com/fichiers/2019/13/1/1553509651-lyon.jpg"
          distance=" no-distance"
        />
        <Travel
          destination="Borneo"
          country="Sarawak"
          photo="https://image.noelshack.com/fichiers/2019/13/1/1553509254-wm-jungle-waterfall-min.jpg"
          distance=" 11.401,73 km"
        />
      </div>
    );
  }
}

export default App;