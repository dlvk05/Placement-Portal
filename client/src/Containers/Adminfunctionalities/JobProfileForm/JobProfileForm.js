import React from "react";
import { Form, Col, Row, Button } from "react-bootstrap";
import styles from "./JobProfileForm.module.css";
import axios from "axios";
import { connect } from "react-redux";
class JobProfileForm extends React.Component {
  state = {
    formData: {
      adminAccount: {
        type: "adminAccount",
        value: "",
      },
      jobProfileID: {
        type: "jobProfileID",
        value: "",
      },
      ApplicationDeadLine: {
        type: "ApplicationDeadLine",
        value: "",
      },
      CompanyRepresentativeMailId: {
        type: "CompanyRepresentativeMailId",
        value: "",
      },
      JobProfileTitle: {
        type: "JobProfileTitle",
        value: "",
      },
      CompanyName: {
        type: "CompanyName",
        value: "",
      },
      Location: {
        type: "Location",
        value: "",
      },
      JobSector: {
        type: "JobSector",
        value: "",
      },
      PositionType: {
        type: "PositionType",
        value: "",
      },
      Dream: {
        type: "Dream",
        value: false,
      },
      OpeningOverview: {
        type: "OpeningOverview",
        value: {
          Domain: {
            type: "Domain",
            value: "",
          },
          Category: {
            type: "Category",
            value: "",
          },
          JobFunctions: {
            type: "JobFunctions",
            value: "",
          },
          CTCRange: {
            type: "CTCRange",
            value: "",
          },
          AbsoluteCTC: {
            type: "AbsoluteCTC",
            value: "",
          },
        },
      },
      AboutCompany: {
        type: "AboutCompany",
        value: "",
      },
      JobDescription: {
        type: "JobDescription",
        value: "",
      },
      RequiredSkills: {
        type: "RequiredSkills",
        value: "",
      },
      HiringWorkflow: {
        type: "HiringWorkflow",
        value: "",
      },
      AttachedDocuments: {
        type: "AttachedDocuments",
        value: "",
      },
      EligibilityCriteria: {
        type: "EligibilityCriteria",
        value: {
          Backlogs: {
            type: "Backlogs",
            value: "",
          },
          ProgrammesAllowed: {
            type: "ProgrammesAllowed",
            value: [],
          },
          BranchesAllowed: {
            type: "BranchesAllowed",
            value: [],
          },
          UGScoreRequired: {
            type: "UGScoreRequired",
            value: "",
          },
          Class12thScoreRequiredPercentage: {
            type: "Class12thScoreRequiredPercentage",
            value: "",
          },
          Class12thScoreRequiredCGPA: {
            type: "Class12thScoreRequiredCGPA",
            value: "",
          },
          Class10thScoreRequiredPercentage: {
            type: "Class10thScoreRequiredPercentage",
            value: "",
          },
          Class10thScoreRequiredCGPA: {
            type: "Class10thScoreRequiredCGPA",
            value: "",
          },
        },
      },
    },
    selectedFile: null,
    loading: false,
    StageList: [],
    stage: {
      StageNo: { value: "" },
      StageTitle: { value: "" },
      StageVenue: { value: "" },
      StartDate: { value: "" },
      EndDate: { value: "" },
      StageDescription: { value: "" },
    },
  };

  // On file select (from the pop up)
  onFileChange = (event) => {
    // Update the state
    this.setState({ selectedFile: event.target.files[0] });
  };

  eligibilityCriteriaInputHandler = (event, inputIdentifier, sub) => {
    const updatedformDataEligibilityCriteria = {
      ...this.state.formData.EligibilityCriteria.value,
    };
    // console.log(updatedformDataOpeningOverview);

    const updatedFormElement = {
      ...updatedformDataEligibilityCriteria[inputIdentifier],
    };

    if (inputIdentifier === "ProgrammesAllowed") {
      updatedFormElement.value.push(sub);
    } else if (inputIdentifier === "BranchesAllowed") {
      updatedFormElement.value.push(sub);
    } else {
      updatedFormElement.value = event.target.value;
    }
    // console.log(updatedFormElement);

    //des updating the value in the selected input element
    updatedformDataEligibilityCriteria[inputIdentifier] = updatedFormElement;

    // console.log("after adding value");
    console.log(updatedformDataEligibilityCriteria);

    this.setState({
      ...this.state,
      formData: {
        ...this.state.formData,
        EligibilityCriteria: {
          type: "EligibilityCriteria",
          value: updatedformDataEligibilityCriteria,
        },
      },
    });
  };

