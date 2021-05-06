import React from "react";
import { Form, Col, Row, Button } from "react-bootstrap";
import styles from "./JobProfileForm.module.css";

class JobProfileForm extends React.Component {
  /* workflowStages = [{StageNo: 0,StageTitle: "initial stage"}, {StageNo: 1,StageTitle: "first stage"}, {StageNo: 2,StageTitle: "second stage"}];

     showWorkflowStages = () => {
         let stagesCollection = this.workflowStages.map((currentStage, i) =>(
             <div key={i}>
                 <div>{currentStage.StageNo}</div>
                 <div>{currentStage.StageTitle}</div>
             </div>
         ))
     } */
  state = { list: [] };

  addStage = () => {
    // let currentList = this.state.list;
  };

  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.subsection}>
          <center>
            <h3>Job Profile Form</h3>
          </center>
          <hr />
          <br />
          <br />
          <h5>Basic Information</h5>
          <hr />
          <Row>
            <div className={styles.formDiv}>
              <Form.Group as={Col} controlId="formGridJobTitle">
                <Form.Row>
                  <Form.Label column="sm">Enter Job Title</Form.Label>
                  <Form.Control
                    type="JobProfileTitle"
                    placeholder="Enter Job Profile Title"
                    required
                    size="sm"
                    onChange={(event, string) => {
                      this.inputChangeHandler(event, "JobProfileTitle");
                    }}
                  />
                </Form.Row>
              </Form.Group>
            </div>
            <div className={styles.formDiv}>
              <Form.Group as={Col} controlId="formGridCompanyName">
                <Form.Row>
                  <Form.Label column="sm">Enter Company Name</Form.Label>
                  <Form.Control
                    type="CompanyName"
                    placeholder="Enter Company Name"
                    required
                    size="sm"
                    onChange={(event, string) => {
                      this.inputChangeHandler(event, "CompanyName");
                    }}
                  />
                </Form.Row>
              </Form.Group>
            </div>
            <div className={styles.formDiv}>
              <Form.Group as={Col} controlId="formGridLocation">
                <Form.Row>
                  <Form.Label column="sm">Enter Job Location</Form.Label>
                  <Form.Control
                    type="Location"
                    placeholder="Enter Location"
                    required
                    size="sm"
                    onChange={(event, string) => {
                      this.inputChangeHandler(event, "Location");
                    }}
                  />
                </Form.Row>
              </Form.Group>
            </div>
          </Row>
          <Row>
            <div className={styles.formDiv}>
              <Form.Group controlId="exampleForm.SelectCustom" as={Col}>
                <Form.Row>
                  <Form.Label column="sm">Job Sector</Form.Label>
                  <Form.Control
                    as="select"
                    custom
                    size="sm"
                    onChange={(event, string) => {
                      this.inputChangeHandler(event, "JobSector");
                      console.log("drop down is being read");
                    }}
                  >
                    <option eventkey="none" selected disabled hidden>
                      Please Select an Option
                    </option>
                    <option value="Accounting" eventkey="1">
                      Accounting
                    </option>
                    <option value="Administration" eventkey="2">
                      Administration
                    </option>
                    <option value="Advertising" eventkey="3">
                      Advertising
                    </option>
                    <option value="Business Development" eventkey="4">
                      Business Development
                    </option>
                    <option value="Community and Social Services" eventkey="5">
                      Community and Social Services
                    </option>
                    <option value="Consulting" eventkey="6">
                      Consulting
                    </option>
                  </Form.Control>
                </Form.Row>
              </Form.Group>
            </div>
            <div className={styles.formDiv}>
              <Form.Group controlId="exampleForm.SelectCustom" as={Col}>
                <Form.Row>
                  <Form.Label column="sm">Position Type</Form.Label>
                  <Form.Control
                    as="select"
                    custom
                    size="sm"
                    onChange={(event, string) => {
                      this.inputChangeHandler(event, "PositionType");
                      console.log("drop down is being read");
                    }}
                  >
                    <option eventkey="none" selected disabled hidden>
                      Please Select an Option
                    </option>
                    <option value="Part Time" eventkey="1">
                      Part Time
                    </option>
                    <option value="Full Time" eventkey="2">
                      Full Time
                    </option>
                    <option value="Internship Paid" eventkey="3">
                      Internship (Paid)
                    </option>
                    <option value="Internship Unpaid" eventkey="4">
                      Internship (Unpaid)
                    </option>
                  </Form.Control>
                </Form.Row>
              </Form.Group>
            </div>
          </Row>
          <Row>
            <Col xs="auto" className="my-1">
              <Form.Check
                type="checkbox"
                id="customControlAutosizing"
                label="Dream Job (Check for YES)"
                custom
              />
            </Col>
          </Row>
          <hr />
          <br />
          <br />
          <br />
          <h5>Job Opening Overview</h5>
          <hr />
          <Row>
            <div className={styles.formDiv}>
              <Form.Group as={Col} controlId="formGridDomain">
                <Form.Row>
                  <Form.Label column="sm">Job Domain</Form.Label>
                  <Form.Control
                    type="Domain"
                    placeholder="Domain"
                    required
                    size="sm"
                    onChange={(event, string) => {
                      this.inputChangeHandler(event, "Domain");
                    }}
                  />
                </Form.Row>
              </Form.Group>
            </div>
            <div className={styles.formDiv}>
              <Form.Group as={Col} controlId="formGridJobFunctions">
                <Form.Row>
                  <Form.Label column="sm">Enter Job Functions</Form.Label>
                  <Form.Control
                    type="JobFunctions"
                    placeholder="Job Functions"
                    required
                    size="sm"
                    onChange={(event, string) => {
                      this.inputChangeHandler(event, "JobFunctions");
                    }}
                  />
                </Form.Row>
              </Form.Group>
            </div>
            <div className={styles.formDiv}>
              <Form.Group controlId="exampleForm.SelectCustom" as={Col}>
                <Form.Row>
                  <Form.Label column="sm">Category</Form.Label>
                  <Form.Control
                    as="select"
                    custom
                    size="sm"
                    onChange={(event, string) => {
                      this.inputChangeHandler(event, "Category");
                      console.log("drop down is being read");
                    }}
                  >
                    <option eventkey="none" selected disabled hidden>
                      Please Select an Option
                    </option>
                    <option value="ITES" eventkey="1">
                      ITES
                    </option>
                    <option value="CORE" eventkey="2">
                      CORE/Preferred Domain
                    </option>
                    <option value="R&D" eventkey="3">
                      Research & Development
                    </option>
                    <option value="NonCORE" eventkey="4">
                      Non-CORE
                    </option>
                  </Form.Control>
                </Form.Row>
              </Form.Group>
            </div>
          </Row>
          <Row>
            <div className={styles.formDiv}>
              <Form.Group as={Col} controlId="formGridCTCRange">
                <Form.Row>
                  <Form.Label column="sm">Enter CTC Range</Form.Label>
                  <Form.Control
                    type="CTCRange"
                    placeholder="CTC Range"
                    required
                    size="sm"
                    onChange={(event, string) => {
                      this.inputChangeHandler(event, "CTCRange");
                    }}
                  />
                </Form.Row>
              </Form.Group>
            </div>
            <div className={styles.formDiv}>
              <Form.Group as={Col} controlId="formGridAbsoluteCTC">
                <Form.Row>
                  <Form.Label column="sm">Enter the Absolute CTC</Form.Label>
                  <Form.Control
                    type="AbsoluteCTC"
                    placeholder="Absolute CTC"
                    required
                    size="sm"
                    onChange={(event, string) => {
                      this.inputChangeHandler(event, "AbsoluteCTC");
                    }}
                  />
                </Form.Row>
              </Form.Group>
            </div>
          </Row>
          <hr />
          <br />
          <br />
          <br />
          <h5>About The Company</h5>
          <hr />
          <Row>
            <div className={styles.formDiv}>
              <Form.Group as={Col}>
                <Form.Row>
                  <Form.Label>About the Company</Form.Label>
                  <Form.Control
                    type="TextArea"
                    placeholder="Write something about the Company"
                    rows="10"
                    cols="40"
                    as="textarea"
                  />
                </Form.Row>
              </Form.Group>
            </div>
            <div className={styles.formDiv}>
              <Form.Group as={Col}>
                <Form.Row>
                  <Form.Label>Job Description</Form.Label>
                  <Form.Control
                    type="TextArea"
                    placeholder="What will the Job be like?"
                    rows="10"
                    cols="60"
                    as="textarea"
                  />
                </Form.Row>
              </Form.Group>
            </div>
            <div className={styles.formDiv}>
              <Form.Group as={Col}>
                <Form.Row>
                  <Form.Label>Required Skills</Form.Label>
                  <Form.Control
                    type="TextArea"
                    placeholder="What skills should the applicant have?"
                    rows="10"
                    cols="60"
                    as="textarea"
                  />
                </Form.Row>
              </Form.Group>
            </div>
          </Row>
          <hr />
          <br />
          <br />
          <br />
          {/* ^^^ This needs to be implemented properly */}
          <h5>Hiring Workflow</h5>
          <hr />
          <Row>
            <div>
              <Form.Group as={Col} controlId="formGridHiringStage">
                <Form.Row>
                  <Form.Label column="sm">Hiring Stage Info</Form.Label>
                  <Form.Control
                    type="HiringStage"
                    placeholder="Info"
                    required
                    size="sm"
                    onChange={(event, string) => {
                      this.inputChangeHandler(event, "HiringStage");
                    }}
                  />
                </Form.Row>
              </Form.Group>
            </div>
            {/* <i class="fas fa-plus-square fa-lg"></i> Add Workflow Stage{" "} */}
          </Row>
          <hr />
          <br />
          <br />
          <br />
          <h5>Document Attachments</h5>
          <hr />
          <Row>
            <div className={styles.formDiv}>
              <Form.Group as={Col}>
                <Form.Row>
                  <Form.Label column="sm">Upload Relevant Document</Form.Label>
                  <Form.File Placeholder="Upload Doc" size="sm" />
                </Form.Row>
              </Form.Group>
            </div>
          </Row>
          <hr />
          <br />
          <br />
          <br />
          <h5>Eligibility Criteria</h5>
          <hr />
          <Row>
            <div className={styles.formDiv}>
              <Form.Label as={Col}>Programmes Allowed</Form.Label>
              <Form.Group as={Col}>
                <Form.Row>
                  <Col>
                    <Form.Check
                      as={Col}
                      type="checkbox"
                      id="customControlAutosizing"
                      label="B.Tech"
                      custom
                    />
                  </Col>
                  <Col>
                    <Form.Check
                      as={Col}
                      type="checkbox"
                      id="customControlAutosizing"
                      label="M.Tech"
                      custom
                    />
                  </Col>
                  <Col>
                    <Form.Check
                      as={Col}
                      type="checkbox"
                      id="customControlAutosizing"
                      label="Ph.D"
                      custom
                    />
                  </Col>
                </Form.Row>
                <Form.Row>
                  <Col>
                    <Form.Check
                      as={Col}
                      type="checkbox"
                      id="customControlAutosizing"
                      label="B.Arch"
                      custom
                    />
                  </Col>
                  <Col>
                    <Form.Check
                      as={Col}
                      type="checkbox"
                      id="customControlAutosizing"
                      label="BBA"
                      custom
                    />
                  </Col>
                  <Col>
                    <Form.Check
                      as={Col}
                      type="checkbox"
                      id="customControlAutosizing"
                      label="LLB"
                      custom
                    />
                  </Col>
                </Form.Row>
              </Form.Group>
            </div>
            <div className={styles.formDiv}>
              <Form.Label as={Col}>Branches Allowed</Form.Label>
              <Form.Group as={Col}>
                <Form.Row>
                  <Col>
                    <Form.Check
                      as={Col}
                      type="checkbox"
                      id="customControlAutosizing"
                      label="IT"
                      custom
                    />
                  </Col>
                  <Col>
                    <Form.Check
                      as={Col}
                      type="checkbox"
                      id="customControlAutosizing"
                      label="CSE"
                      custom
                    />
                  </Col>
                  <Col>
                    <Form.Check
                      as={Col}
                      type="checkbox"
                      id="customControlAutosizing"
                      label="CCE"
                      custom
                    />
                  </Col>
                </Form.Row>
                <Form.Row>
                  <Col>
                    <Form.Check
                      as={Col}
                      type="checkbox"
                      id="customControlAutosizing"
                      label="ME"
                      custom
                    />
                  </Col>
                  <Col>
                    <Form.Check
                      as={Col}
                      type="checkbox"
                      id="customControlAutosizing"
                      label="EEE"
                      custom
                    />
                  </Col>
                  <Col>
                    <Form.Check
                      as={Col}
                      type="checkbox"
                      id="customControlAutosizing"
                      label="ECE"
                      custom
                    />
                  </Col>
                </Form.Row>
              </Form.Group>
            </div>
          </Row>
          <br />
          <Row>
              <div className={styles.formDiv}>
              <Form.Group
                as={Col}
                controlId="formGridUGScoreRequired"
              >
                <Form.Row>
                  <Form.Label column="sm">
                  Under Graduate Score Required
                  </Form.Label>
                  <Form.Control
                    type="UGScoreRequired"
                    placeholder="CGPA"
                    required
                    size="sm"
                    onChange={(event, string) => {
                      this.inputChangeHandler(
                        event,
                        "UGScoreRequired"
                      );
                    }}
                  />
                </Form.Row>
              </Form.Group>
              </div>
          </Row>
          <Row>
            <div className={styles.formDiv}>
              <Form.Group
                as={Col}
                controlId="formGridClass12thScoreRequiredPercentage"
              >
                <Form.Row>
                  <Form.Label column="sm">
                    Class12<sup>th</sup> Score Required (Percentage)
                  </Form.Label>
                  <Form.Control
                    type="Class12thScoreRequiredPercentage"
                    placeholder="Percentage %"
                    required
                    size="sm"
                    onChange={(event, string) => {
                      this.inputChangeHandler(
                        event,
                        "Class12thScoreRequiredPercentage"
                      );
                    }}
                  />
                </Form.Row>
              </Form.Group>
            </div>
            <div className={styles.formDiv}>
              <Form.Group
                as={Col}
                controlId="formGridClass12thScoreRequiredCGPA"
              >
                <Form.Row>
                  <Form.Label column="sm">
                    Class12<sup>th</sup> Score Required CGPA
                  </Form.Label>
                  <Form.Control
                    type="Class12thScoreRequiredCGPA"
                    placeholder="CGPA"
                    required
                    size="sm"
                    onChange={(event, string) => {
                      this.inputChangeHandler(
                        event,
                        "Class12thScoreRequiredCGPA"
                      );
                    }}
                  />
                </Form.Row>
              </Form.Group>
            </div>
          </Row>
          <Row>
              <div className={styles.formDiv}>
              <Form.Group
                as={Col}
                controlId="formGridClass10thScoreRequiredPercentage"
              >
                <Form.Row>
                  <Form.Label column="sm">
                    Class10<sup>th</sup> Score Required Percentage
                  </Form.Label>
                  <Form.Control
                    type="Class10thScoreRequiredPercentage"
                    placeholder="Percentage %"
                    required
                    size="sm"
                    onChange={(event, string) => {
                      this.inputChangeHandler(
                        event,
                        "Class10thScoreRequiredPercentage"
                      );
                    }}
                  />
                </Form.Row>
              </Form.Group>
              </div>
              <div className={styles.formDiv}>
              <Form.Group
                as={Col}
                controlId="formGridClass10thScoreRequiredCGPA"
              >
                <Form.Row>
                  <Form.Label column="sm">
                    Class10<sup>th</sup> Score Required CGPA
                  </Form.Label>
                  <Form.Control
                    type="Class10thScoreRequiredCGPA"
                    placeholder="CGPA"
                    required
                    size="sm"
                    onChange={(event, string) => {
                      this.inputChangeHandler(
                        event,
                        "Class10thScoreRequiredCGPA"
                      );
                    }}
                  />
                </Form.Row>
              </Form.Group>
              </div>
          </Row>
          <hr />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <Button variant="success">Submit Data</Button>
        </div>
      </div>
    );
  }
}

export default JobProfileForm;
