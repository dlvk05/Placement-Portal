import React from "react";
import styles from "./AdminJobViewContainer.module.css";
import { Button, Col, Form, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import JobAdditionalInfoComponent from "../../Components/StudentJobViewComponents/JobAdditionalInfoComponent/JobAdditionalInfoComponent";
import JobDescriptionsComponent from "../../Components/StudentJobViewComponents/JobDescriptionsComponent/JobDescriptionsComponent";
import OpeningOverviewComponent from "../../Components/StudentJobViewComponents/OpeningOverviewComponent/OpeningOverviewComponent";
import HiringWorkflowComponent from "../../Components/StudentJobViewComponents/HiringWorkflowComponent/HiringWorkflowComponent";
import { connect } from "react-redux";

import axios from "axios";
import AdminEligibilityCriteriaComponent from "../../Components/AdminEligibilityCriteriaComponent/AdminEligibilityCriteriaComponent";
var fileDownload = require("js-file-download");

class AdminJobViewContainer extends React.Component {
  state = {
    jobProfile: {
      //OPENINGOVERVIEWCOMPONENT
      OpeningOverview: {},
      CompanyName: String,
      Location: String,

      //JOBADDITIONALINFOCOMPONENT
      JobProfileTitle: "",
      JobSector: "",
      Dream: "",
      PositionType: "",
      ApplicationDeadLine: "",
      AttachedDocuments: [{ DocumentName: "" }],

      //JOBDESCRIPTIONCOMPONENT
      AboutCompany: "",
      JobDescription: "",
      RequiredSkills: "",

      //HIRINGWORKFLOWCOMPONENT
      HiringWorkflow: [],

      //ELIGIBILITYCRITERIACOMPONENT
      EligibilityCriteria: {},
    },
    //FOR ADMIN MODAL
    show: false,
    deadlinePassed: false,
    finalSelectionsDone: false,
    checkedApplicationStatus: false,
    jobProfileLoaded: false,
    selectedFile: null,
  };

  loadInitialDate = () => {
    let url = "/api/jobProfile/getJobProfile/" + this.props.match.params.id;
    axios
      .get(url)
      .then((res) => {
        console.log(res.data);
        this.setState({
          jobProfile: res.data.jobProfile,
          jobProfileLoaded: true,
          checkedApplicationStatus: false,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  componentDidMount() {
    this.loadInitialDate();
  }

  checkApplicationStatus = () => {
    if (this.state.checkedApplicationStatus !== true) {
      let currentJob = this.state.jobProfile;
      let currentDate = new Date();
      let deadline = new Date(this.state.jobProfile.ApplicationDeadLine);
      let finalSelectionsDone = false;
      let deadlinePassed = false;
      if (currentDate > deadline) {
        deadlinePassed = true;
      }

      if (currentJob.SelectedApplications.length > 0) {
        finalSelectionsDone = true;
      }

      console.log({
        deadlinePassed: deadlinePassed,
        finalSelectionsDone: finalSelectionsDone,
      });

      this.setState({
        ...this.state,
        deadlinePassed: deadlinePassed,
        checkedApplicationStatus: true,
        finalSelectionsDone: finalSelectionsDone,
      });
    }
  };

  handleShow = () => {
    this.setState({
      show: !this.state.show,
    });
  };

  jobDeleteHandler = () => {
    let url = "/api/jobProfile/deleteSpecificJobProfile";
    let postData = {
      jobProfileId: this.state.jobProfile._id,
    };
    axios.post(url, postData).then((res) => {
      this.history.push("/JobProfilesFeed");
    });
  };

  downloadInitialApplicantsHandler = () => {
    let fileName =
      this.state.jobProfile.CompanyName +
      "_" +
      this.state.jobProfile.JobProfileTitle +
      "_" +
      "Applicants.zip";
    let url = "/api/jobProfile/getApplicantList/" + this.state.jobProfile._id;
    axios({
      url: url,
      method: "GET",
      responseType: "blob",
    }).then((res) => {
      fileDownload(res.data, fileName);
      console.log("file downloaded");
    });
  };

  render() {
    console.log(this.state);
    return (
      <div className={styles.wrapper}>
        <div className={styles.sidebar}>
          <div>
            <h6>Delete This Job Profile</h6>
          </div>
          <hr />
          <div>
            <Button variant="danger" onClick={this.jobDeleteHandler}>
              Delete
            </Button>
          </div>
          <hr />
          <div>
            <h6>Download Initial Applicants List</h6>
          </div>
          <div>
            <Button
              variant="info"
              onClick={this.downloadInitialApplicantsHandler}
            >
              Download
            </Button>
          </div>
          <hr />
          <div>
            <h6>Upload Selected Applicants List</h6>
          </div>
          <div>
            <Button variant="info" onClick={this.handleShow}>
              Upload
            </Button>
            <div>
              <Modal show={this.state.show} onHide={this.handleShow}>
                <Modal.Header closeButton>
                  <Modal.Title>
                    Upload List of Final Selects (selects.xlsx)
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form>
                    <Form.Group as={Col} sm={6}>
                      <Form.Row>
                        <Form.Label column="sm">Upload File: </Form.Label>
                        <Form.File
                          Placeholder="Upload Doc"
                          size="sm"
                          // onChange={this.onFileChange}
                        />
                      </Form.Row>
                    </Form.Group>
                  </Form>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={this.handleShow}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={this.handleShow}>
                    Upload and Submit
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
          </div>
          <hr />
          <div>
            <h6>Download Student Feedback</h6>
          </div>
          <div>
            <Button variant="warning">Download</Button>
          </div>
          <hr />
          <div>
            <h6>
              <span style={{ display: "flex" }}>
                Send Applicants List to <br /> Company Representative
              </span>
            </h6>
          </div>
          <div>
            <Button variant="success">Send</Button>
          </div>
        </div>
        <div className={styles.container}>
          <OpeningOverviewComponent
            openingOverview={this.state.jobProfile.OpeningOverview}
            companyName={this.state.jobProfile.CompanyName}
            location={this.state.jobProfile.Location}
          />
          <br />
          <JobAdditionalInfoComponent
            jobProfileTitle={this.state.jobProfile.JobProfileTitle}
            jobSector={this.state.jobProfile.JobSector}
            dream={this.state.jobProfile.Dream}
            positionType={this.state.jobProfile.PositionType}
            applicationDeadLine={this.state.jobProfile.ApplicationDeadLine}
            attachedDocuments={
              this.state.jobProfile.AttachedDocuments[0].DocumentName
            }
          />
          <br />
          <JobDescriptionsComponent
            AboutCompany={this.state.jobProfile.AboutCompany}
            JobDescription={this.state.jobProfile.JobDescription}
            RequiredSkills={this.state.jobProfile.RequiredSkills}
          />
          <br />
          <HiringWorkflowComponent
            HiringWorkflow={this.state.jobProfile.HiringWorkflow}
          />
          <br />
          <AdminEligibilityCriteriaComponent
            EligibilityCriteria={this.state.jobProfile.EligibilityCriteria}
          />
          <br />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userId: state.userAuth.userId,
  };
};

export default connect(mapStateToProps)(AdminJobViewContainer);
