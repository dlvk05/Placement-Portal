import React, { Component } from "react";

class UserLayout extends Component {
  render() {
    return <main>{this.props.children}</main>;
  }
}


export default UserLayout;
