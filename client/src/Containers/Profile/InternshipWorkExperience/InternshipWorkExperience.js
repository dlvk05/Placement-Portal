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
};

class InternshipWorkExperience extends React.Component{
  state={
    WorkExp: [
      {
        Company: String,
        JobTitle: String,
        Location: String,
        PositionType: String,
        JobFunction: String,
        CompanySector: String,
        StartDate: Date,
        EndDate: Date,
        MonthlySalary: String,
        Details: String,
      },
    ]
  }
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
        {this.state.WorkExp!=={}?<InternshipWorkExperienceFeed workfeed={this.state.WorkExp}/> : "there is no content to display"}
        </div>
    );
  }
}

export default InternshipWorkExperience;