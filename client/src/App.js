import React from "react";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "./Redux/actions/index";
//Custom Components import
import Login from "./Containers/Authentication/Login/Login";
import Signup from "./Containers/Authentication/Signup/Signup";
import AdminSignup from "./Containers/Authentication/AdminSignup/AdminSignup";
import UserLayout from "./HOC/UserLayout/UserLayout";
import Logout from "./Containers/Authentication/Logout/Logout";
import Profile from "./Containers/Profile/Profile";
import AdminLogin from "./Containers/Authentication/AdminLogin/AdminLogin";
import AdminLayout from "./HOC/AdminLayout/AdminLayout";

class App extends React.Component {
  componentDidMount() {
    this.props.onAuthCheckState();
  }

  render() {
    let routes = (
      <Switch>
        <Route path="/Login" exact component={Login} />
        <Route path="/AdminLogin" exact component={AdminLogin} />
        <Route path="/Signup" exact component={Signup} />
        <Route path="/AdminSignup" exact component={AdminSignup} />
        <Route path="/Profile" exact component={Profile} />
      </Switch>
    );

    //des user is admin
    if (this.props.isAuthenticated && this.props.isAdmin) {
      routes = (
        <AdminLayout>
          <Switch>

            <Route path="/something" exact render={()=><h1>This is render</h1> }/>
            <Route path="/Logout" exact component={Logout} />
          </Switch>
        </AdminLayout>
      );
    }

    //des user is student
    if (this.props.isAuthenticated && !this.props.isAdmin) {
      routes = (
        <UserLayout>
          <Switch>
            <Route path="/Profile" exact component={Profile} />
            <Route path="/Logout" exact component={Logout} />
          </Switch>
        </UserLayout>
      );
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
