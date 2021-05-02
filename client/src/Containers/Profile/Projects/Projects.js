import React from "react";
import AddProjectsModal from "./AddProjects/AddProjectsModal";

const styles = {
  border: "solid 1px",
  font: "15px Roboto, sans-serif",
  fontSize: "12px",
  display: "block",
  background: "white",
  padding: "5%",
  marginBottom: "30px",
};

class Projects extends React.Component {
  render() {
    return (
      <div style={styles}>
        <span id="Projects" style={{ fontSize: "20px" }}>
          Past Projects
        </span>{" "}
        <span style={{ float: "right", fontSize: "20px" }}>
          <AddProjectsModal />
        </span>
        <hr />
        <br />
        <br />
        <div
          style={{ border: "groove 2px", borderRadius: "8px", padding: "10px", marginBottom:"10px", background:"#F8F8FF" }}
        >
          <span style={{ fontSize: "19px" }}>Project Name</span>
          <br />
          <span>Project Domain</span> <br />
          <span>Project Duration (start date --- end date)</span>
          <br />
          <br />
          <span>Description</span>
          <br />
          <br />
          <hr />
          <span>
            <i
              onClick={() => {
                alert("waddup it works");
              }}
              class="fas fa-pen-square fa-lg"
            >
              {" "}
              Edit
            </i>{" "}
            | <i class="fas fa-trash-alt fa-lg"> Delete</i>
          </span>
        </div>
        <div
          style={{ border: "groove 2px", borderRadius: "8px", padding: "10px", marginBottom:"10px", background:"#F8F8FF" }}
        >
          <span style={{ fontSize: "19px" }}>Project Name</span>
          <br />
          <span>Project Domain</span> <br />
          <span>Project Duration (start date --- end date)</span>
          <br />
          <br />
          <span>Description</span>
          <br />
          <br />
          <hr />
          <span>
            <i
              onClick={() => {
                alert("waddup it works");
              }}
              class="fas fa-pen-square fa-lg"
            >
              {" "}
              Edit
            </i>{" "}
            | <i class="fas fa-trash-alt fa-lg"> Delete</i>
          </span>
        </div>
      </div>
    );
  }
}

export default Projects;
