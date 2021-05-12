import React, { Component } from "react";
import AdminUpdatesFeed from "../../Components/AdminUpdatesFeed/AdminUpdatesFeed";
import axios from "axios";

class StudentUpdates extends Component {
  state = {
    updates: [],
  };

  forceReload = () => {
    axios
      .get("/api/updates/getAllUpdates")
      .then((res) => {
        console.log("updates loaded");
        console.log(res.data.updates);
        this.setState({
          updates: res.data.updates,
        });
      })
      .catch((err) => {
        console.log("error ocurred at /api/updates/getAllUpdates");
        console.log(err);
      });
  };

  componentDidMount() {
    axios
      .get("/api/updates/getAllUpdates")
      .then((res) => {
        console.log("updates loaded");
        console.log(res.data.updates);
        this.setState({
          updates: res.data.updates,
        });
      })
      .catch((err) => {
        console.log("error ocurred at /api/updates/getAllUpdates");
        console.log(err);
      });
  }

  render() {
    return <AdminUpdatesFeed data={this.state.updates} forceReload={this.forceReload}/>;
  }
}

export default StudentUpdates;
