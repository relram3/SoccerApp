import React, { Component } from "react";
import "./App.css";

import Navbar from "./Components/layout/Navbar";
import Landing from "./Components/layout/Landing";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Landing />
      </div>
    );
  }
}

export default App;
