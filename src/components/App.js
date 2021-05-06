import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paragraph: " "
    };
  }

  updateData() {
    this.setState({
      paragraph:
        "Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy"
    });
  }

  render() {
    return (
      <div id="main">
        <p id="para">{this.state.paragraph}</p>
        <button id="click" onClick={() => this.updateData()}>
          click Me
        </button>
      </div>
    );
  }
}

export default App;
