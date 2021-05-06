import React, { Component, Fragment } from "react";
import AdminNavbar from "../../Components/AdminNavbar/AdminNavbar";
class AdminLayout extends Component {
  render() {
    return (
      <Fragment>
        <AdminNavbar/>
          <main>{this.props.children}</main>
      </Fragment>
    );
  }
}

export default AdminLayout;
