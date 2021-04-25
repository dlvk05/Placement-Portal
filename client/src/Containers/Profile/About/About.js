import React from "react";
import AddressModal from "./Address/AddressModal";
import ContactDetailsModal from "./ContactDetails/ContactDetailsModal";
import OverviewModal from "./Overview/OverviewModal";
import { Row, Col } from "react-bootstrap";

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
        <Row>
          <Col xs={2}>
            <span>Name:</span>
          </Col>
          <Col>
            <span style={{ marginLeft: "10%" }}>
              "this is where the name is supposed to be"
            </span>
          </Col>
        </Row>
        <hr />
        <br />
        <Row>
          <Col xs={2}>
            <span>Date of Birth:</span>
          </Col>
          <Col>
            <span style={{ marginLeft: "10%" }}>
              "this is where the Date of Birth is supposed to be"
            </span>
          </Col>
        </Row>
        <hr />
        <br />
        <Row>
          <Col xs={2}>
            <span>Gender:</span>
          </Col>
          <Col>
            <span style={{ marginLeft: "10%" }}>
              "this is where the gender is supposed to be"
            </span>
          </Col>
        </Row>
        <hr />
        <br />
        <Row>
          <Col xs={2}>
            <span>Category:</span>
          </Col>
          <Col>
            <span style={{ marginLeft: "10%" }}>
              "this is where the category is supposed to be"
            </span>
          </Col>
        </Row>
        <hr />
        <br />
        <br />
        <br />
        <br />
        {/* ^^^ this is where Contact Detials start */}
        <span style={{ fontSize: "20px" }} id="ContactDetails">
          Contact Details
        </span>{" "}
        <span style={{ float: "right", fontSize: "20px" }}>
          <ContactDetailsModal />
        </span>
        <hr />
        <br />
        <br />
        <Row>
          <Col xs={2}>
            <span>Contact Number:</span>
          </Col>
          <Col>
            <span style={{ marginLeft: "10%" }}>
              "this is where the Contact Number is supposed to be"
            </span>
          </Col>
        </Row>
        <hr />
        <br />
        <Row>
          <Col xs={2}>
            <span>Email:</span>
          </Col>
          <Col>
            <span style={{ marginLeft: "10%" }}>
              "this is where the email is supposed to be"
            </span>
          </Col>
        </Row>
        <hr />
        <br />
        <Row>
          <Col xs={2}>
            <span>Personal Email:</span>
          </Col>
          <Col>
            <span style={{ marginLeft: "10%" }}>
              "this is where the Personal Email is supposed to be"
            </span>
          </Col>
        </Row>
        <hr />
        <br />
        <br />
        <br />
        <br />
        {/* ^^^ this is where Address starts */}
        <span style={{ fontSize: "20px" }} id="Address">
          Address
        </span>{" "}
        <span style={{ float: "right", fontSize: "20px" }}>
          <AddressModal />
        </span>
        <hr />
        <br />
        <br />
        <Row>
          <Col xs={2}>
            <span>Complete Address:</span>
          </Col>
          <Col>
            <span style={{ marginLeft: "10%" }}>
              "this is where the Address is supposed to be"
            </span>
          </Col>
        </Row>
        <hr />
        <br />
        <Row>
          <Col xs={2}>
            <span>State:</span>
          </Col>
          <Col>
            <span style={{ marginLeft: "10%" }}>
              "this is where the State is supposed to be"
            </span>
          </Col>
        </Row>
        <hr />
        <br />
        <Row>
          <Col xs={2}>
            <span>City:</span>
          </Col>
          <Col>
            <span style={{ marginLeft: "10%" }}>
              "this is where the City is supposed to be"
            </span>
          </Col>
        </Row>
        <hr />
        <br />
      </div>
    );
  }
}

export default About;
