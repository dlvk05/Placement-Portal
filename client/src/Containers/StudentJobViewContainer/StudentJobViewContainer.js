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
    currentResults: null,
    jobProfileLoaded: false,
    studentProfile: null,
    finalEligibility: true,
    deadlinePassed: false,
    eligibilityChecked: false,
    checkedApplicationStatus: false,
    applied: false,
    selected: false,
    studentStats: null,
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

  checkApplicationStatus = () => {
    if (this.state.checkedApplicationStatus !== true) {
      let currentJob = this.state.jobProfile;
      let currentDate = new Date();
      let deadline = new Date(this.state.jobProfile.ApplicationDeadLine);
      let deadlinePassed = false,
        applied = false,
        selected = false;
      if (currentDate > deadline) {
        deadlinePassed = true;
      }

      if (currentJob.InitialApplications.length > 0) {
        currentJob.InitialApplications.forEach((application) => {
          if (application.userAccount === this.props.userId) {
            applied = true;
            // break;
          }
        });
      }

      if (applied && currentJob.SelectedApplications.length > 0) {
        currentJob.SelectedApplications.forEach((application) => {
          if (application.userAccount === this.props.userId) {
            selected = true;
            // break;
          }
        });
      }

      // console.log({
      //   deadlinePassed: deadlinePassed,
      //   applied: applied,
      //   selected: selected,
      // });

      this.setState({
        ...this.state,
        deadlinePassed: deadlinePassed,
        applied: applied,
        selected: selected,
        checkedApplicationStatus: true,
      });
    }
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
          checkedApplicationStatus: false,
        });
      })
      .catch((err) => {
        console.log(err);
      });

    //loading student stats
    let url2 = "/api/student/getSpecificStudentStat/" + this.props.userId;
    axios
      .get(url2)
      .then((res) => {
        console.log("student stats loaded");
        console.log(res.data);
        this.setState({
          ...this.state,

          studentStats: res.data.foundStudentStat,
          studentProfile: res.data.foundStudentStat.UserProfile,
          checkedApplicationStatus: false,
        });
      })
      .catch((err) => console.log(err));
  };

  componentDidMount() {
    this.loadInitialData();
  }

  checkEligibility = () => {
    let finalEligibility = true;
    let eligibilityResults = {
      MaxOffers3: true,
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
    };

    let currentJobProfile = this.state.jobProfile;
    if (this.state.studentProfile !== null) {
      let currentOffers = {
        ITES: 0,
        CORE: 0,
        RandD: 0,
        NonCORE: 0,
        TotalOffers: 0,
        Dream: 0,
      };
      let currentResults = {};
      currentOffers.TotalOffers =
        this.state.studentStats.JobProfilesSelectedFor.length;
      if (this.state.studentStats.JobProfilesSelectedFor.length > 0) {
        this.state.studentStats.JobProfilesSelectedFor.forEach((jobProfile) => {
          currentOffers[jobProfile.OpeningOverview.Category] =
            currentOffers[jobProfile.OpeningOverview.Category] + 1;
          //check for dreamOffer eligibility
          if (jobProfile.Dream == true) {
            currentOffers.Dream = currentOffers.Dream + 1;
            eligibilityResults.DreamOffer = false;
          }
        });
      }

      //check for Max3Offers Allowed eligibility
      if (currentOffers.TotalOffers > 3) {
        eligibilityResults.MaxOffers3 = false;
      }

      //check ITES Companies placedIn
      if (
        currentJobProfile.OpeningOverview.Category === "ITES" &&
        currentOffers.ITES >= 2
      ) {
        eligibilityResults.ItesOffers = false;
      }

      //check Core Companies placedIn
      if (
        currentJobProfile.OpeningOverview.Category === "CORE" &&
        currentOffers.CORE >= 1
      ) {
        eligibilityResults.CoreOffers = false;
      }

      //check RnD Companies placedIn
      if (
        currentJobProfile.OpeningOverview.Category === "RandD" &&
        currentOffers.RandD >= 1
      ) {
        eligibilityResults.RnDOffers = false;
      }

      //check Non-Core Companies placedIn
      if (
        currentJobProfile.OpeningOverview.Category === "NonCORE" &&
        currentOffers.NonCORE >= 2
      ) {
        eligibilityResults.NonCoreOffers = false;
      }
      //check backlogs
      let currentSem = parseInt(
        this.state.studentProfile.Education.Current.CurrentSemester
      );
      let currentBacklogs =
        this.state.studentProfile.Education.Current.Performance[currentSem - 1]
          .BacklogOngoing;
      currentResults["Backlogs"] = currentBacklogs;
      if (currentBacklogs > currentJobProfile.EligibilityCriteria.Backlogs) {
        eligibilityResults.Backlogs = false;
        finalEligibility = false;
      }

      //check programmes allowed
      let currentProgram =
        this.state.studentProfile.Education.Current.Programme;
      if (
        currentJobProfile.EligibilityCriteria.ProgrammesAllowed.length > 0 &&
        !currentJobProfile.EligibilityCriteria.ProgrammesAllowed.includes(
          currentProgram
        )
      ) {
        eligibilityResults.ProgrammesAllowed = false;
        finalEligibility = false;
      }

      //check branches allowed
      let currentBranch =
        this.state.studentProfile.Education.Current.Department;
      if (
        currentJobProfile.EligibilityCriteria.BranchesAllowed.length > 0 &&
        !currentJobProfile.EligibilityCriteria.BranchesAllowed.includes(
          currentBranch
        )
      ) {
        eligibilityResults.BranchesAllowed = false;
        finalEligibility = false;
      }
      //check UG Score required
      let currentUGScore =
        this.state.studentProfile.Education.Current.CGPAScore;
      currentResults["UGScore"] = currentUGScore;

      if (
        currentUGScore < currentJobProfile.EligibilityCriteria.UGScoreRequired
      ) {
        eligibilityResults.UGScoreRequired = false;
        finalEligibility = false;
      }
      //check 12th Score required
      let current12thScore =
        this.state.studentProfile.Education.Class12th.Score;
      currentResults["12thScore"] = current12thScore;

      if (
        current12thScore <
        currentJobProfile.EligibilityCriteria.Class12thScoreRequiredPercentage
      ) {
        eligibilityResults.Class12thScoreRequired = false;
        finalEligibility = false;
      }
      //check 10th Score required
      let current10thScore =
        this.state.studentProfile.Education.Class10th.Score;
      currentResults["10thScore"] = current10thScore;

      if (
        current10thScore <
        currentJobProfile.EligibilityCriteria.Class10thScoreRequiredPercentage
      ) {
        eligibilityResults.Class10thScoreRequired = false;
        finalEligibility = false;
      }

      console.log(eligibilityResults);
      console.log(finalEligibility);
      console.log(currentResults);

      this.setState({
        ...this.state,
        eligibilityChecked: true,
        eligibilityResults: eligibilityResults,
        finalEligibility: finalEligibility,
        currentResults: currentResults,
      });
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

  forceReload = () => {
    this.loadInitialData();
  };

  render() {
    // console.log(this.state);`
    if (this.state.jobProfileLoaded === true) {
      if (
        this.state.eligibilityChecked === false &&
        this.state.studentProfile !== null &&
        this.state.applied !== true
      ) {
        this.checkEligibility();
      }

      this.checkApplicationStatus();
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
          <StudentJobFeedBackContainer
            forceReload={this.forceReload}
            currentJobProfileId={this.state.jobProfile._id}
            userAccountId={this.props.userId}
          />
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
