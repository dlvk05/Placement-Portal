import React from "react";
import AddTechnicalSkillsModal from "./AddTechnicalSkillsModal/AddTechnicalSkillsModal";
// import { Row, Col } from "react-bootstrap";
// import AddWorkExperienceModal from "./AddWorkExperience/AddWorkExperienceModal";

const styles = {
  border: "solid 1px",
  font: "15px Roboto, sans-serif",
  fontSize: "12px",
  display: "block",
  background: "white",
  padding: "5%",
  marginBottom: "30px",
};

class TechnicalSkills extends React.Component{

  render(){
    return(
        <div style={styles}>
        <span id="TechnicalSkills"style={{ fontSize: "20px" }}>Technical Skills</span>{" "}
        <span style={{ float: "right", fontSize: "20px" }}>
            <AddTechnicalSkillsModal/>
        </span>
        <hr />
        <br />
        <br />
        <div style={{display: "flex", justifyContent: "center"}}><p>There is currently no content to display</p></div>
        </div>
    );
  }
}

export default TechnicalSkills;