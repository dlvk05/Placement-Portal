<<<<<<< HEAD
import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "react-bootstrap/Button";

class App extends Component {

  
  doSomething = () => {
    alert("clicked");
  };
=======
import React from 'react';
import './App.css';
import { BrowserRouter, Route} from "react-router-dom";
import Login from './Containers/Authentication/Login/Login';

>>>>>>> defeb817835343750e60b1d6b021410c10748825

  render() {
    return (
<<<<<<< HEAD
      <div>
        <h1>Can you see this??</h1>
        <Button onClick={this.doSomething}>Hello</Button>
      </div>
=======
      <BrowserRouter>
        <Route path="/Login" exact component={Login}/>
      </BrowserRouter>
>>>>>>> defeb817835343750e60b1d6b021410c10748825
    );
  }
}

export default App;
