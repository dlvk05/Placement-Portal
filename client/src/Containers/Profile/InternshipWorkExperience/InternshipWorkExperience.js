import React from "react";
// import { Row, Col } from "react-bootstrap";
import AddWorkExperienceModal from "./AddWorkExperience/AddWorkExperienceModal";

const styles = {
  border: "solid 1px",
  font: "15px Roboto, sans-serif",
  fontSize: "12px",
  display: "block",
  background: "white",
  padding: "5%",
  marginBottom: "30px",
};

class InternshipWorkExperience extends React.Component{

  render(){
    return(
        <div style={styles}>
        <span id="InternshipWorkExp"style={{ fontSize: "20px" }}>Internships & Work Experience</span>{" "}
        <span style={{ float: "right", fontSize: "20px" }}>
          <AddWorkExperienceModal/>
        </span>
        <hr />
        <br />
        <br />
        <div style={{display: "flex", justifyContent: "center"}}><p>There is currently no content to display</p></div>
        </div>
    );
  }
}

export default InternshipWorkExperience;