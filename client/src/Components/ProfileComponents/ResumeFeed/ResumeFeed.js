import React from "react";
import { Row, Col } from "react-bootstrap";
import axios from "axios";
import { connect } from "react-redux";
var fileDownload = require("js-file-download");

const resumesFeed = (props) => {

  const onFileDownload = (subHeader, fileName) => {
    console.log("onFileDownload called");
    axios({
      url: "/api/downloadFile",
      method: "GET",
      params: {
        folderName: "Profile",
        profileId: props.profileId,
        header: "Resumes",
        subHeader: subHeader,
        fileName: fileName,
      },
      responseType: "blob", // Important
    }).then((response) => {
      fileDownload(response.data, fileName);
    });
  };



  let feed = "there is no data to display";
  if (props.resumes != null) {
    feed = props.resumes.map((currentResume, i) => (
      <div key={i}>
        <Row>
          <Col xs={2}>
            <span>
              <i class="fas fa-file-pdf fa-4x"></i>
            </span>
          </Col>
          <Col>
            <span style={{ fontSize: "20px" }}>
            <i class="fas fa-download" onClick={() => onFileDownload(null,currentResume.DocumentName)}>{currentResume.DocumentName}</i>
            </span>
            <br />
            <span>{currentResume.dateOfCreation}</span>
          </Col>
          <Col xs={2}>
            <span>
              <i
                class="fas fa-pencil-alt fa-2x"
              ></i>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <i class="fas fa-trash-alt fa-2x"></i>
            </span>
          </Col>
        </Row>
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

export default connect(mapStateToProps)(resumesFeed);
