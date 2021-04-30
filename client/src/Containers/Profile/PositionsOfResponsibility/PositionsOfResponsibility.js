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
        <div style={{display: "flex", justifyContent: "center"}}><p>There is currently no content to display</p></div>
        </div>
    );
  }
}

export default PositionsOfResponsibility;