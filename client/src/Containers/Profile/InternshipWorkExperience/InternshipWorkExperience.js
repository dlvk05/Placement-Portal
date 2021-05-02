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
        <div style={{border: "groove 2px", borderRadius:"8px",padding:"10px", marginBottom:"10px"}}>
          <span style={{fontSize: "19px"}}>Title</span><br/>
          <span>Company Name</span> <br/>
          <span>Location</span> <br/>
          <span>Position</span> <br/>
          <span>Duration (start date --- end date)</span>
          <br/>
          <br/>
          <span>Description</span><br/>
          <br/>
          <hr/>
          <span><i onClick={()=>{alert("waddup it works")}}class="fas fa-pen-square fa-lg"> Edit</i> | <i class="fas fa-trash-alt fa-lg"> Delete</i></span>
        </div>
        </div>
    );
  }
}

export default InternshipWorkExperience;