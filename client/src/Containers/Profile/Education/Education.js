import React from "react";
import { Row, Col, Table } from "react-bootstrap";
import CurrentModal from "./Current/CurrentModal";
import XClassModal from "./XClass/XClassModal";
import XIIClassModal from "./XIIClass/XIIClassModal";
import axios from "axios";
import { connect } from "react-redux";
var fileDownload = require("js-file-download");

const styles = {
  border: "solid 1px",
  font: "15px Roboto, sans-serif",
  fontSize: "12px",
  display: "block",
  background: "white",
  padding: "5%",
  marginBottom: "30px",
  borderRadius: "10px",
};

class Education extends React.Component {
  onFileDownload = (subHeader, fileName) => {
    axios({
      url: "/api/downloadFile",
      method: "GET",
      params: {
        folderName: "Profile",
        profileId: this.props.profileId,
        header: "Education",
        subHeader: subHeader,
        fileName: fileName,
      },
      responseType: "blob", // Important
    }).then((response) => {
      fileDownload(response.data, fileName);
    });
  };

  render() {
    console.log(this.props.data);
    return (
      <div style={styles}>
        <span id="Current" style={{ fontSize: "20px" }}>
          Current
        </span>{" "}
        <span style={{ float: "right", fontSize: "20px" }}>
          <CurrentModal forceReload={this.props.forceReload} />
        </span>
        <hr />
        <br />
        <br />
        {/* ^^^ this is where the Current Education subsection starts */}
        <Row>
          <Col xs={5}>
            <span>
              Semester:{" "}
              {this.props.data.Current != null
                ? this.props.data.Current.CurrentSemester
                : "not known"}
            </span>{" "}
            <br />
            <span>
              Registration Number:{" "}
              {this.props.data.Current != null
                ? this.props.data.Current.RegNo
                : "not known"}
            </span>{" "}
            <br />
            <span>
              Department:{" "}
              {this.props.data.Current != null
                ? this.props.data.Current.Department
                : "not known"}
            </span>{" "}
            <br />
            <span>
              Programme:{" "}
              {this.props.data.Current != null
                ? this.props.data.Current.Programme
                : "not known"}
            </span>{" "}
            <br />
            <span>
              Start Date:{" "}
              {this.props.data.Current != null &&
              this.props.data.Current.Performance.length > 0
                ? this.props.data.Current.StartDate.slice(0, 10)
                : "not known"}{" "}
              -- End Date:{" "}
              {this.props.data.Current != null &&
              this.props.data.Current.Performance.length > 0
                ? this.props.data.Current.EndDate.slice(0, 10)
                : "not known"}
            </span>{" "}
            <br />
          </Col>
          <Col>
            <span style={{ fontSize: "25px" }}>
              CGPA:{" "}
              {this.props.data.Current != null
                ? this.props.data.Current.CGPAScore
                : "not known"}
            </span>
            <br />
            <span style={{ fontSize: "25px" }}>
              PERCENTAGE:{" "}
              {this.props.data.Current != null
                ? this.props.data.Current.PercentageScore
                : "not known"}
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
            <td>
              {this.props.data.Current != null &&
              this.props.data.Current.Performance.length > 0
                ? this.props.data.Current.Performance[0].CGPA
                : ""}
            </td>
            <td>
              {this.props.data.Current != null &&
              this.props.data.Current.Performance.length > 0
                ? this.props.data.Current.Performance[1].CGPA
                : ""}
            </td>
            <td>
              {this.props.data.Current != null &&
              this.props.data.Current.Performance.length > 0
                ? this.props.data.Current.Performance[2].CGPA
                : ""}
            </td>
            <td>
              {this.props.data.Current != null &&
              this.props.data.Current.Performance.length > 0
                ? this.props.data.Current.Performance[3].CGPA
                : ""}
            </td>
            <td>
              {this.props.data.Current != null &&
              this.props.data.Current.Performance.length > 0
                ? this.props.data.Current.Performance[4].CGPA
                : ""}
            </td>
            <td>
              {this.props.data.Current != null &&
              this.props.data.Current.Performance.length > 0
                ? this.props.data.Current.Performance[5].CGPA
                : ""}
            </td>
            <td>
              {this.props.data.Current != null &&
              this.props.data.Current.Performance.length > 0
                ? this.props.data.Current.Performance[6].CGPA
                : ""}
            </td>
            <td>
              {this.props.data.Current != null &&
              this.props.data.Current.Performance.length > 0
                ? this.props.data.Current.Performance[7].CGPA
                : ""}
            </td>
          </tr>
          <tr>
            <td>SGPA</td>
            <td>
              {this.props.data.Current != null &&
              this.props.data.Current.Performance.length > 0
                ? this.props.data.Current.Performance[0].SGPA
                : ""}
            </td>
            <td>
              {this.props.data.Current != null &&
              this.props.data.Current.Performance.length > 0
                ? this.props.data.Current.Performance[1].SGPA
                : ""}
            </td>
            <td>
              {this.props.data.Current != null &&
              this.props.data.Current.Performance.length > 0
                ? this.props.data.Current.Performance[2].SGPA
                : ""}
            </td>
            <td>
              {this.props.data.Current != null &&
              this.props.data.Current.Performance.length > 0
                ? this.props.data.Current.Performance[3].SGPA
                : ""}
            </td>
            <td>
              {this.props.data.Current != null &&
              this.props.data.Current.Performance.length > 0
                ? this.props.data.Current.Performance[4].SGPA
                : ""}
            </td>
            <td>
              {this.props.data.Current != null &&
              this.props.data.Current.Performance.length > 0
                ? this.props.data.Current.Performance[5].SGPA
                : ""}
            </td>
            <td>
              {this.props.data.Current != null &&
              this.props.data.Current.Performance.length > 0
                ? this.props.data.Current.Performance[6].SGPA
                : ""}
            </td>
            <td>
              {this.props.data.Current != null &&
              this.props.data.Current.Performance.length > 0
                ? this.props.data.Current.Performance[7].SGPA
                : ""}
            </td>
          </tr>
          <tr>
            <td>Ongoing Backlogs</td>
            <td>
              {this.props.data.Current != null &&
              this.props.data.Current.Performance.length > 0
                ? this.props.data.Current.Performance[0].BacklogOngoing
                : ""}
            </td>
            <td>
              {this.props.data.Current != null &&
              this.props.data.Current.Performance.length > 0
                ? this.props.data.Current.Performance[1].BacklogOngoing
                : ""}
            </td>
            <td>
              {this.props.data.Current != null &&
              this.props.data.Current.Performance.length > 0
                ? this.props.data.Current.Performance[2].BacklogOngoing
                : ""}
            </td>
            <td>
              {this.props.data.Current != null &&
              this.props.data.Current.Performance.length > 0
                ? this.props.data.Current.Performance[3].BacklogOngoing
                : ""}
            </td>
            <td>
              {this.props.data.Current != null &&
              this.props.data.Current.Performance.length > 0
                ? this.props.data.Current.Performance[4].BacklogOngoing
                : ""}
            </td>
            <td>
              {this.props.data.Current != null &&
              this.props.data.Current.Performance.length > 0
                ? this.props.data.Current.Performance[5].BacklogOngoing
                : ""}
            </td>
            <td>
              {this.props.data.Current != null &&
              this.props.data.Current.Performance.length > 0
                ? this.props.data.Current.Performance[6].BacklogOngoing
                : ""}
            </td>
            <td>
              {this.props.data.Current != null &&
              this.props.data.Current.Performance.length > 0
                ? this.props.data.Current.Performance[7].BacklogOngoing
                : ""}
            </td>
          </tr>
          <tr>
            <td>Total Backlogs</td>
            <td>
              {this.props.data.Current != null &&
              this.props.data.Current.Performance.length > 0
                ? this.props.data.Current.Performance[0].BacklogTotal
                : ""}
            </td>
            <td>
              {this.props.data.Current != null &&
              this.props.data.Current.Performance.length > 0
                ? this.props.data.Current.Performance[1].BacklogTotal
                : ""}
            </td>
            <td>
              {this.props.data.Current != null &&
              this.props.data.Current.Performance.length > 0
                ? this.props.data.Current.Performance[2].BacklogTotal
                : ""}
            </td>
            <td>
              {this.props.data.Current != null &&
              this.props.data.Current.Performance.length > 0
                ? this.props.data.Current.Performance[3].BacklogTotal
                : ""}
            </td>
            <td>
              {this.props.data.Current != null &&
              this.props.data.Current.Performance.length > 0
                ? this.props.data.Current.Performance[4].BacklogTotal
                : ""}
            </td>
            <td>
              {this.props.data.Current != null &&
              this.props.data.Current.Performance.length > 0
                ? this.props.data.Current.Performance[5].BacklogTotal
                : ""}
            </td>
            <td>
              {this.props.data.Current != null &&
              this.props.data.Current.Performance.length > 0
                ? this.props.data.Current.Performance[6].BacklogTotal
                : ""}
            </td>
            <td>
              {this.props.data.Current != null &&
              this.props.data.Current.Performance.length > 0
                ? this.props.data.Current.Performance[7].BacklogTotal
                : ""}
            </td>
          </tr>
          <tr>
            <td>Files</td>
            <td>
              {this.props.data.Current != null &&
              this.props.data.Current.Performance.length > 0 &&
              this.props.data.Current.Performance[0].MarksheetProvided !==
                false ? (
                <i
                  class="fas fa-download"
                  onClick={() =>
                    this.onFileDownload(
                      "Current",
                      this.props.data.Current.Performance[0].FileName
                    )
                  }
                ></i>
              ) : (
                "No File"
              )}
            </td>
            <td>
              {this.props.data.Current != null &&
              this.props.data.Current.Performance.length > 0 &&
              this.props.data.Current.Performance[1].MarksheetProvided !==
                false ? (
                <i
                  class="fas fa-download"
                  onClick={() =>
                    this.onFileDownload(
                      "Current",
                      this.props.data.Current.Performance[1].FileName
                    )
                  }
                ></i>
              ) : (
                "No File"
              )}
            </td>
            <td>
              {this.props.data.Current != null &&
              this.props.data.Current.Performance.length > 0 &&
              this.props.data.Current.Performance[2].MarksheetProvided !==
                false ? (
                <i
                  class="fas fa-download"
                  onClick={() =>
                    this.onFileDownload(
                      "Current",
                      this.props.data.Current.Performance[2].FileName
                    )
                  }
                ></i>
              ) : (
                "No File"
              )}
            </td>
            <td>
              {this.props.data.Current != null &&
              this.props.data.Current.Performance.length > 0 &&
              this.props.data.Current.Performance[3].MarksheetProvided !==
                false ? (
                <i
                  class="fas fa-download"
                  onClick={() =>
                    this.onFileDownload(
                      "Current",
                      this.props.data.Current.Performance[3].FileName
                    )
                  }
                ></i>
              ) : (
                "No File"
              )}
            </td>
            <td>
              {this.props.data.Current != null &&
              this.props.data.Current.Performance.length > 0 &&
              this.props.data.Current.Performance[4].MarksheetProvided !==
                false ? (
                <i
                  class="fas fa-download"
                  onClick={() =>
                    this.onFileDownload(
                      "Current",
                      this.props.data.Current.Performance[4].FileName
                    )
                  }
                ></i>
              ) : (
                "No File"
              )}
            </td>
            <td>
              {this.props.data.Current != null &&
              this.props.data.Current.Performance.length > 0 &&
              this.props.data.Current.Performance[5].MarksheetProvided !==
                false ? (
                <i
                  class="fas fa-download"
                  onClick={() =>
                    this.onFileDownload(
                      "Current",
                      this.props.data.Current.Performance[5].FileName
                    )
                  }
                ></i>
              ) : (
                "No File"
              )}
            </td>
            <td>
              {this.props.data.Current != null &&
              this.props.data.Current.Performance.length > 0 &&
              this.props.data.Current.Performance[6].MarksheetProvided !==
                false ? (
                <i
                  class="fas fa-download"
                  onClick={() =>
                    this.onFileDownload(
                      "Current",
                      this.props.data.Current.Performance[6].FileName
                    )
                  }
                ></i>
              ) : (
                "No File"
              )}
            </td>
            <td>
              {this.props.data.Current != null &&
              this.props.data.Current.Performance.length > 0 &&
              this.props.data.Current.Performance[7].MarksheetProvided !==
                false ? (
                <i
                  class="fas fa-download"
                  onClick={() =>
                    this.onFileDownload(
                      "Current",
                      this.props.data.Current.Performance[7].FileName
                    )
                  }
                ></i>
              ) : (
                "No File"
              )}
            </td>
          </tr>
        </Table>
        <br />
        <br />
        <br />
        <br />
        <span id="ClassXII" style={{ fontSize: "20px" }}>
          XII <sup>th</sup> Class / Equivalent
        </span>{" "}
        <span style={{ float: "right", fontSize: "20px" }}>
          <XIIClassModal forceReload={this.props.forceReload} />
        </span>
        <hr />
        <br />
        <Row>
          <Col>
            School Name:
            {this.props.data.Class12th != null &&
            this.props.data.Class12th.School !== undefined
              ? this.props.data.Class12th.School
              : "no data"}
            <br />
            Board:
            {this.props.data.Class12th != null &&
            this.props.data.Class12th.Board !== undefined
              ? this.props.data.Class12th.Board
              : "no data"}
            <br />
            Branch:
            {this.props.data.Class12th != null &&
            this.props.data.Class12th.Branch !== undefined
              ? this.props.data.Class12th.Branch
              : "no data"}
            <br />
            start Date:
            {this.props.data.Class12th != null &&
            this.props.data.Class12th.StartDate !== undefined
              ? this.props.data.Class12th.StartDate.slice(0, 10)
              : "no data"}
            --- End Date:
            {this.props.data.Class12th != null &&
            this.props.data.Class12th.EndDate !== undefined
              ? this.props.data.Class12th.EndDate.slice(0, 10)
              : "no data"}
            <br />
            File:{" "}
            {this.props.data.Class12th != null &&
            this.props.data.Class12th.MarksheetProvided !== false ? (
              <span
                onClick={() =>
                  this.onFileDownload(
                    "Class12th",
                    this.props.data.Class12th.FileName
                  )
                }
              >
                {this.props.data.Class12th.FileName}
              </span>
            ) : (
              "no file"
            )}
          </Col>
          <Col style={{ fontSize: "25px" }}>
            Score:{" "}
            {this.props.data.Class12th != null &&
            this.props.data.Class12th.Score !== undefined
              ? this.props.data.Class12th.Score
              : "no data"}
          </Col>
        </Row>
        <br />
        <br />
        <br />
        <br />
        <span id="ClassX" style={{ fontSize: "20px" }}>
          X <sup>th</sup> Class / Equivalent
        </span>{" "}
        <span style={{ float: "right", fontSize: "20px" }}>
          <XClassModal forceReload={this.props.forceReload} />
        </span>
        <hr />
        <br />
        <Row>
          <Col>
            School Name:
            {this.props.data.Class10th != null &&
            this.props.data.Class10th.School !== undefined
              ? this.props.data.Class10th.School
              : "no data"}
            <br />
            Board:
            {this.props.data.Class10th != null &&
            this.props.data.Class10th.Board !== undefined
              ? this.props.data.Class10th.Board
              : "no data"}
            <br />
            Start Date:
            {this.props.data.Class10th != null &&
            this.props.data.Class10th.StartDate !== undefined
              ? this.props.data.Class10th.StartDate.slice(0, 10)
              : "no data"}
            --- End Date:
            {this.props.data.Class10th != null &&
            this.props.data.Class10th.EndDate !== undefined
              ? this.props.data.Class10th.EndDate.slice(0, 10)
              : "no data"}
            <br />
            File:{" "}
            {this.props.data.Class10th != null &&
            this.props.data.Class10th.MarksheetProvided !== false ? (
              <span
                onClick={() =>
                  this.onFileDownload(
                    "Class10th",
                    this.props.data.Class10th.FileName
                  )
                }
              >
                {this.props.data.Class12th.FileName}
              </span>
            ) : (
              "no file"
            )}
          </Col>
          <Col style={{ fontSize: "25px" }}>
            Score:
            {this.props.data.Class10th != null &&
            this.props.data.Class10th.Score !== undefined
              ? this.props.data.Class10th.Score
              : "no data"}
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    profileId: state.userAuth.profileId,
  };
};

export default connect(mapStateToProps)(Education);
