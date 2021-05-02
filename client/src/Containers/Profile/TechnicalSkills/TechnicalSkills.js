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
        <div style={{border: "groove 2px", borderRadius:"8px",padding:"10px", marginBottom:"10px", background:"#F8F8FF"}}>
          <span style={{fontSize: "19px"}}>Skill</span><br/>
          <span>Proficiency</span> <br/>
          <br/>
          <hr/>
          <span><i onClick={()=>{alert("waddup it works")}}class="fas fa-pen-square fa-lg"> Edit</i> | <i class="fas fa-trash-alt fa-lg"> Delete</i></span>
        </div>
        </div>
    );
  }
}

export default TechnicalSkills;