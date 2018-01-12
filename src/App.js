import React, { Component } from "react";
import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";

class App extends Component {
  state = {
    userName1: "Josh",
    userName2: "Carla",
    userName3: "Alex"
  };

  nameChangedHandler = event => {
    this.setState({
      userName1: "Josh",
      userName2: event.target.value,
      userName3: "Alex"
    });
  };

  render() {
    return (
      <div className="App">
        <UserInput changed={this.nameChangedHandler} />
        <UserOutput userName={this.state.userName1} />
        <UserOutput userName={this.state.userName2} />
        <UserOutput userName={this.state.userName3} />
      </div>
    );
  }
}

export default App;
