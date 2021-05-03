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
};

class PositionsOfResponsibility extends React.Component{
  state = {
    PositionsOfResponsibility: [
      {
        Title: "CEO",
        OrganizationName: "Google",
        StartDate: "20.03.2021",
        EndDate: "12.04.2021",
        Description: "I was the CEO of google mah man! bow before me",
      },
      {
        Title: "CFO",
        OrganizationName: "Apple",
        StartDate: "20.09.2021",
        EndDate: "10.10.2021",
        Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, deleniti. Debitis assumenda, nulla obcaecati veniam enim modi quis, quo deleniti libero nisi sunt animi at tempora consequatur nihil repellendus natus?", 
      }
    ]
  }

  render(){
    return(
        <div style={styles}>
        <span id="PositionsOfResponsibility"style={{ fontSize: "20px" }}>Positions Of Responsibility</span>{" "}
        <span style={{ float: "right", fontSize: "20px" }}>
            <AddPositionsOfResponsibilityModal name="Add Info"/>
        </span>
        <hr />
        <br />
        <br />
        <PositionsOfResponsibilityFeed PositionsOfResponsibility={this.state.PositionsOfResponsibility}/>
        </div>
    );
  }
}

export default PositionsOfResponsibility;