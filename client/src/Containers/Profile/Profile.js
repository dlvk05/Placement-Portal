import React, { Component } from "react";
import { Card, Accordion, Button } from "react-bootstrap";
import PersonalSummary from "./PersonalSummary/PersonalSummary";
import About from "./About/About";
import styles from "./Profile.module.css";
import Education from "./Education/Education";
import InternshipWorkExperience from "./InternshipWorkExperience/InternshipWorkExperience";
import TechnicalSkills from "./TechnicalSkills/TechnicalSkills";
import PositionsOfResponsibility from "./PositionsOfResponsibility/PositionsOfResponsibility";
import Projects from "./Projects/Projects";
import Accomplishments from "./Accomplishments/Accomplishments";

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
                  <a href="#ClassXII">Class XII Details</a> <br />
                  <a href="#ClassX">Class X Details</a> <br />
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                  <a href="#InternshipWorkExp">Work Experience</a>
                </Accordion.Toggle>
              </Card.Header>
            </Card>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                  <a href="#TechnicalSkills">Technical Skills</a>
                </Accordion.Toggle>
              </Card.Header>
            </Card>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                  <a href="#PositionsOfResponsibility">Positions</a>
                </Accordion.Toggle>
              </Card.Header>
            </Card>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                  <a href="#Projects">Projects</a>
                </Accordion.Toggle>
              </Card.Header>
            </Card>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                  Accomplishments
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="1">
                <Card.Body>
                  <a href="#Awards">Awards</a> <br />
                  <a href="#ContactDetails">Contact Details</a> <br />
                  <a href="#Address">Address</a> <br />
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
        <div className={styles.subdiv3} style={{ marginTop: "20px" }}>
          <InternshipWorkExperience/>
        </div>
        <div className={styles.subdiv3} style={{ marginTop: "20px" }}>
          <TechnicalSkills/>
        </div>
        <div className={styles.subdiv3} style={{ marginTop: "20px" }}>
          <PositionsOfResponsibility/>
        </div>
        <div className={styles.subdiv3} style={{ marginTop: "20px" }}>
          <Projects/>
        </div>
        <div className={styles.subdiv3} style={{ marginTop: "20px" }}>
          <Accomplishments/>
        </div>
      </div>
    );
  }
}

export default Profile;
