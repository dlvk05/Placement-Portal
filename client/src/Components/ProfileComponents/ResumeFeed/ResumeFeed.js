import React from "react";
import { Row, Col } from "react-bootstrap";

const resumesFeed = (props) => {
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
            <span style={{ fontSize: "20px" }} onClick={() => alert("Resume Clicked")}>
            {currentResume.DocumentName}
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

export default resumesFeed;
