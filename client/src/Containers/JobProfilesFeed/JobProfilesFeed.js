import React from "react";
import a from './JobProfilesFeed.module.css';
import {Row, Col, Table, Form, Dropdown} from 'react-bootstrap'
import {Link} from 'react-router-dom';



class JobProfilesFeed extends React.Component{
    state={
        jobs: [
            {
                JobProfileTitle:"Chief Operating Officer",
                CompanyName:"Google",
                Location:"Pan India",
                ApplicationDeadLine:new Date("2021-06-10"),
            },
            {
                JobProfileTitle:"Chief Executive Officer",
                CompanyName:"Apple",
                Location:"Pan India",
                ApplicationDeadLine:new Date("2021-05-01")
            }
        ]
    }
     
  render(){
    var current = new Date('2021-05-06');
    // console.log(current);

    return(
      <div className={a.wrapper}>
          <div className={a.subdiv}>
              <h3>Job Profiles</h3>
              <br />
              <hr />
              <div>
                <Row>
                    {/* ^^^ fix the search/filter bar at the top */}
                    <Form inline>
                        <Dropdown>
                            <Dropdown.Toggle>
                                All Sectors
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item>Hello</Dropdown.Item>
                                <Dropdown.Item>Accounting</Dropdown.Item>
                                <Dropdown.Item>Administration</Dropdown.Item>
                                <Dropdown.Item>Advertising</Dropdown.Item>
                                <Dropdown.Item>Business Development</Dropdown.Item>
                                <Dropdown.Item>Community and Social Services</Dropdown.Item>
                                <Dropdown.Item>Consulting</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

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
                      {this.state.jobs.map((currentJob, i) => (
                          <tr key={i}>
                              <td>logo</td>
                              <td><Link to="">{currentJob.JobProfileTitle}</Link></td>
                              <td>{currentJob.CompanyName}</td>
                              <td>{currentJob.Location}</td>
                              <td>{current>currentJob.ApplicationDeadLine?"Application Closed":"Application Open"}</td>
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