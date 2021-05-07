import React from "react";
// import AddTechnicalSkillsModal from "../../../Containers/Profile/TechnicalSkills/AddTechnicalSkillsModal/AddTechnicalSkillsModal";
import axios from "axios";
import { connect } from "react-redux";
var fileDownload = require("js-file-download");

const technicalSkillsFeed = (props) => {
  const onFileDownload = (subHeader, fileName) => {
    console.log("onFileDownload called");
    axios({
      url: "/api/downloadFile",
      method: "GET",
      params: {
        folderName: "Profile",
        profileId: props.profileId,
        header: "TechnicalSkills",
        subHeader: subHeader,
        fileName: fileName,
      },
      responseType: "blob", // Important
    }).then((response) => {
      fileDownload(response.data, fileName);
    });
  };

  let feed = "nothing to display";
  if (props.technicalSkills != null) {
    feed = props.technicalSkills.map((currentSkill, i) => (
      <div
        style={{
          border: "groove 2px",
          borderRadius: "8px",
          padding: "10px",
          marginBottom: "10px",
          background: "#F8F8FF",
        }}
      >
        <span style={{ fontSize: "19px" }}>{currentSkill.Skill}</span>
        <br />
        <span>{currentSkill.Proficiency}</span> <br />
        <br />
        <br />
        <br />
        <span>
          File:{" "}
          {currentSkill.DocumentProvided !== false ? (
            <i
              class="fas fa-download"
              onClick={() => onFileDownload(null, currentSkill.FileName)}
            >
              {" "}
              {currentSkill.FileName}{" "}
            </i>
          ) : (
            "no File"
          )}
        </span>
        <hr />
        <span>
          <i class="fas fa-pen-square fa-lg"> Edit</i> |{" "}
          <i class="fas fa-trash-alt fa-lg"> Delete</i>
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

export default connect(mapStateToProps)(technicalSkillsFeed);
