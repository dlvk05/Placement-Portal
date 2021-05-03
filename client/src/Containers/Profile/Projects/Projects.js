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
};



class Projects extends React.Component {
  state={
    projects: [
     {
       Title: "lol",
       ProjectDomain: "Machine Learning",
       StartDate: "20-5-2021",
       EndDate: "30-5-2021",
       Description: "pee pee poo poo ",
       DocumentProvided: {
         type: Boolean,
         default: false,
       },
       FileName: String,
       // FileLocation: String,
     },
     {
       Title: "project 2",
       ProjectDomain: "Web Dev",
       StartDate: "20-12-2021",
       EndDate: "30-12-2021",
       Description: "this is supposed to be a long ass description",
       DocumentProvided: {
         type: Boolean,
         default: false,
       },
       FileName: String,
       // FileLocation: String,
     }
   ]
  }
  
  render() {
    return (
      <div style={styles}>
        <span id="Projects" style={{ fontSize: "20px" }}>
          Past Projects
        </span>{" "}
        <span style={{ float: "right", fontSize: "20px" }}>
          <AddProjectsModal name="Add New Project"/>
        </span>
        <hr />
        <br />
        <br />        
        <ProjectsFeed projects={this.state.projects}/>
      </div>
    );
  }
}

export default Projects;
