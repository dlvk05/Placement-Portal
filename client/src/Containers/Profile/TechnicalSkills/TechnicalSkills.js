import React from "react";
import TechnicalSkillsFeed from "../../../Components/ProfileComponents/TechnicalSkillsFeed/TechnicalSkillsFeed";
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
  borderRadius: "10px"
};

class TechnicalSkills extends React.Component{
  state={
    TechnicalSkills: [
      {
        Skill: "React",
        Proficiency: "Advanced",
        DocumentProvided: {
          type: Boolean,
          default: false,
        },
        FileName: String,
        // FileLocation: String,
      },
    ]
  }

  render(){
    return(
        <div style={styles}>
        <span id="TechnicalSkills"style={{ fontSize: "20px" }}>Technical Skills</span>{" "}
        <span style={{ float: "right", fontSize: "20px" }}>
            <AddTechnicalSkillsModal name="Add Skills"/>
        </span>
        <hr />
        <br />
        <br />
        {this.state.TechnicalSkills!==""?<TechnicalSkillsFeed technicalSkills={this.state.TechnicalSkills}/>:"there are no skills to display"}
        </div>
    );
  }
}

export default TechnicalSkills;