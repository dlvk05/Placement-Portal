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
import Resumes from "./Resumes/Resumes";
import axios from "axios";
import { connect } from "react-redux";
class Profile extends Component {
  state = {
    toggleRerender: false,
    userAccount: null,
    Summary: null,
    About: {
      Overview: null,
      ContactDetails: null,
      Address: null,
      AdditionalInfo: null,
    },
    //Education
    Education: {
      Current: null,
      Class12th: null,
      Class10th: null,
    },
    //Internships and Work Exp
    WorkExp: null,
    //Technical Skills
    TechnicalSkills: null,
    //Positions of Responsibility
    PositionsOfResponsibility: null,
    //Projects
    Projects: null,
    //Accomplishments
    Accomplishments: {
      Awards:null,
      Certifications: null,
      Competitions: null,
      Conferences: null,
      TestScores: null,
      Publications: null,
      Scholarships: null,
    },
    Resumes: null,
  };

  forceRerender = () => {
    console.log("force Rerender called");
    let url = ["/api/userProfile", this.props.profileId].join("/");
    // console.log(this.props.profileId);
    axios
      .get(url)
      .then((res) => {
        console.log(res.data.profile);

        this.setState({
          ...this.state,
          ...res.data.profile,
          toggleRerender: !this.state.toggleRerender,
        });
      })
      .catch((err) => {
        console.log(err.data);
      });
  };

  componentDidMount() {
    // console.log("component DId mount called");
    let url = ["/api/userProfile", this.props.profileId].join("/");
    // console.log(this.props.profileId);
    axios
      .get(url)
      .then((res) => {
        console.log('profile loaded');
        console.log(res.data.profile);

        this.setState({
          ...res.data.profile,
        });
      })
      .catch((err) => {
        console.log(err.data);
      });
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.sidenav}>
          <h4 style={{color: "#EBEBF2", marginTop: "10px"}}><center>Navigation</center></h4>
          <hr style={{border: "2px solid #EBEBF2"}}/>
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
                <Accordion.Toggle as={Button} variant="link" eventKey="3">
                  Accomplishments
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="3">
                <Card.Body>
                  <a href="#Awards">Awards</a> <br />
                  <a href="#Certifications">Certifications</a> <br />
                  <a href="#Competitions">Competitions</a> <br />
                  <a href="#Confrences">Confrences</a> <br />
                  <a href="#TestScores">TestScores</a> <br />
                  <a href="#Publications">Publications</a> <br />
                  <a href="#Scholarships">Scholarships</a> <br />
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                  <a href="#Resumes">Resumes</a>
                </Accordion.Toggle>
              </Card.Header>
            </Card>
          </Accordion>
        </div>
        <div className={styles.subdiv3}>
          <PersonalSummary
            id="Summary"
            userAccountInfo={this.state.userAccount}
            data={this.state.Summary}
            forceReload={this.forceRerender}
          />
        </div>
        <div className={styles.subdiv3} style={{ marginTop: "20px" }}>
          <About
            id="About"
            data={this.state.About}
            forceReload={this.forceRerender}
          />
        </div>
        <div className={styles.subdiv3} style={{ marginTop: "20px" }}>
          <Education
            data={this.state.Education}
            forceReload={this.forceRerender}
          />
        </div>
        <div className={styles.subdiv3} style={{ marginTop: "20px" }}>
          <InternshipWorkExperience
            data={this.state.WorkExp}
            forceReload={this.forceRerender}
          />
        </div>
        <div className={styles.subdiv3} style={{ marginTop: "20px" }}>
          <TechnicalSkills
            data={this.state.TechnicalSkills}
            forceReload={this.forceRerender}
          />
        </div>
        <div className={styles.subdiv3} style={{ marginTop: "20px" }}>
          <PositionsOfResponsibility
            data={this.state.PositionsOfResponsibility}
            forceReload={this.forceRerender}
          />
        </div>
        <div className={styles.subdiv3} style={{ marginTop: "20px" }}>
          <Projects
            data={this.state.Projects}
            forceReload={this.forceRerender}
          />
        </div>
        <div className={styles.subdiv3} style={{ marginTop: "20px" }}>
          <Accomplishments
            data={this.state.Accomplishments}
            forceReload={this.forceRerender}
          />
        </div>
        <div className={styles.subdiv3} style={{ marginTop: "20px" }}>
          <Resumes data={this.state.Resumes} forceReload={this.forceRerender} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    profileId: state.userAuth.profileId,
  };
};

export default connect(mapStateToProps)(Profile);
