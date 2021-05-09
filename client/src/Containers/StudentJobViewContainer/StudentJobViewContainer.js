import React from "react";
import { Button, Form, Col} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import JobAdditionalInfoComponent from "../../Components/StudentJobViewComponents/JobAdditionalInfoComponent/JobAdditionalInfoComponent";
import JobDescriptionsComponent from "../../Components/StudentJobViewComponents/JobDescriptionsComponent/JobDescriptionsComponent";
import OpeningOverviewComponent from "../../Components/StudentJobViewComponents/OpeningOverviewComponent/OpeningOverviewComponent";
import styles from "./StudentJobViewContainer.module.css";
import HiringWorkflowComponent from "../../Components/StudentJobViewComponents/HiringWorkflowComponent/HiringWorkflowComponent";

class StudentJobViewContainer extends React.Component {
  state = {
    Backlogs: 0,
    ProgrammesAllowed: [
      {
        type: String,
      },
    ],
    BranchesAllowed: [
      {
        type: String,
      },
    ],
    UGScoreRequired: Number, //in CGPA
    Class12thScoreRequiredPercentage: Number,
    Class12thScoreRequiredCGPA: Number,
    Class10thScoreRequiredPercentage: Number,
    Class10thScoreRequiredCGPA: Number,
  };

  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.applicationButton}>
          <h6>Interested? Apply Here</h6>
          <hr />
          <Button>Apply Now</Button>
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
          <div className={styles.eligibilityDiv}>
            <h5>Eligibility Criteria</h5>
            <hr />
            <div>
                <div><b>Overall Eligibility</b> : <i class="far fa-check-circle"></i> Eligible </div>
                <br />
                <b>Placement Eligibility :</b> 
                <ul>
                    <li>Maximum of 1 offers allowed in Business Development/ Analytical category, currently has 0 offers.</li>
                    <li>Unlimited attempts allowed to obtain first offer in Business Development/ Analytical category, currently has completed 0 attempts.</li>
                    <li>Maximum of 1 offers allowed in Level: 5 job profiles, currently has 0 offers.</li>
                    <li>Unlimited attempts allowed to obtain first offer in Level: 5 job profiles, currently has completed 0 attempts.</li>
                    <li>Maximum of 3 offers allowed in placement: Campus Placements for 2020-2021, currently has 1 offers.</li>
                    <li>Unlimited attempts allowed to obtain first offer in placement: Campus Placements for 2020-2021, currently has completed 9 attempts.</li>
                    <li>Unlimited attempts allowed to obtain additional offers in placement: Campus Placements for 2020-2021, currently has completed 4 attempts.</li>
                </ul>
                <br />
                <div><b>Number of Backlogs allowed</b> : {this.state.Backlogs}</div> 
                <div><b>Course Eligibility</b> : Criteria Satisfied</div>
                <div><b>Academic Eligibility</b> : Eligible</div>
                <div><b>Other Restrictions</b> : None</div>
            </div>

          </div>
          <br />
          <div className={styles.feedbackDiv}>
              <h5>Student Feedback</h5>
              <hr />
              <div> 
                <Form>
                    <Form.Group as={Col} controlId="UserRating" sm={2}>
                        <Form.Row>
                        <Form.Label column="sm">User Rating :</Form.Label>
                        <Form.Control
                            type=""
                            placeholder="Rate out of 5"
                            required
                            size="sm"
                            onChange={(event, string) => {
                            this.inputChangeHandler(event, "Rating");
                            }}
                        />
                        </Form.Row>
                    </Form.Group>
                    <Form.Group as={Col}>
                <Form.Row>
                  <Form.Label>Student FeedBack</Form.Label>
                  <Form.Control
                    type="TextArea"
                    placeholder="What did you think of this Job opportunity?"
                    rows="10"
                    cols="40"
                    as="textarea"
                    onChange={(event, string) => {
                      this.inputChangeHandler(event, "FeedBackText");
                    }}
                  />
                </Form.Row>
              </Form.Group>
                </Form>
                <Button>Submit FeedBack</Button>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default StudentJobViewContainer;
