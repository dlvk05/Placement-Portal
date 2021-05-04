import React from "react";
import PositionsOfResponsibilityFeed from "../../../Components/ProfileComponents/PositionsOfResponsibilityFeed/PositionsOfResponsibilityFeed";
import AddPositionsOfResponsibilityModal from "./AddPositionsOfResponsibility/AddPositionsOfResponsibilityModal";


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

class PositionsOfResponsibility extends React.Component{
  render(){
    return(
        <div style={styles}>
        <span id="PositionsOfResponsibility"style={{ fontSize: "20px" }}>Positions Of Responsibility</span>{" "}
        <span style={{ float: "right", fontSize: "20px" }}>
            <AddPositionsOfResponsibilityModal name="Add Info" forceReload={this.props.forceReload}/>
        </span>
        <hr />
        <br />
        <br />
        {this.props.data!=null?<PositionsOfResponsibilityFeed PositionsOfResponsibility={this.props.data}/>: "there is no data to display"}
        </div>
    );
  }
}

export default PositionsOfResponsibility;