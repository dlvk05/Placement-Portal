import React from "react";
// import { Row, Col } from "react-bootstrap";
import ResumesFeed from "../../../Components/ProfileComponents/ResumeFeed/ResumeFeed";
import AddResumesModal from "./AddResumes/AddResumesModal";

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

class Resumes extends React.Component {
  render() {
    return (
      <div style={styles}>
        <span id="Resumes" style={{ fontSize: "20px" }}>
          Resumes
        </span>{" "}
        <span style={{ float: "right", fontSize: "20px" }}>
          <AddResumesModal forceReload={this.props.forceReload} />
        </span>
        <hr />
        <br />
        <br />
        {this.props.data != null ? (
          <ResumesFeed resumes={this.props.data} />
        ) : (
          "there is no data to display"
        )}
        <hr />
      </div>
    );
  }
}

export default Resumes;
