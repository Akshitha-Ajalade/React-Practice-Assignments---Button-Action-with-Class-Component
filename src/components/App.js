import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }

  // updateData() {
  //   this.setState({
  //     paragraph:
  //       "Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy"
  //   });
  // }

  // updateData2() {
  //   this.setState({
  //     paragraph: " "
  //   });
  // }

  render() {
    return (
      <div id="main">
        {this.state.visible ? (
          <p id="para">
            Hello, I've learnt to use the full-stack evaluation tool. This makes
            me so happy
          </p>
        ) : (
          ""
        )}

        <button
          id="click"
          onClick={() => {
            this.setState({ visible: !this.state.visible });
          }}
        >
          click Me
        </button>
      </div>
    );
  }
}

export default App;
