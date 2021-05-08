import React, { Component } from "react";
import UpdatesFeed from "../../Components/UpdatesFeed/UpdatesFeed";
import axios from "axios";

class StudentUpdates extends Component {
  state = {
    updates: [],
  };

  componentDidMount() {
    axios
      .get("/api/student/updates/getAllUpdates")
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
    return <UpdatesFeed data={this.state.updates} />;
  }
}

export default StudentUpdates;
