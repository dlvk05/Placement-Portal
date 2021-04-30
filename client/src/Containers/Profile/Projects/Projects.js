import React from "react";
import AddProjectsModal from "./AddProjects/AddProjectsModal";

const styles = {
  border: "solid 1px",
  font: "15px Roboto, sans-serif",
  fontSize: "12px",
  display: "block",
  background: "white",
  padding: "5%",
  marginBottom: "30px",
};

class Projects extends React.Component {
  render() {
    return (
      <div style={styles}>
        <span id="Projects" style={{ fontSize: "20px" }}>
          Past Projects
        </span>{" "}
        <span style={{ float: "right", fontSize: "20px" }}>
          <AddProjectsModal />
        </span>
        <hr />
        <br />
        <br />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <p>There is currently no content to display</p>
        </div>
      </div>
    );
  }
}

export default Projects;
