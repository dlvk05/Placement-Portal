import React from "react";
import InternshipWorkExperienceFeed from "../../../Components/ProfileComponents/InternshipWorkExperienceFeed/InternshipWorkExperienceFeed";
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
  borderRadius: "10px"
};

class InternshipWorkExperience extends React.Component{
  render(){
    return(
        <div style={styles}>
        <span id="InternshipWorkExp"style={{ fontSize: "20px" }}>Internships & Work Experience</span>{" "}
        <span style={{ float: "right", fontSize: "20px" }}>
          <AddWorkExperienceModal forceReload={this.props.forceReload}/>
        </span>
        <hr />
        <br />
        <br />
        {this.props.data!=={}?<InternshipWorkExperienceFeed workfeed={this.props.data}/> : "there is no content to display"}
        </div>
    );
  }
}

export default InternshipWorkExperience;