import React, { Component } from "react";
import { Card, Accordion, Button } from "react-bootstrap";
import PersonalSummary from "./PersonalSummary/PersonalSummary";
import About from "./About/About";
import styles from "./Profile.module.css";

class Profile extends Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.sidenav}>
          <h4>Navigation Options</h4>
          <hr />
          {/* <a href="#Summary">Nav option 1</a> <br />
        <a href="#About">Nav option 2</a> <br />
        <a href="#empty">Nav option 3</a> <br />
        <a href="#empty">Nav option 4</a> <br />
        <a href="#empty">Nav option 5</a> <br /> */}
          <Accordion defaultActiveKey="">
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                <a href="#Summary">Summary</a>
                </Accordion.Toggle>
              </Card.Header>
              {/* <Accordion.Collapse eventKey="0">
                <Card.Body>
                <a href="#Summary">Overview</a> <br />
                </Card.Body>

              </Accordion.Collapse> */}
            </Card>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                  About
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="1">
                <Card.Body>
                <a href="#About">Overview</a> <br />
                  <a href="#ContactDetails">Contact Details</a> <br />
                  <a href="#Address">Address</a> <br />
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>
        <div className={styles.subdiv3}>
          <a id="Summary"></a>
          <PersonalSummary />
        </div>
        <div className={styles.subdiv3} style={{ marginTop: "20px" }}>
          <a id="About"></a>
          <About />
        </div>
      </div>
    );
  }
}

export default Profile;
