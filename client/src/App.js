import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "react-bootstrap/Button";

class App extends Component {

  
  doSomething = () => {
    alert("clicked");
  };

  render() {
    return (
      <div>
        <h1>Can you see this??</h1>
        <Button onClick={this.doSomething}>Hello</Button>
      </div>
    );
  }
}

export default App;
