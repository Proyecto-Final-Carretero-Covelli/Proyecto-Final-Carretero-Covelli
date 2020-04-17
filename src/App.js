import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import TestLayout from "./components/TestLayout";
import TestDataBase from "./components/TestDataBase";

class App extends Component {
  render() {
    return (
      <div>
        <TestLayout />
        {/*<TestDataBase />*/}
      </div>
    );
  }
}

export default App;
