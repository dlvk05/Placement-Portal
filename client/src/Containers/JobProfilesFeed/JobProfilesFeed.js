/* eslint-disable eqeqeq */
import React from "react";
import a from "./JobProfilesFeed.module.css";
import { Row, Col, Table, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";

class JobProfilesFeed extends React.Component {
  state = {
    jobProfiles: [],
    JobSector: null,
    PositionType: null,
    Search: "",
    SortBy: null,
  };

  componentDidMount() {
    // console.log("component did mount");
    axios
      .get("/api/student/jobProfile/getAllJobProfiles")
      .then((res) => {
        console.log("jobProfiles loaded");
        console.log(res.data.jobProfiles);
        this.setState({
          jobProfiles: res.data.jobProfiles,
        });
      })
      .catch((err) => {
        console.log("error ocurred at /student/jobProfile/getAllJobProfiles");
        console.log(err);
      });
  }

  handlePageChange = (id) => {
    if (this.props.isAdmin) {
      this.props.history.push("/AdminJobView/" + id);
    } else {
      this.props.history.push("/StudentJobView/" + id);
    }
  };

  inputChangeHandler = (event, inputIdentifier) => {
    console.log(inputIdentifier);
    console.log(event.target.value);
    this.setState({
      ...this.state,
      [inputIdentifier]:
        event.target.value === "All" ? null : event.target.value,
    });
  };

  filterArray = (jobProfiles) => {
    let relevantProfiles = [];
    if (jobProfiles.length > 0) {
      // console.log("job profiles not empty");
      // console.log("filterArray called");
      jobProfiles.forEach((jobProfile) => {
        let relevant = true;

        if (
          this.state.JobSector != null &&
          jobProfile.JobSector != this.state.JobSector
        ) {
          relevant = false;
        }

        if (
          this.state.PositionType != null &&
          jobProfile.PositionType != this.state.PositionType
        ) {
          relevant = false;
        }
        if (relevant) {
          relevantProfiles.push(jobProfile);
        }
        
      });

      if (this.state.Search != "") {
        return relevantProfiles.filter((profile) => {
          if (
            profile.JobProfileTitle.toLowerCase().includes(
              this.state.Search.toLowerCase()
            ) ||
            profile.CompanyName.toLowerCase().includes(
              this.state.Search.toLowerCase()
            ) ||
            profile.Location.toLowerCase().includes(
              this.state.Search.toLowerCase()
            )
          ) {
            return true;
          }
          return false;
        });
      } else {
        return relevantProfiles;
      }
    }
    // console.log("job profiles  empty");
    return jobProfiles;
  };

  sortArray = (filteredProfiles) => {
    if (filteredProfiles.length <= 0 || this.state.SortBy == null) {
      return filteredProfiles.reverse();
    } else {
      if (
        this.state.SortBy === "JobTitle" ||
        this.state.SortBy === "CompanyName" ||
        this.state.SortBy === "Location"
      ) {
        filteredProfiles.sort((a, b) => {
          let fa = a[this.state.SortBy].toLowerCase(),
            fb = b[this.state.SortBy].toLowerCase();

          if (fa < fb) {
            return -1;
          }
          if (fa > fb) {
            return 1;
          }
          return 0;
        });
      } else if (this.state.SortBy === "createdOn") {
        filteredProfiles.sort((a, b) => {
          let fa = new Date(a[this.state.SortBy]),
            fb = new Date(b[this.state.SortBy]);

          return fa - fb;
        });
      } else {
        //sorted by application deadline
        //the closer deadline objects come first
        filteredProfiles.sort((a, b) => {
          let fa = new Date(a[this.state.SortBy]),
            fb = new Date(b[this.state.SortBy]);

          return fa - fb;
        });
      }
      return filteredProfiles;
    }
  };

  



  render() {
    let filteredJobProfiles = [];
    filteredJobProfiles = this.filterArray(this.state.jobProfiles);
    // let sortedFilteredArray = [...filteredJobProfiles];
    this.sortArray(filteredJobProfiles);
    var current = new Date("2021-05-06");
    let feed =
      filteredJobProfiles.length === 0 ? (
        <div>Nothing to show</div>
      ) : (
        filteredJobProfiles.map((currentJob, i) => (
          
          <tr key={i}>
            {/* ^^^ so later on we might have to licence this company logo */}
            <td style={{ width: "20px" }}>
              {/* <i class="fas fa-suitcase fa-2x"></i> */}{" "}
              <img
                alt="company logo"
                src="https://img.icons8.com/color/40/000000/google-logo.png"
              />
            </td>
            <td>
              <Link onClick={() => this.handlePageChange(currentJob._id)}>
                {currentJob.JobProfileTitle}
              </Link>
            </td>
            <td>{currentJob.CompanyName}</td>
            <td>{currentJob.Location}</td>
            <td>
              "In Works"
            </td>
          </tr>
        ))
      );

    // console.log(current);

    return (
      <div className={a.wrapper}>
        <div className={a.subdiv}>
          <h3>Job Profiles</h3>
          <br />
          <hr />
          <div>
            <Row>
              {/* ^^^ fix the search/filter bar at the top */}
              <Form inline>
                <div className={a.toolbardiv}>
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
                        <option
                          value="Community and Social Services"
                          eventkey="5"
                        >
                          Community and Social Services
                        </option>
                        <option value="Consulting" eventkey="6">
                          Consulting
                        </option>
                        <option value={null} eventkey="7">
                          All
                        </option>
                      </Form.Control>
                    </Form.Row>
                  </Form.Group>
                </div>
                <div className={a.toolbardiv}>
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
                        <option value={null} eventkey="5">
                          All
                        </option>
                      </Form.Control>
                    </Form.Row>
                  </Form.Group>
                </div>
                <div className={a.toolbardiv}>
                  <Form.Group as={Col} controlId="formGridSearch">
                    <Form.Row>
                      <Form.Label column="sm">
                        <i class="fas fa-search"></i> Search
                      </Form.Label>
                      <Form.Control
                        type="Search"
                        placeholder="Type Here..."
                        required
                        size="sm"
                        onChange={(event, string) => {
                          this.inputChangeHandler(event, "Search");
                        }}
                      />
                    </Form.Row>
                  </Form.Group>
                </div>
                <div>
                  <Form.Group controlId="exampleForm.SelectCustom" as={Col}>
                    <Form.Row>
                      <Form.Label column="sm">Sort By</Form.Label>
                      <Form.Control
                        as="select"
                        custom
                        size="sm"
                        onChange={(event, string) => {
                          this.inputChangeHandler(event, "SortBy");
                          console.log("drop down is being read");
                        }}
                      >
                        <option eventkey="none" selected disabled hidden>
                          Please Select an Option
                        </option>
                        <option value="createdOn" eventkey="1">
                          Created Date
                        </option>
                        <option value="JobProfileTitle" eventkey="2">
                          Job Title
                        </option>
                        <option value="CompanyName" eventkey="3">
                          Company Name
                        </option>
                        <option value="Location" eventkey="4">
                          Location
                        </option>
                        <option value="ApplicationDeadLine" eventkey="5">
                          Application Deadline
                        </option>
                      </Form.Control>
                    </Form.Row>
                  </Form.Group>
                </div>
              </Form>
            </Row>
          </div>
          <hr />
          <br />
          <br />
          <div>
            <Table>
              <thead>
                <tr>
                  <th></th>
                  <th>Job Domain</th>
                  <th>Company</th>
                  <th>Location</th>
                  <th>status</th>
                </tr>
              </thead>
              {feed}
            </Table>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAdmin: state.userAuth.isAdmin,
  };
};

export default connect(mapStateToProps)(JobProfilesFeed);
