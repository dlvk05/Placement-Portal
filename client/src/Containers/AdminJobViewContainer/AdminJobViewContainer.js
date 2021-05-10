import React from "react";
import styles from "./AdminJobViewContainer.module.css";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import JobAdditionalInfoComponent from "../../Components/StudentJobViewComponents/JobAdditionalInfoComponent/JobAdditionalInfoComponent";
import JobDescriptionsComponent from "../../Components/StudentJobViewComponents/JobDescriptionsComponent/JobDescriptionsComponent";
import OpeningOverviewComponent from "../../Components/StudentJobViewComponents/OpeningOverviewComponent/OpeningOverviewComponent";
import HiringWorkflowComponent from "../../Components/StudentJobViewComponents/HiringWorkflowComponent/HiringWorkflowComponent";
import EligibilityCriteriaComponent from "../../Components/StudentJobViewComponents/EligibilityCriteriaComponent/EligibilityCriteriaComponent";
// import StudentJobFeedBackContainer from "./StudentJobFeedBackContainer/StudentJobFeedBackContainer";

class AdminJobViewContainer extends React.Component {
  state = {};

  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.sidebar}>
          <div>
            <h6>Edit This Job Profile</h6>
          </div>
          <hr />
          <div>
            <Button>Edit</Button>
          </div>
          <hr />
          <div>
            <h6>Download Initial Applicants List</h6>
          </div>
          <div>
            <Button variant="info">
              Download
            </Button>
          </div>
          <hr />
          <div>
            <h6>Upload Selected Applicants List</h6>
          </div>
          <div>
            <Button variant="info">
              Download
            </Button>
          </div>
          <hr />
          <div>
            <h6>Download Student Feedback</h6>
          </div>
          <div>
            <Button variant="warning">
              Download
            </Button>
          </div>
          <hr />
          <div>
            <h6>Email Company Representative</h6>
          </div>
          <div>
            <Button variant="success">
              Send an Email
            </Button>
          </div>
        </div>
        <div className={styles.container}>
          <OpeningOverviewComponent />
          <br />
          <JobAdditionalInfoComponent />
          <br />
          <JobDescriptionsComponent />
          <br />
          <HiringWorkflowComponent />
          <br />
          <EligibilityCriteriaComponent />
          <br />
          {/* <StudentJobFeedBackContainer/> */}
        </div>
      </div>
    );
  }
}

export default AdminJobViewContainer;
