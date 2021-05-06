import React from "react";
// import AddProjectsModal from "../../../Containers/Profile/Projects/AddProjects/AddProjectsModal";
import axios from "axios";
import { connect } from "react-redux";
var fileDownload = require("js-file-download");

const projectsFeed = (props) => {
  // let editIndividalProjectModal = "Edit";
  // var x = document.getElementById("AddProjectsModal").handleShow()
  // console.log(rootElement.getElementsByClassName(AddProjectsModal));
  // var ele = React.renderComponet(AddProjectsModal);

  const onFileDownload = (subHeader, fileName) => {
    console.log("onFileDownload called");
    axios({
      url: "/api/downloadFile",
      method: "GET",
      params: {
        folderName: "Profile",
        profileId: props.profileId,
        header: "Projects",
        subHeader: subHeader,
        fileName: fileName,
      },
      responseType: "blob", // Important
    }).then((response) => {
      fileDownload(response.data, fileName);
    });
  };

  let feed = "no data to display";
  if (props.projects != null) {
    feed = props.projects.map((currentProject, i) => (
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
        <br />
        <br />
        <span>
          File:{" "}
          {currentProject.DocumentProvided !== false ? (
            <i class="fas fa-download" onClick={() => onFileDownload(null,currentProject.FileName)}>
              {currentProject.FileName}
            </i>
          ) : (
            "no File"
          )}
        </span>
        <hr />
        <span>
          <i class="fas fa-pen-square fa-lg"> Edit</i>{" "}
          <i className="fas fa-trash-alt fa-lg"> Delete</i>
        </span>
      </div>
    ));
  }
  return feed;
};


const mapStateToProps = (state) => {
  return {
    profileId: state.userAuth.profileId,
  };
};

export default connect(mapStateToProps)(projectsFeed);
