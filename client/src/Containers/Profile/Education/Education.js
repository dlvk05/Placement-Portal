import React from "react";
import { Row, Col } from "react-bootstrap";
import CurrentModal from "./Current/CurrentModal";

const styles = {
  border: "solid 1px",
  font: "15px Roboto, sans-serif",
  fontSize: "12px",
  display: "block",
  background: "white",
  padding: "5%",
  marginBottom: "30px",
};

class Education extends React.Component {
  render() {
    return (
      <div style={styles}>
        <span id="Current" style={{ fontSize: "20px" }}>Current</span>{" "}
        <span style={{ float: "right", fontSize: "20px" }}>
            <CurrentModal/>
        </span>
        <hr />
        <br />
        <br />
        {/* ^^^ this is where the Current Education subsection starts */}
        <Row>
          <Col xs={5}>
            <span>Branch Name</span> <br/>
            <span>Department</span>
          </Col>
          <Col>
            <span >
              "CGPA: NUMBER.NUMBER"
            </span>
            <br/>
            <span >
              "PERCENTAGE: NUMBER.NUMBER%"
            </span>
          </Col>
        </Row>
        <hr />
        <br />
        
      </div>
    );
  }
}

export default Education;
