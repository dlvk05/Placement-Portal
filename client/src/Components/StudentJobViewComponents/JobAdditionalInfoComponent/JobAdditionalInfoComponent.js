import React from "react";
import styles from "./JobAdditionalInfoComponent.module.css";
import axios from "axios";

var fileDownload = require("js-file-download");
const jobAdditionalInfoComponent = (props) => {
  const data = {
    JobProfileTitle: props.jobProfileTitle,
    JobSector: props.jobSector,
    Dream: props.dream,
    PositionType: props.positionType,
    ApplicationDeadLine: props.applicationDeadLine,
    AttachedDocuments: [{ DocumentName: props.attachedDocuments }],
  };

  const onFileDownload = () => {
    console.log("onFileDownload called");

    axios({
      url: "/api/student/jobProfile/downloadFile",
      method: "GET",
      params: {
        jobProfileID: props.jobProfileID,
        fileName:  props.attachedDocuments,
      },
      responseType: "blob", // Important
    }).then((response) => {
      fileDownload(response.data,  props.attachedDocuments);
    });
  };

  // console.log(props);
  return (
    <div className={styles.additionalInfoDiv}>
      <h5>Additional Information</h5>
      <hr />
      <div>
        <b>Job Profile</b> : {data.JobProfileTitle}{" "}
      </div>
      <div>
        <b>Job Sector</b> : {data.JobSector}{" "}
      </div>
      <div>
        <b>Dream Job</b> : {data.Dream ? "Yes" : "No"}{" "}
      </div>
      <div>
        <b>Position Type</b> : {data.PositionType}{" "}
      </div>
      <div>
        <b>Application Deadline</b> : {data.ApplicationDeadLine}{" "}
      </div>
      <hr />
      <br />
      <h5>Attached Documents</h5>
      <hr />
      <div>
        <span onClick={onFileDownload}><b>File</b> : {data.AttachedDocuments[0].DocumentName}{" "}</span>
      </div>
    </div>
  );
};

export default jobAdditionalInfoComponent;
