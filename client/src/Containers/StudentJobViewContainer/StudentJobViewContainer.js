import React from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import JobAdditionalInfoComponent from "../../Components/StudentJobViewComponents/JobAdditionalInfoComponent/JobAdditionalInfoComponent";
import JobDescriptionsComponent from "../../Components/StudentJobViewComponents/JobDescriptionsComponent/JobDescriptionsComponent";
import OpeningOverviewComponent from "../../Components/StudentJobViewComponents/OpeningOverviewComponent/OpeningOverviewComponent";
import styles from "./StudentJobViewContainer.module.css";
import HiringWorkflowComponent from "../../Components/StudentJobViewComponents/HiringWorkflowComponent/HiringWorkflowComponent";
import EligibilityCriteriaComponent from "../../Components/StudentJobViewComponents/EligibilityCriteriaComponent/EligibilityCriteriaComponent";
import StudentJobFeedBackContainer from "./StudentJobFeedBackContainer/StudentJobFeedBackContainer";
import axios from "axios";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

class StudentJobViewContainer extends React.Component {
  state = {
    jobProfileLoaded: false,
    studentProfile: null,
    finalEligibility: true,
    eligibilityChecked: false,
    applied: false,
    eligibilityResults: {
      DreamOffer: true,
      ItesOffers: true,
      CoreOffers: true,
      RnDOffers: true,
      NonCoreOffers: true,
      Backlogs: true,
      ProgrammesAllowed: true,
      BranchesAllowed: true,
      UGScoreRequired: true,
      Class12thScoreRequired: true,
      Class10thScoreRequired: true,
    },
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
  };

  loadInitialData = () => {
    //loading jobProfile
    let url =
      "/api/student/jobProfile/getJobProfile/" + this.props.match.params.id;
    axios
      .get(url)
      .then((res) => {
        console.log("job profile loaded");
        console.log(res.data.jobProfile);
        this.setState({
          ...this.state,
          jobProfileLoaded: true,
          jobProfile: res.data.jobProfile,
        });
      })
      .catch((err) => {
        console.log(err);
      });
    //loading student profile
    let url2 = "/student/getSpecificStudentStat/" + this.props.userId;
    axios
      .get(url2)
      .then((res) => {
        console.log("student profile loaded");
        this.setState({
          ...this.state,
          studentProfile: res.data.UserProfile,
        });
      })
      .catch((err) => console.log(err));
  };

  componentDidMount() {
    this.loadInitialData();
  }

  checkEligibility = () => {
    if (
      this.state.eligibilityChecked !== true &&
      this.state.studentProfile !== null
    ) {
      let currentSem = parseInt(
        this.state.studentProfile.Education.Current.CurrentSemester
      );
      let currentBacklogs =
        this.state.studentProfile.Education.Current.Performance[currentSem - 1]
          .BacklogOngoing;
      console.log(currentBacklogs);
      if (
        currentBacklogs > this.state.jobProfile.EligibilityCriteria.Backlogs
      ) {
        this.setState({
          ...this.state,
          eligibilityChecked: true,
          eligibilityResults: {
            ...this.state.eligibilityResults,
            Backlogs: false,
          },
          finalEligibility: false,
        });
      }
    }
  };

  jobProfileApplyHandler = () => {
    let postData = {
      jobProfileId: this.state.jobProfile._id,
      userAccountId: this.props.userId,
      userProfileId: this.props.profileId,
    };

    // console.log(postData)
    axios
      .post("/api/student/applyToJobProfile", postData)
      .then((res) => {
        console.log(res.data);
        toast.success("Applied");
        this.loadInitialData();
      })
      .catch((err) => console.log(err));
  };

  jobProfileWithdrawHandler = () => {
    let postData = {
      jobProfileId: this.state.jobProfile._id,
      userAccountId: this.props.userId,
      userProfileId: this.props.profileId,
    };
    // console.log(postData)

    axios
      .post("/api/student/withdrawFromJobProfile", postData)
      .then((res) => {
        console.log(res.data);
        toast.success("Withdrawn");
        this.loadInitialData();
      })
      .catch((err) => console.log(err));
  };

  render() {
    // console.log(this.state);`
    if (this.state.eligibilityChecked === false) {
      this.checkEligibility();
    }
    return (
      <div className={styles.wrapper}>
        <div className={styles.applicationButton}>
          <div>
            <h6>Interested? Apply Here</h6>
          </div>
          <hr />
          <div>
            <Button onClick={this.jobProfileApplyHandler}>Apply Now</Button>
          </div>
          <hr />
          <div>
            <h6>Changed Your Mind? </h6>
          </div>
          <div>
            <Button variant="danger" onClick={this.jobProfileWithdrawHandler}>
              Withdraw Application
            </Button>
          </div>
          <hr />
          <h6>The Application is closed.</h6>
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
          <EligibilityCriteriaComponent
            EligibilityCriteria={this.state.jobProfile.EligibilityCriteria}
          />
          <br />
          <StudentJobFeedBackContainer />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userId: state.userAuth.userId,
    profileId: state.userAuth.profileId,
  };
};

export default connect(mapStateToProps)(StudentJobViewContainer);
