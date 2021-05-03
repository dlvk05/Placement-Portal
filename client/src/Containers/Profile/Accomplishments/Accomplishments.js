import React from "react";
import { Row, Col } from "react-bootstrap";
import AwardsModal from "./Awards/AwardsModal";
import CertificationsModal from "./Certifications/CertificationsModal";
import CompetitionsModal from "./Competitions/CompetitionsModal";
import ConferencesModal from "./Conferences/ConferencesModal";
import PublicationsModal from "./Publications/PublicationsModal";
import ScholarshipsModal from "./Scholarships/ScholarshipsModal";
import TestScoresModal from "./TestScores/TestScoresModal";

const styles = {
  border: "solid 1px",
  font: "15px Roboto, sans-serif",
  fontSize: "12px",
  display: "block",
  background: "white",
  padding: "5%",
  marginBottom: "30px",
};

class Accomplishments extends React.Component {
  render() {
    return (
      <div style={styles}>
        <span id="Awards"style={{ fontSize: "20px" }}>Awards</span>{" "}
        <span style={{ float: "right", fontSize: "20px" }}>
          <AwardsModal/>
        </span>
        <hr />
        <br />

        <div style={{border: "groove 2px", borderRadius:"8px",padding:"10px", marginBottom:"10px", background:"#F8F8FF"}}>
          <span style={{fontSize: "19px"}}>Title</span><br/>
          <span>Issuer</span> <br/>
          <span>Issue Date</span>
          <br/>
          <br/>
          <span>Description</span><br/>
          <br/>
          <hr/>
          <span><i onClick={()=>{alert("waddup it works")}}class="fas fa-pen-square fa-lg"> Edit</i> | <i class="fas fa-trash-alt fa-lg"> Delete</i></span>
        </div>
        <br />
        <br />
        <br />
        <br />
        {/* ^^^ this is where Certifications start */}
        <span style={{ fontSize: "20px" }} id="Certifications">
          Certifications
        </span>{" "}
        <span style={{ float: "right", fontSize: "20px" }}>
          <CertificationsModal/>
        </span>
        <hr />
        <br />
        <br />
        <div style={{border: "groove 2px", borderRadius:"8px",padding:"10px", marginBottom:"10px", background:"#F8F8FF"}}>
          <span style={{fontSize: "19px"}}>Title</span><br/>
          <span>Issuer</span> <br/>
          <span>Certification Date</span>
          <br/>
          <br/>
          <span>Description</span><br/>
          <br/>
          <hr/>
          <span><i onClick={()=>{alert("waddup it works")}}class="fas fa-pen-square fa-lg"> Edit</i> | <i class="fas fa-trash-alt fa-lg"> Delete</i></span>
        </div>
        <br />
        <br />
        <br />
        <br />
        {/* ^^^ this is where Competitions start */}
        <span style={{ fontSize: "20px" }} id="Competitions">
          Competition Details
        </span>{" "}
        <span style={{ float: "right", fontSize: "20px" }}>
          <CompetitionsModal/>
        </span>
        <hr />
        <br />
        <br />
        <div style={{border: "groove 2px", borderRadius:"8px",padding:"10px", marginBottom:"10px", background:"#F8F8FF"}}>
          <span style={{fontSize: "19px"}}>Title</span><br/>
          <span>Position</span> <br/>
          <span>Competition Date</span>
          <br/>
          <br/>
          <span>Description</span><br/>
          <br/>
          <hr/>
          <span><i onClick={()=>{alert("waddup it works")}}class="fas fa-pen-square fa-lg"> Edit</i> | <i class="fas fa-trash-alt fa-lg"> Delete</i></span>
        </div>
        <br />
        <br />
        <br />
        <br />
        {/* ^^^ this is where Confrences start */}
        <span style={{ fontSize: "20px" }} id="Confrences">
          Confrence Details
        </span>{" "}
        <span style={{ float: "right", fontSize: "20px" }}>
          <ConferencesModal/>
        </span>
        <hr />
        <br />
        <br />
        <div style={{border: "groove 2px", borderRadius:"8px",padding:"10px", marginBottom:"10px", background:"#F8F8FF"}}>
          <span style={{fontSize: "19px"}}>Title</span><br/>
          <span>Organizer</span> <br/>
          <span>Event Date</span>
          <br/>
          <br/>
          <span>Description</span><br/>
          <br/>
          <hr/>
          <span><i onClick={()=>{alert("waddup it works")}}class="fas fa-pen-square fa-lg"> Edit</i> | <i class="fas fa-trash-alt fa-lg"> Delete</i></span>
        </div>
        <br />
        <br />
        <br />
        <br />
        {/* ^^^ this is where Test Scores start */}
        <span style={{ fontSize: "20px" }} id="TestScores">
          Test Scores
        </span>{" "}
        <span style={{ float: "right", fontSize: "20px" }}>
          <TestScoresModal/>
        </span>
        <hr />
        <br />
        <br />
        <div style={{border: "groove 2px", borderRadius:"8px",padding:"10px", marginBottom:"10px", background:"#F8F8FF"}}>
          <Row>
            <Col>
          <span style={{fontSize: "19px"}}>Title</span><br/>
            </Col>
            <Col>
          <span style={{fontSize: "19px"}}>Score Obtained</span><br/>
            </Col>
            </Row>
          <span>Rank Obtained</span> <br/>
          <span>Exam Date</span>
          <br/>
          <br/>
          <span>Description</span><br/>
          <br/>
          <hr/>
          <span><i onClick={()=>{alert("waddup it works")}}class="fas fa-pen-square fa-lg"> Edit</i> | <i class="fas fa-trash-alt fa-lg"> Delete</i></span>
        </div>
        <br />
        <br />
        <br />
        <br />
        {/* ^^^ this is where Publications start */}
        <span style={{ fontSize: "20px" }} id="Publications">
        Publications
        </span>{" "}
        <span style={{ float: "right", fontSize: "20px" }}>
          <PublicationsModal/>
        </span>
        <hr />
        <br />
        <br />
        <div style={{border: "groove 2px", borderRadius:"8px",padding:"10px", marginBottom:"10px", background:"#F8F8FF"}}>
          <span style={{fontSize: "19px"}}>Title</span><br/>
          <span>Publisher</span> <br/>
          <span>Publication Date</span>
          <br/>
          <br/>
          <span>Description</span><br/>
          <br/>
          <hr/>
          <span><i onClick={()=>{alert("waddup it works")}}class="fas fa-pen-square fa-lg"> Edit</i> | <i class="fas fa-trash-alt fa-lg"> Delete</i></span>
        </div>
        <br />
        <br />
        <br />
        <br />
        {/* ^^^ this is where Scholarships start */}
        <span style={{ fontSize: "20px" }} id="Scholarships">
            Scholarships
        </span>{" "}
        <span style={{ float: "right", fontSize: "20px" }}>
          <ScholarshipsModal/>
        </span>
        <hr />
        <br />
        <br />
        <div style={{border: "groove 2px", borderRadius:"8px",padding:"10px", marginBottom:"10px", background:"#F8F8FF"}}>
          <span style={{fontSize: "19px"}}>Title</span><br/>
          <span>Grant Date</span>
          <br/>
          <br/>
          <span>Description</span><br/>
          <br/>
          <hr/>
          <span><i onClick={()=>{alert("waddup it works")}}class="fas fa-pen-square fa-lg"> Edit</i> | <i class="fas fa-trash-alt fa-lg"> Delete</i></span>
        </div>
        <br />
      </div>
    );
  }
}

export default Accomplishments;
