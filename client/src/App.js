import React from 'react';
import './App.css';
import { BrowserRouter, Route} from "react-router-dom";
import Login from './Containers/Authentication/Login/Login';
import Signup from './Containers/Authentication/Signup/Signup';

class App extends React.Component{
  render() {
    return (
      <BrowserRouter>
        <Route path="/Login" exact component={Login}/>
        <Route path="/Signup" exact component={Signup}/>
      </BrowserRouter>
    );
  }
}

export default App;