  openingOverviewInputHandler = (event, inputIdentifier) => {
    const updatedformDataOpeningOverview = {
      ...this.state.formData.OpeningOverview.value,
    };
    // console.log(updatedformDataOpeningOverview);

    const updatedFormElement = {
      ...updatedformDataOpeningOverview[inputIdentifier],
    };
    // console.log(updatedFormElement);

    //des updating the value in the selected input element
    updatedFormElement.value = event.target.value;
    updatedformDataOpeningOverview[inputIdentifier] = updatedFormElement;

    // console.log("after adding value");
    // console.log(updatedformDataOpeningOverview);

    this.setState({
      ...this.state,
      formData: {
        ...this.state.formData,
        OpeningOverview: {
          type: "OpeningOverview",
          value: updatedformDataOpeningOverview,
        },
      },
    });
  };

  inputChangeHandler = (event, inputIdentifier) => {
    const updatedformData = {
      ...this.state.formData,
    };

    const updatedFormElement = { ...updatedformData[inputIdentifier] };

    //des updating the value in the selected input element
    updatedFormElement.value = event.target.value;
    updatedformData[inputIdentifier] = updatedFormElement;

    this.setState({
      formData: updatedformData,
    });
  };

  onSubmitHandler = (event) => {
    event.preventDefault(); //prevent page reload

    axios
      .get("/api/jobProfile/getRandomId")
      .then((res) => {
        let newId2 = res.data.id;

        //creating formData to send to Resume put route
        const formData = {};
        for (let formElementIdentifier in this.state.formData) {
          formData[formElementIdentifier] = this.state.formData[
            formElementIdentifier
          ].value;
        }

        if (this.state.selectedFile !== null) {
          formData.FileAttached = true;
          let AttachedDocuments = [];
          let temp = {
            DocumentName: null,
          };
          temp.DocumentName = this.state.selectedFile.name;
          AttachedDocuments.push(temp);
          formData.AttachedDocuments = AttachedDocuments;
        }
        //setting correct stage list in formData
        let tempStageList = [];

        if (this.state.StageList.length > 0) {
          this.state.StageList.forEach((stage) => {
            let temp = {
              StageNo: null,
              StageTitle: null,
              StageVenue: null,
              StartDate: null,
              EndDate: null,
              StageDescription: null,
            };
            temp.StageNo = stage.StageNo.value;
            temp.StageTitle = stage.StageTitle.value;
            temp.StageVenue = stage.StageVenue.value;
            temp.StartDate = stage.StartDate.value;
            temp.EndDate = stage.EndDate.value;
            temp.StageDescription = stage.StageDescription.value;
            tempStageList.push(temp);
          });
        }
        formData.HiringWorkflow = tempStageList;

        //setting correct openingOverview in FormData
        const tempOverview = {};
        for (let formElementIdentifier in this.state.formData.OpeningOverview
          .value) {
          tempOverview[
            formElementIdentifier
          ] = this.state.formData.OpeningOverview.value[
            formElementIdentifier
          ].value;
        }
        formData.OpeningOverview = tempOverview;

        //setting correct eligibility Criteria in formData
        const tempEligibility = {};
        for (let formElementIdentifier in this.state.formData
          .EligibilityCriteria.value) {
          tempEligibility[
            formElementIdentifier
          ] = this.state.formData.EligibilityCriteria.value[
            formElementIdentifier
          ].value;
        }
        formData.EligibilityCriteria = tempEligibility;

        formData.adminAccount = this.props.adminID;
        formData.jobProfileID = newId2;
        if (formData.Dream === "on") {
          formData.Dream = true;
        } else {
          formData.Dream = false;
        }
        console.log(formData);

        //creating fileFormData to send to uploadFile route
        const fileFormData = new FormData();
        // Update the formData object
        fileFormData.append("jobProfileID", formData.jobProfileID);
        fileFormData.append("file", this.state.selectedFile);

        //creating config for axios
        const config = {
          headers: { "content-type": "multipart/form-data" },
        };

        this.setState({
          ...this.state,
          loading: true,
        });

        let postData = {
          ...formData,
        };

        let url = "/api/jobProfile/addNewJobProfile";
        axios
          .all([
            axios.post(url, postData),
            axios.post("api/jobProfile/uploadFile", fileFormData, config),
          ])
          .then(
            axios.spread((res1, res2) => {
              this.setState({
                loading: false,
              });
              console.log(res1);
              console.log(res2);
              this.props.history.push("/JobProfilesFeed");
            })
          )
          .catch(
            axios.spread((err1, err2) => {
              console.log(err1);
              console.log(err2);
              this.setState({
                loading: false,
              });
            })
          );
      })
      .catch((err) => {
        console.log("err in /api/updates/getRandomId");
        console.log(err);
      });
  };

