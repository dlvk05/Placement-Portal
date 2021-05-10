import React from "react";
import { Button} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import JobAdditionalInfoComponent from "../../Components/StudentJobViewComponents/JobAdditionalInfoComponent/JobAdditionalInfoComponent";
import JobDescriptionsComponent from "../../Components/StudentJobViewComponents/JobDescriptionsComponent/JobDescriptionsComponent";
import OpeningOverviewComponent from "../../Components/StudentJobViewComponents/OpeningOverviewComponent/OpeningOverviewComponent";
import styles from "./StudentJobViewContainer.module.css";
import HiringWorkflowComponent from "../../Components/StudentJobViewComponents/HiringWorkflowComponent/HiringWorkflowComponent";
import EligibilityCriteriaComponent from "../../Components/StudentJobViewComponents/EligibilityCriteriaComponent/EligibilityCriteriaComponent";
import StudentJobFeedBackContainer from "./StudentJobFeedBackContainer/StudentJobFeedBackContainer";

class StudentJobViewContainer extends React.Component {
  state = {
    
  };

  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.applicationButton}>
          <div>
            <h6>Interested? Apply Here</h6>
          </div>
          <hr />
          <div><Button>Apply Now</Button></div>
          <hr />
          <div>
            <h6>Changed Your Mind? </h6>
          </div>
          <div><Button variant="danger" disabled="false" >Withdraw Application</Button></div>
          <hr />
          <h6>The Application is closed.</h6>
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
          <EligibilityCriteriaComponent/>
          <br />
          <StudentJobFeedBackContainer/>
        </div>
      </div>
    );
  }
}

export default StudentJobViewContainer;
