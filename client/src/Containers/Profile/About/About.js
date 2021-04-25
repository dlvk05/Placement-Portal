import React from "react";
import ContactDetailsModal from "./ContactDetails/ContactDetailsModal";
import OverviewModal from "./Overview/OverviewModal";
// import styles from "./PersonalSummary.module.css";

const styles = {
  border: "solid 1px",
  font: "15px Roboto, sans-serif",
  fontSize: "12px",
  display: "block",
  background: "white",
  padding: "5%",
  marginBottom: "30px",
};

class About extends React.Component {
  render() {
    return (
      <div style={styles}>
        <span style={{ fontSize: "20px" }}>Overview</span>{" "}
        <span style={{ float: "right", fontSize: "20px" }}>
          <OverviewModal />
        </span>
        <hr />
        <br />
        <br />
        <span>Name:</span>
        <span style={{ marginLeft: "10%" }}>
          "this is where the name is supposed to be"
        </span>
        <hr />
        <br />
        <span>Date of Birth:</span>
        <span style={{ marginLeft: "10%" }}>
          "this is where the Date of Birth is supposed to be"
        </span>
        <hr />
        <br />
        <span>Gender:</span>
        <span style={{ marginLeft: "10%" }}>
          "this is where the gender is supposed to be"
        </span>
        <hr />
        <br />
        <span>Category:</span>
        <span style={{ marginLeft: "10%" }}>
          "this is where the category is supposed to be"
        </span>
        <hr />
        <br />
        <br />
        <br />
        <br />
        <span style={{ fontSize: "20px" }}>Contact Details</span>{" "}
        <span style={{ float: "right", fontSize: "20px" }}>
          <ContactDetailsModal/>
        </span>
        <hr />
        <br />
        <br />
        <span>Contact Number:</span>
        <span style={{ marginLeft: "10%" }}>
          "this is where the Contact Number is supposed to be"
        </span>
        <hr />
        <br /><span>Email:</span>
        <span style={{ marginLeft: "10%" }}>
          "this is where the email is supposed to be"
        </span>
        <hr />
        <br />
        <span>Personal Email:</span>
        <span style={{ marginLeft: "10%" }}>
          "this is where the Personal Email is supposed to be"
        </span>
        <hr />
        <br />
      </div>
    );
  }
}

export default About;