  addStage = () => {
    var updatedStageList = [...this.state.StageList];
    // console.log(updatedStageList);
    var updatedItem = this.state.stage;
    updatedStageList.push(updatedItem);
    // console.log(updatedStageList);

    this.setState({
      StageList: updatedStageList,
      stage: {
        StageNo: { value: "" },
        StageTitle: { value: "" },
        StageVenue: { value: "" },
        StartDate: { value: "" },
        EndDate: { value: "" },
        StageDescription: { value: "" },
      },
    });
    console.log(this.state.StageList);
  };

  stageInputHandler(event, inputIdentifier) {
    var updatedStageItem = { ...this.state.stage };
    updatedStageItem[inputIdentifier].value = event.target.value;
    // console.log(updatedStageItem);
    this.setState({
      stage: updatedStageItem,
    });
  }

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
          <h5>Basic Information</h5> {/* ^^^ Basic Info starts here */}
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
            <div className={styles.formDiv}>
              <Form.Group as={Col}>
                <Form.Row>
                  <Form.Label column="sm">Application Dead Line</Form.Label>
                  <Form.Control
                    type="date"
                    placeholder="Application Dead Line"
                    required
                    size="sm"
                    onChange={(event, string) => {
                      this.inputChangeHandler(event, "ApplicationDeadLine");
                    }}
                  />
                </Form.Row>
              </Form.Group>
            </div>
            <div className={styles.formDiv}>
              <Form.Group
                as={Col}
                controlId="formGridCompanyRepresentativeMailId"
              >
                <Form.Row>
                  <Form.Label column="sm">
                    Company Representative Email Id
                  </Form.Label>
                  <Form.Control
                    type="CompanyRepresentativeMailId"
                    placeholder="Email Id"
                    required
                    size="sm"
                    onChange={(event, string) => {
                      this.inputChangeHandler(
                        event,
                        "CompanyRepresentativeMailId"
                      );
                    }}
                  />
                </Form.Row>
              </Form.Group>
            </div>
          </Row>
          <Row>
            <Col xs="auto" className="my-1">
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check
                  type="checkbox"
                  label="Dream Job? (Check for YES)"
                  as="input"
                  onChange={(event, string) => {
                    this.inputChangeHandler(event, "Dream");
                  }}
                />
              </Form.Group>
            </Col>
          </Row>
          <hr />
          <br />
          <br />
          <br />
          <h5>Job Opening Overview</h5> {/* ^^^ Job opening starts here */}
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
                      this.openingOverviewInputHandler(event, "Domain");
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
                      this.openingOverviewInputHandler(event, "JobFunctions");
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
                      this.openingOverviewInputHandler(event, "Category");
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
                    <option value="RandD" eventkey="3">
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
                      this.openingOverviewInputHandler(event, "CTCRange");
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
                      this.openingOverviewInputHandler(event, "AbsoluteCTC");
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
          <h5>About The Company</h5> {/* ^^^ About the company starts here */}
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
                    onChange={(event, string) => {
                      this.inputChangeHandler(event, "AboutCompany");
                    }}
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
                    onChange={(event, string) => {
                      this.inputChangeHandler(event, "JobDescription");
                    }}
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
                    onChange={(event, string) => {
                      this.inputChangeHandler(event, "RequiredSkills");
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
          {/* !!! This needs to be implemented properly */}
          <h5>Hiring Workflow</h5> {/* ^^^ Hiring workflow starts here */}
          <hr />
          <Row>
            <div className={styles.formDiv}>
              <Form.Group as={Col} controlId="formGridStageNo">
                <Form.Row>
                  <Form.Label column="sm">Stage Number</Form.Label>
                  <Form.Control
                    type="StageNo"
                    placeholder="e.g. 1, 2, 3, ..."
                    required
                    size="sm"
                    value={this.state.stage.StageNo.value}
                    onChange={(event, string) => {
                      this.stageInputHandler(event, "StageNo");
                    }}
                  />
                </Form.Row>
              </Form.Group>
            </div>
            {/* <i class="fas fa-plus-square fa-lg"></i> Add Workflow Stage{" "} */}
            <div className={styles.formDiv}>
              <Form.Group as={Col} controlId="formGridStageTitle">
                <Form.Row>
                  <Form.Label column="sm">Enter Stage Title</Form.Label>
                  <Form.Control
                    type="StageTitle"
                    placeholder="e.g. Interview, Test, etc..."
                    required
                    value={this.state.stage.StageTitle.value}
                    size="sm"
                    onChange={(event, string) => {
                      this.stageInputHandler(event, "StageTitle");
                    }}
                  />
                </Form.Row>
              </Form.Group>
            </div>
            <div className={styles.formDiv}>
              <Form.Group as={Col} controlId="formGridStageVenue">
                <Form.Row>
                  <Form.Label column="sm">Enter Stage Venue</Form.Label>
                  <Form.Control
                    type="StageVenue"
                    placeholder="e.g. Jaipur, Mumbai, etc..."
                    required
                    value={this.state.stage.StageVenue.value}
                    size="sm"
                    onChange={(event, string) => {
                      this.stageInputHandler(event, "StageVenue");
                    }}
                  />
                </Form.Row>
              </Form.Group>
            </div>
          </Row>
          <Row>
            <div className={styles.formDiv}>
              <Form.Group as={Col}>
                <Form.Row>
                  <Form.Label column="sm">Start Date</Form.Label>
                  <Form.Control
                    type="date"
                    placeholder="Stage Start Date"
                    value={this.state.stage.StartDate.value}
                    required
                    size="sm"
                    onChange={(event, string) => {
                      this.stageInputHandler(event, "StartDate");
                    }}
                  />
                </Form.Row>
              </Form.Group>
            </div>
            <div className={styles.formDiv}>
              <Form.Group as={Col}>
                <Form.Row>
                  <Form.Label column="sm">End Date</Form.Label>
                  <Form.Control
                    type="date"
                    placeholder="Stage End Date"
                    value={this.state.stage.EndDate.value}
                    required
                    size="sm"
                    onChange={(event, string) => {
                      this.stageInputHandler(event, "EndDate");
                    }}
                  />
                </Form.Row>
              </Form.Group>
            </div>
          </Row>
          <Row>
            <div className={styles.formDiv}>
              <Form.Group as={Col}>
                <Form.Row>
                  <Form.Label column="sm">About this Stage</Form.Label>
                  <Form.Control
                    type="TextArea"
                    placeholder="What happens in this stage?"
                    rows="5"
                    cols="50"
                    as="textarea"
                    value={this.state.stage.StageDescription.value}
                    onChange={(event, string) => {
                      this.stageInputHandler(event, "StageDescription");
                    }}
                  />
                </Form.Row>
              </Form.Group>
            </div>
            <br />
            <br />
          </Row>
          <Button variant="dark" onClick={() => this.addStage()}>
            Add Stage
          </Button>
          <hr />
          <div>
            {this.state.StageList.length === 0 ? (
              <div>No Stages Added Yet</div>
            ) : (
              this.state.StageList.map((currentStage, i) => (
                <div key={i} className={styles.stageItems}>
                  <Row>
                    <Col>
                      <b>Stage Number</b> : {currentStage.StageNo.value}
                    </Col>
                    <Col>
                      <b>Stage Title</b> : {currentStage.StageTitle.value}
                    </Col>
                    <Col>
                      <div>
                        <b>Stage Venue</b> : {currentStage.StageVenue.value}
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      Description: {currentStage.StageDescription.value}
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <div>Start Date: {currentStage.StartDate.value}</div>
                      <div>End Date: {currentStage.EndDate.value}</div>
                    </Col>
                  </Row>
                </div>
              ))
            )}
          </div>
          <br />
          <br />
          <br />
          <h5>Document Attachments</h5> {/* ^^^ Doc attachements  */}
          <hr />
          <Row>
            <div className={styles.formDiv}>
              <Form.Group as={Col}>
                <Form.Row>
                  <Form.Label column="sm">Upload Relevant Document</Form.Label>
                  <Form.File
                    Placeholder="Upload Doc"
                    size="sm"
                    onChange={this.onFileChange}
                  />
                </Form.Row>
              </Form.Group>
            </div>
          </Row>
          <hr />
          <br />
          <br />
          <br />
          <h5>Eligibility Criteria</h5> {/* ^^^ Eligibility Criteria  */}
          <hr />
          <Row>
            <div className={styles.formDiv}>
              <Form.Label as={Col}>Programmes Allowed</Form.Label>
              <Form.Group as={Col}>
                <Form.Row>
                  <Col>
                    <Form.Group controlId="formBasicCheckbox">
                      <Form.Check
                        type="checkbox"
                        label="B.tech"
                        onChange={(event, string, sub) =>
                          this.eligibilityCriteriaInputHandler(
                            event,
                            "ProgrammesAllowed",
                            "Bachelor of Technology"
                          )
                        }
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group controlId="formBasicCheckbox">
                      <Form.Check
                        type="checkbox"
                        label="M.tech"
                        onChange={(event, string, sub) =>
                          this.eligibilityCriteriaInputHandler(
                            event,
                            "ProgrammesAllowed",
                            "Master of Technology"
                          )
                        }
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group controlId="formBasicCheckbox">
                      <Form.Check
                        type="checkbox"
                        label="Ph.D"
                        onChange={(event, string, sub) =>
                          this.eligibilityCriteriaInputHandler(
                            event,
                            "ProgrammesAllowed",
                            "PHD"
                          )
                        }
                      />
                    </Form.Group>
                  </Col>
                </Form.Row>
                <Form.Row>
                  <Col>
                    <Form.Group controlId="formBasicCheckbox">
                      <Form.Check
                        type="checkbox"
                        label="B.Sc"
                        onChange={(event, string, sub) =>
                          this.eligibilityCriteriaInputHandler(
                            event,
                            "ProgrammesAllowed",
                            "Bachelor of Science"
                          )
                        }
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group controlId="formBasicCheckbox">
                      <Form.Check
                        type="checkbox"
                        label="BBA"
                        onChange={(event, string, sub) =>
                          this.eligibilityCriteriaInputHandler(
                            event,
                            "ProgrammesAllowed",
                            "Bachelor of Business Administration"
                          )
                        }
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group controlId="formBasicCheckbox">
                      <Form.Check
                        as="input"
                        type="checkbox"
                        label="LLB"
                        onChange={(event, string, sub) =>
                          this.eligibilityCriteriaInputHandler(
                            event,
                            "ProgrammesAllowed",
                            "LLB"
                          )
                        }
                      />
                    </Form.Group>
                  </Col>
                </Form.Row>
              </Form.Group>
            </div>
            <div className={styles.formDiv}>
              <Form.Label as={Col}>Branches Allowed</Form.Label>
              <Form.Group as={Col}>
                <Form.Row>
                  <Col>
                    <Form.Group controlId="formBasicCheckbox">
                      <Form.Check
                        type="checkbox"
                        label="IT"
                        onChange={(event, string, sub) =>
                          this.eligibilityCriteriaInputHandler(
                            event,
                            "BranchesAllowed",
                            "Information Technology"
                          )
                        }
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group controlId="formBasicCheckbox">
                      <Form.Check
                        type="checkbox"
                        label="CSE"
                        onChange={(event, string, sub) =>
                          this.eligibilityCriteriaInputHandler(
                            event,
                            "BranchesAllowed",
                            "Computer Science Engineering"
                          )
                        }
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group controlId="formBasicCheckbox">
                      <Form.Check
                        type="checkbox"
                        label="CCE"
                        onChange={(event, string, sub) =>
                          this.eligibilityCriteriaInputHandler(
                            event,
                            "BranchesAllowed",
                            "Computer Communication Engineering"
                          )
                        }
                      />
                    </Form.Group>
                  </Col>
                </Form.Row>
                <Form.Row>
                  <Col>
                    <Form.Group controlId="formBasicCheckbox">
                      <Form.Check
                        type="checkbox"
                        label="Mech"
                        onChange={(event, string, sub) =>
                          this.eligibilityCriteriaInputHandler(
                            event,
                            "BranchesAllowed",
                            "Me"
                          )
                        }
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group controlId="formBasicCheckbox">
                      <Form.Check
                        type="checkbox"
                        label="EEE"
                        onChange={(event, string, sub) =>
                          this.eligibilityCriteriaInputHandler(
                            event,
                            "BranchesAllowed",
                            "EEE"
                          )
                        }
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group controlId="formBasicCheckbox">
                      <Form.Check
                        type="checkbox"
                        label="ECE"
                        onChange={(event, string, sub) =>
                          this.eligibilityCriteriaInputHandler(
                            event,
                            "BranchesAllowed",
                            "ECE"
                          )
                        }
                      />
                    </Form.Group>
                  </Col>
                </Form.Row>
              </Form.Group>
            </div>
          </Row>
          <br />
          <Row>
            <div className={styles.formDiv}>
              <Form.Group as={Col} controlId="formGridUGScoreRequired">
                <Form.Row>
                  <Form.Label column="sm">
                    Under Graduate Score Required
                  </Form.Label>
                  <Form.Control
                    type="UGScoreRequired"
                    placeholder="CGPA"
                    required
                    size="sm"
                    onChange={(event, string, sub) => {
                      this.eligibilityCriteriaInputHandler(
                        event,
                        "UGScoreRequired",
                        null
                      );
                    }}
                  />
                </Form.Row>
              </Form.Group>
            </div>
              <div className={styles.formDiv}>
                <Form.Group as={Col} controlId="formGridBacklogsAllowed">
                  <Form.Row>
                  <Form.Label column="sm">Number of Backlogs Allowed</Form.Label>
                  <Form.Control
                    type="Backlogs"
                    placeholder="Enter Number"
                    required
                    size="sm"
                    onChange={(event, string) => {
                    this.inputChangeHandler(event, "Backlogs");
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
                    onChange={(event, string, sub) => {
                      this.eligibilityCriteriaInputHandler(
                        event,
                        "Class12thScoreRequiredPercentage",
                        null
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
                    onChange={(event, string, sub) => {
                      this.eligibilityCriteriaInputHandler(
                        event,
                        "Class12thScoreRequiredCGPA",
                        null
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
                    onChange={(event, string, sub) => {
                      this.eligibilityCriteriaInputHandler(
                        event,
                        "Class10thScoreRequiredPercentage",
                        null
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
                    onChange={(event, string, sub) => {
                      this.eligibilityCriteriaInputHandler(
                        event,
                        "Class10thScoreRequiredCGPA",
                        null
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
          <Button variant="success" onClick={this.onSubmitHandler}>
            Submit Data
          </Button>{" "}
          {/* ^^^ Submit Button  */}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    adminID: state.userAuth.userId,
  };
};

export default connect(mapStateToProps)(JobProfileForm);
