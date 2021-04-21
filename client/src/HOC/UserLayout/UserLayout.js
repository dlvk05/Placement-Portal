import React, { Component, Fragment } from "react";
import UserNavbar from "../../Components/UserNavbar/UserNavbar";
class UserLayout extends Component {
  render() {
    return (
      <Fragment>
        <UserNavbar />
        <main>{this.props.children}</main>
      </Fragment>
    );
  }
}

export default UserLayout;
