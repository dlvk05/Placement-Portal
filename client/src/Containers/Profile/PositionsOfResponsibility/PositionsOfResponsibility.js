import React from "react";
import AddPositionsOfResponsibilityModal from "./AddPositionsOfResponsibility/AddPositionsOfResponsibilityModal";


const styles = {
  border: "solid 1px",
  font: "15px Roboto, sans-serif",
  fontSize: "12px",
  display: "block",
  background: "white",
  padding: "5%",
  marginBottom: "30px",
};

class PositionsOfResponsibility extends React.Component{

  render(){
    return(
        <div style={styles}>
        <span id="PositionsOfResponsibility"style={{ fontSize: "20px" }}>Positions Of Responsibility</span>{" "}
        <span style={{ float: "right", fontSize: "20px" }}>
            <AddPositionsOfResponsibilityModal/>
        </span>
        <hr />
        <br />
        <br />
        <div style={{border: "groove 2px", borderRadius:"8px",padding:"10px", marginBottom:"10px", background:"#F8F8FF"}}>
          <span style={{fontSize: "19px"}}>Position Title</span><br/>
          <span>Organization Name</span> <br/>
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

export default PositionsOfResponsibility;