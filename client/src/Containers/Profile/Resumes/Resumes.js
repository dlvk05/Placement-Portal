import React from "react";
import {Row, Col} from 'react-bootstrap';
import AddResumesModal from "./AddResumes/AddResumesModal";

const styles = {
  border: "solid 1px",
  font: "15px Roboto, sans-serif",
  fontSize: "12px",
  display: "block",
  background: "white",
  padding: "5%",
  marginBottom: "30px",
};

class Resumes extends React.Component{

  render(){
    return(
        <div style={styles}>
        <span id="Resumes"style={{ fontSize: "20px" }}>Resumes</span>{" "}
        <span style={{ float: "right", fontSize: "20px" }}>
            <AddResumesModal/>
        </span>
        <hr />
        <br />
        <br />
        <div>
        <Row>
            <Col xs={2}><span><i class="fas fa-file-pdf fa-4x"></i></span></Col>
            <Col><span style={{fontSize:"20px"}}>"file Name goes here"</span><br/><span>"Date Created"</span></Col>
            <Col xs={2}><span><i onClick={()=>(alert("can you read this?"))} class="fas fa-pencil-alt fa-2x"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="fas fa-trash-alt fa-2x"></i></span></Col>
        </Row>
        </div>
        <hr/>
        </div>
    );
  }
}

export default Resumes;