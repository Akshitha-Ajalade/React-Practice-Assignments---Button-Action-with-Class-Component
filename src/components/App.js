import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message:
        "class components of react and state management in class components"
    };
  }

  render() {
    return (
      <div id="main">
        <button id="click" onClick=<p id="para">{this.state.message}</p>>
          click me
        </button>
      </div>
    );
  }
}

export default App;
