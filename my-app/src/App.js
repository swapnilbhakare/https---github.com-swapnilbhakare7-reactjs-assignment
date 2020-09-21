import React, { Component } from "react";
import UserInput from "./UserInput/UserInput.js";

import UserOutput from "./UserOutput/UserOutput.js";

import "./App.css";

class App extends Component {
  state = {
    username: "swapnil",
  };

  usernameChangeHandler = (event) => {
    this.setState({ username: event.target.value });
  };

  render() {
    return (
      <div className="App">
        <UserInput
          changed={this.usernameChangeHandler}
          currentName={this.state.username}
        />

        <UserOutput userName={this.state.username} />
      </div>
    );
  }
}

export default App;
