import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "./Redux/actions/index";
import Login from "./Containers/Authentication/Login/Login";
import Signup from "./Containers/Authentication/Signup/Signup";
import AdminSignup from "./Containers/Authentication/AdminSignup/AdminSignup";

class App extends React.Component {
  componentDidMount() {
    this.props.onAuthCheckState();
  }

  render() {
    let routes = (
      <Switch>
        <Route path="/Login" exact component={Login} />
        <Route path="/Signup" exact component={Signup} />
        <Route path="/AdminSignup" exact component={AdminSignup} />
      </Switch>
    );

    if (this.props.isAuthenticated && this.props.isAdmin) {
      routes = <h1>Admin Logged In</h1>;
    }

    if (this.props.isAuthenticated && !this.props.isAdmin) {
      routes = <h1>User Logged In</h1>;
    }

    return <div>{routes}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.userAuth.isAuthenticated,
    isAdmin: state.userAuth.isAdmin,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAuthCheckState: () => dispatch(actions.authCheckState()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
