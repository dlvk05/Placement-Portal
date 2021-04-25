import React, { Component } from "react";
import { Card, Accordion, Button } from "react-bootstrap";
import PersonalSummary from "./PersonalSummary/PersonalSummary";
import About from "./About/About";
import styles from "./Profile.module.css";
import Education from "./Education/Education";

class Profile extends Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.sidenav}>
          <h4>Navigation Options</h4>
          <hr />
          <Accordion defaultActiveKey="">
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                  <a href="#Summary">Summary</a>
                </Accordion.Toggle>
              </Card.Header>
            </Card>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                  About
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="1">
                <Card.Body>
                  <a href="#Overview">Overview</a> <br />
                  <a href="#ContactDetails">Contact Details</a> <br />
                  <a href="#Address">Address</a> <br />
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="2">
                  Education
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="2">
                <Card.Body>
                  <a href="#Current">Current</a> <br />
                  <a href="#ClassXII">ClassXII Details</a> <br />
                  <a href="#ClassXDetails">ClassX Details</a> <br />
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>
        <div className={styles.subdiv3}>
          <PersonalSummary id="Summary" />
        </div>
        <div className={styles.subdiv3} style={{ marginTop: "20px" }}>
          <About id="About" />
        </div>
        <div className={styles.subdiv3} style={{ marginTop: "20px" }}>
          <Education />
        </div>
      </div>
    );
  }
}

export default Profile;
