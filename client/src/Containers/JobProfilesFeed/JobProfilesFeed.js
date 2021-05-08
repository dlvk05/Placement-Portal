import React from "react";
import a from "./JobProfilesFeed.module.css";
import { Row, Col, Table, Form} from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

class JobProfilesFeed extends React.Component {
  state = {
    jobProfiles:[],
  };

  componentDidMount(){
    console.log("component did mount")
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

  render() {
    var current = new Date("2021-05-06");
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
                  </Form.Control>
                </Form.Row>
              </Form.Group>
                </div>
                <div className={a.toolbardiv}>
                  <Form.Group as={Col} controlId="formGridSearch">
                    <Form.Row>
                      <Form.Label column="sm"><i class="fas fa-search"></i> Search</Form.Label>
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
                    /* onChange={(event, string) => {
                      this.inputChangeHandler(event, "JobSector");
                      console.log("drop down is being read");
                    }} */
                  >
                    <option eventkey="none" selected disabled hidden>
                      Please Select an Option
                    </option>
                    <option value="CreatedDate" eventkey="1">
                      Created Date
                    </option>
                    <option value="JobTitle" eventkey="2">
                      Job Title
                    </option>
                    <option value="CompanyName" eventkey="3">
                      Company Name
                    </option>
                    <option value="Location" eventkey="4">
                      Location
                    </option>
                    <option value="Status" eventkey="5">
                      Status
                    </option>
                    <option value="ApplicationDeadline" eventkey="6">
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
              {this.state.jobProfiles.reverse().map((currentJob, i) => (
                <tr key={i}>
                  {/* ^^^ so later on we might have to licence this company logo */}
                  <td style={{width: "20px"}}>{/* <i class="fas fa-suitcase fa-2x"></i> */}  <img alt="company logo" src="https://img.icons8.com/color/40/000000/google-logo.png"/></td>
                  <td>
                    <Link to="">{currentJob.JobProfileTitle}</Link>
                  </td>
                  <td>{currentJob.CompanyName}</td>
                  <td>{currentJob.Location}</td>
                  <td>
                    {current > currentJob.ApplicationDeadLine
                      ? "Application Closed"
                      : "Application Open"}
                  </td>
                </tr>
              ))}
              {/*   <tr>
                          <td><i class="fab fa-google fa-2x"></i></td>
                          <td><Link to="/Job1">Chief Operating Officer</Link></td>
                          <td>Google</td>
                          <td>Pan India</td>
                          <td>Applications Open</td>
                      </tr>
                      <tr>
                          <td><i class="fab fa-apple fa-2x"></i></td>
                          <td><Link to="/Job2">Chief Executive Officer</Link></td>
                          <td>Apple</td>
                          <td>Pan India</td>
                          <td>Applications Open</td>
                      </tr> */}
            </Table>
          </div>
        </div>
      </div>
    );
  }
}

export default JobProfilesFeed;
