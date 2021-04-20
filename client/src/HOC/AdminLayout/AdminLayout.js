import React, { Component } from "react";

class AdminLayout extends Component {
  render() {
    return <main>{this.props.children}</main>;
  }
}


export default AdminLayout;