import React from 'react';
import './App.css';
import { BrowserRouter, Route} from "react-router-dom";
import Login from './Containers/Authentication/Login/Login';
import Signup from './Containers/Authentication/Signup/Signup';
import AdminSignup from './Containers/Authentication/AdminSignup/AdminSignup'
import navbar from './Components/Navbar/Navbar';

class App extends React.Component{
  render() {
    return (
      <BrowserRouter>
        <Route path="/Login" exact component={Login}/>
        <Route path="/Signup" exact component={Signup}/>
        <Route path="/AdminSignup" exact component={AdminSignup}/>
        <Route path="/Navbar" exact component={navbar}/>
      </BrowserRouter>
    );
  }
}

export default App;
