import React from "react";
import { Row, Col } from "react-bootstrap";

const styles = {
  border: "solid 1px",
  font: "15px Roboto, sans-serif",
  fontSize: "12px",
  display: "block",
  background: "white",
  padding: "5%",
  marginBottom: "30px",
};

class Accomplishments extends React.Component {
  render() {
    return (
      <div style={styles}>
        <span id="Awards"style={{ fontSize: "20px" }}>Awards</span>{" "}
        <span style={{ float: "right", fontSize: "20px" }}>
          {/* <OverviewModal /> */}
        </span>
        <hr />
        <br />
        <br />
        <Row>
          <Col xs={2}>
            <span>Title:</span>
          </Col>
          <Col>
            <span >
              "this is where the Title of the Award is supposed to be"
            </span>
          </Col>
        </Row>
        <hr />
        <br />
        <Row>
            <Col xs={2}><span>Issuer:</span></Col>
            <Col><span>"Issuer Name"</span></Col>
        </Row>
        <hr />
        <br />
        <Row>
            <Col xs={2}><span>Issue Date</span></Col>
            <Col><span>"date goes here"</span></Col>
        </Row>
        <hr />
        <br />
        <Row>
            <Col xs={2}><span>Description</span></Col>
            <Col><span>"Description goes here"</span></Col>
        </Row>
        <hr />
        <br />
        <br />
        <br />
        <br />
        {/* ^^^ this is where Certifications start */}
        <span style={{ fontSize: "20px" }} id="Certifications">
          Certifications
        </span>{" "}
        <span style={{ float: "right", fontSize: "20px" }}>
          {/* <ContactDetailsModal /> */}
        </span>
        <hr />
        <br />
        <br />
        <Row>
            <Col xs={2}><span>Title</span></Col>
            <Col><span>"Certification Title goes here"</span></Col>
        </Row>
        <hr />
        <br />
        <Row>
            <Col xs={2}><span>Issuer</span></Col>
            <Col><span>"Issuer name goes here"</span></Col>
        </Row>
        <hr />
        <br />
        <Row>
            <Col xs={2}><span>Certification URL</span></Col>
            <Col><span>"Issuer Certification URL goes here"</span></Col>
        </Row>
        <hr />
        <br />
        <Row>
            <Col xs={2}><span>Certification Date</span></Col>
            <Col><span>"Certification Date goes here"</span></Col>
        </Row>
        <hr />
        <br />
        <Row>
            <Col xs={2}><span>Licence Number</span></Col>
            <Col><span>"Licence Number goes here"</span></Col>
        </Row>
        <hr />
        <br />
        <Row>
            <Col xs={2}><span>Description</span></Col>
            <Col><span>"Description goes here"</span></Col>
        </Row>
        <hr />
        <br />
        <br />
        <br />
        <br />
        {/* ^^^ this is where Competitions start */}
        <span style={{ fontSize: "20px" }} id="Competitions">
          Competition Details
        </span>{" "}
        <span style={{ float: "right", fontSize: "20px" }}>
          {/* <ContactDetailsModal /> */}
        </span>
        <hr />
        <br />
        <br />
        <Row>
            <Col xs={2}><span>Title</span></Col>
            <Col><span>"title Goes here</span></Col>
        </Row>
        <hr />
        <br />
        <Row>
            <Col xs={2}><span>Position</span></Col>
            <Col><span>"position goes here"</span></Col>
        </Row>
        <hr />
        <br />
        <Row>
            <Col xs={2}><span>Competition Date</span></Col>
            <Col><span>"Competition Date goes here"</span></Col>
        </Row>
        <hr />
        <br />
        <Row>
            <Col xs={2}><span>Description</span></Col>
            <Col><span>"Description goes here"</span></Col>
        </Row>
        <hr />
        <br />
        <br />
        <br />
        <br />
        {/* ^^^ this is where Confrences start */}
        <span style={{ fontSize: "20px" }} id="Confrences">
          Confrence Details
        </span>{" "}
        <span style={{ float: "right", fontSize: "20px" }}>
          {/* <ContactDetailsModal /> */}
        </span>
        <hr />
        <br />
        <br />
        <Row>
            <Col xs={2}><span>Title</span></Col>
            <Col><span>"Title goes here</span></Col>
        </Row>
        <hr />
        <br />
        <Row>
            <Col xs={2}><span>Organizer</span></Col>
            <Col><span>"Organizer info goes here</span></Col>
        </Row>
        <hr />
        <br />
        <Row>
            <Col xs={2}><span>Event Date</span></Col>
            <Col><span>"Event Date goes here"</span></Col>
        </Row>
        <hr />
        <br />
        <Row>
            <Col xs={2}><span>Description</span></Col>
            <Col><span>"Description goes here"</span></Col>
        </Row>
        <hr />
        <br />
        <br />
        <br />
        <br />
        {/* ^^^ this is where Test Scores start */}
        <span style={{ fontSize: "20px" }} id="TestScores">
          Test Scores
        </span>{" "}
        <span style={{ float: "right", fontSize: "20px" }}>
          {/* <ContactDetailsModal /> */}
        </span>
        <hr />
        <br />
        <br />
        <Row>
            <Col xs={2}><span>Title</span></Col>
            <Col><span>"Title goes here</span></Col>
        </Row>
        <hr />
        <br />
        <Row>
            <Col xs={2}><span>Score Obtained</span></Col>
            <Col><span>"score obtained goes here"</span></Col>
        </Row>
        <hr />
        <br />
        <Row>
            <Col xs={2}><span>Maximum Possible Score</span></Col>
            <Col><span>"max possible score goes here"</span></Col>
        </Row>
        <hr />
        <br />
        <Row>
            <Col xs={2}><span>Rank Obtained</span></Col>
            <Col><span>"Rank obtained goes here</span></Col>
        </Row>
        <hr />
        <br />
        <Row>
            <Col xs={2}><span>Exam Date</span></Col>
            <Col><span>"exam date goes here"</span></Col>
        </Row>
        <hr />
        <br />
        <Row>
            <Col xs={2}><span>Description</span></Col>
            <Col><span>"Description goes here"</span></Col>
        </Row>
        <hr />
        <br />
        <br />
        <br />
        <br />
        {/* ^^^ this is where Publications start */}
        <span style={{ fontSize: "20px" }} id="Publications">
        Publications
        </span>{" "}
        <span style={{ float: "right", fontSize: "20px" }}>
          {/* <ContactDetailsModal /> */}
        </span>
        <hr />
        <br />
        <br />
        <Row>
            <Col xs={2}><span>Title</span></Col>
            <Col><span>"title goes here"</span></Col>
        </Row>
        <hr />
        <br />
        <Row>
            <Col xs={2}><span>Publisher</span></Col>
            <Col><span>"Publisher Info goes here"</span></Col>
        </Row>
        <hr />
        <br />
        <Row>
            <Col xs={2}><span>Publication Date</span></Col>
            <Col><span>"publication date goes here</span></Col>
        </Row>
        <hr />
        <br />
        <Row>
            <Col xs={2}><span>Publication URL</span></Col>
            <Col><span>"publication url goes here"</span></Col>
        </Row>
        <hr />
        <br />
        <Row>
            <Col xs={2}><span>Description</span></Col>
            <Col><span>"description goes here"</span></Col>
        </Row>
        <hr />
        <br />
        <br />
        <br />
        <br />
        {/* ^^^ this is where Scholarships start */}
        <span style={{ fontSize: "20px" }} id="Scholarships">
            Scholarships
        </span>{" "}
        <span style={{ float: "right", fontSize: "20px" }}>
          {/* <ContactDetailsModal /> */}
        </span>
        <hr />
        <br />
        <br />
        <Row>
            <Col xs={2}><span>Title</span></Col>
            <Col><span>"title goes here"</span></Col>
        </Row>
        <hr />
        <br />
        <Row>
            <Col xs={2}><span>Grant Date</span></Col>
            <Col><span>"Grant date goes here</span></Col>
        </Row>
        <hr />
        <br />
        <Row>
            <Col xs={2}><span>Description</span></Col>
            <Col><span>"description goes here"</span></Col>
        </Row>
        <hr />
        <br />
      </div>
    );
  }
}

export default Accomplishments;
