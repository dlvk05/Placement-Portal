import React from "react";
import AddProjectsModal from "./AddProjects/AddProjectsModal";
import ProjectsFeed from "../../../Components/ProfileComponents/ProjectsFeed/ProjectsFeed";

const styles = {
  border: "solid 1px",
  font: "15px Roboto, sans-serif",
  fontSize: "12px",
  display: "block",
  background: "white",
  padding: "5%",
  marginBottom: "30px",
  borderRadius: "10px"
};



class Projects extends React.Component {
  render() {
    return (
      <div style={styles}>
        <span id="Projects" style={{ fontSize: "20px" }}>
          Past Projects
        </span>{" "}
        <span style={{ float: "right", fontSize: "20px" }}>
          <AddProjectsModal name="Add New Project" forceReload={this.props.forceReload}/>
        </span>
        <hr />
        <br />
        <br />        
        {this.props.data!=null?<ProjectsFeed projects={this.props.data}/>:"no data to display"}
      </div>
    );
  }
}

export default Projects;
