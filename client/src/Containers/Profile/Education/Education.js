import React from "react";
import { Row, Col, Table } from "react-bootstrap";
import CurrentModal from "./Current/CurrentModal";
import XClassModal from "./XClass/XClassModal";
import XIIClassModal from "./XIIClass/XIIClassModal";

const styles = {
  border: "solid 1px",
  font: "15px Roboto, sans-serif",
  fontSize: "12px",
  display: "block",
  background: "white",
  padding: "5%",
  marginBottom: "30px",
  borderRadius: "10px"
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
            <span>Semester: {this.props.Current!=null?this.props.data.CurrentSemester:"not known"}</span> <br/>
            <span>Registration Number: {this.props.Current!=null?this.props.data.RegNo:"not known"}</span> <br/>
            <span>Department: {this.props.Current!=null?this.props.data.Department:"not known"}</span> <br/>
            <span>Programme: {this.props.Current!=null?this.props.data.Programme:"not known"}</span> <br/>
            <span>Start Date: {this.props.Current!=null?this.props.data.StartDate:"not known"}-- End Date: {this.props.Current!=null?this.props.data.EndDate:"not known"}</span> <br/>
          </Col>
          <Col>
            <span style={{fontSize: "25px"}}>
              CGPA: {this.props.Current!=null?this.props.data.CGPAScore:"not known"}
            </span>
            <br/>
            <span style={{fontSize: "25px"}}>
              PERCENTAGE: {this.props.Current!=null?this.props.data.PercentageScore:"not known"}
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
              <th>7</th>
              <th>8</th>
            </tr>
          </thead>
          <tr>
            {/* {console.log(this.props.data.Current.Performance.[0].CGPA)} */}
            <td>CGPA</td>
            <td>num1 {/* {this.props.data.Current.Performance[0].CGPA} */}</td>
            <td>num2</td>
            <td>num3</td>
            <td>num4</td>
            <td>num5</td>
            <td>num6</td>
            <td>num7</td>
            <td>num8</td>
          </tr>
          <tr>
            <td>SGPA</td>
            <td>num9</td>
            <td>num10</td>
            <td>num11</td>
            <td>num12</td>
            <td>num13</td>
            <td>num14</td>
            <td>num15</td>
            <td>num16</td>
          </tr>
          <tr>
            <td>Ongoing Backlogs</td>
            <td>num</td>
            <td>num</td>
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
            <td>num</td>
            <td>num</td>
          </tr>
        </Table>
        <br/>
        <br/>
        <br/>
        <br/>
        <span id="ClassXII" style={{ fontSize: "20px" }}>XII <sup>th</sup> Class / Equivalent</span>{" "}
        <span style={{ float: "right", fontSize: "20px" }}>
            <XIIClassModal forceReload={this.props.forceReload}/>
        </span>
        <hr/>
        <br/>
        <Row>
          <Col>
            school Name: {this.props.Class12th!=null?this.props.data.School: "no data"} <br/>
            Board: {this.props.Class12th!=null?this.props.data.Board: "no data"} <br/>
            Subjects: {this.props.Class12th!=null?this.props.data.Branch: "no data"} <br/>
            start Date: {this.props.Class12th!=null?this.props.data.StartDate: "no data"} --- End Date: {this.props.Class12th!=null?this.props.data.EndDate: "no data"}<br/>
          </Col>
          <Col style={{fontSize: "25px"}}>
            Score: {this.props.Class12th!=null?this.props.data.Score: "no data"}
          </Col>
        </Row>
        <br/>
        <br/>
        <br/>
        <br/>
        <span id="ClassX" style={{ fontSize: "20px" }}>X <sup>th</sup> Class / Equivalent</span>{" "}
        <span style={{ float: "right", fontSize: "20px" }}>
            <XClassModal/>
        </span>
        <hr/>
        <br/>
        <Row>
          <Col>
            School Name: {this.props.Class10th!=null?this.props.data.School: "no data"} <br/>
            Board: {this.props.Class10th!=null?this.props.data.Board: "no data"}<br/>
            Start Date: {this.props.Class10th!=null?this.props.data.StartDate: "no data"} --- End Date: {this.props.Class10th!=null?this.props.data.EndDate: "no data"} <br/>
          </Col>
          <Col style={{fontSize: "25px"}}>
            Score: {this.props.Class10th!=null?this.props.data.Score: "no data"}
          </Col>
        </Row>
      </div>
    );
  }
}

export default Education;
