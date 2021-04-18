import React from 'react';
import './App.css';
import { BrowserRouter, Route} from "react-router-dom";
import Login from './Containers/Authentication/Login/Login';


class App extends React.Component{
  render() {
    return (
      <BrowserRouter>
        <Route path="/Login" exact component={Login}/>
      </BrowserRouter>
    );
  }
}

export default App;
