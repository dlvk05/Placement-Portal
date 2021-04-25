import React from "react";
import { Row, Col, Table } from "react-bootstrap";
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
        <Row>
          <Col xs="2">Semester wise scores</Col>
        </Row>
        <Table>
          <thead>
            <tr>
              <th>Semester</th>
              <th>1</th>
              <th>2</th>
              <th>3</th>
              <th>4</th>
              <th>5</th>
              <th>6</th>
            </tr>
          </thead>
          <tr>
            <td>CGPA</td>
            <td>num1</td>
            <td>num2</td>
            <td>num3</td>
            <td>num4</td>
            <td>num5</td>
            <td>num6</td>
          </tr>
          <tr>
            <td>SGPA</td>
            <td>num1</td>
            <td>num2</td>
            <td>num3</td>
            <td>num4</td>
            <td>num5</td>
            <td>num6</td>
          </tr>
          <tr>
            <td>Ongoing Backlogs</td>
            <td>num</td>
            <td>num</td>
            <td>num</td>
            <td>num</td>
            <td>num</td>
            <td>num</td>
          </tr>
          <tr>
            <td>Total Backlogs</td>
            <td>num</td>
            <td>num</td>
            <td>num</td>
            <td>num</td>
            <td>num</td>
            <td>num</td>
          </tr>
        </Table>
      </div>
    );
  }
}

export default Education;
