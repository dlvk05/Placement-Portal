import React from "react";
import AddProjectsModal from "../../../Containers/Profile/Projects/AddProjects/AddProjectsModal";

const projectsFeed = ({ projects }) => {
  // let editIndividalProjectModal = "Edit";
  // var x = document.getElementById("AddProjectsModal").handleShow()
  // console.log(rootElement.getElementsByClassName(AddProjectsModal));
  // var ele = React.renderComponet(AddProjectsModal);

  var feed = projects.map((currentProject, i) => (
    <div
      key={i}
      style={{
        border: "groove 2px",
        borderRadius: "8px",
        padding: "10px",
        marginBottom: "10px",
        background: "#F8F8FF",
      }}
    >
      <span style={{ fontSize: "19px" }}>{currentProject.Title}</span>
      <br />
      <span>{currentProject.ProjectDomain}</span> <br />
      <span>
        (start Date: {currentProject.StartDate} --- End Date:{" "}
        {currentProject.EndDate})
      </span>
      <br />
      <br />
      <span>{currentProject.Description}</span>
      <br />
      <br />
      <hr />
      <span>
        <AddProjectsModal style={{ size: "10px" }} name="edit" /> |{" "}
        <i className="fas fa-trash-alt fa-lg"> Delete</i>
      </span>
    </div>
  ));
  return feed;
};

export default projectsFeed;
