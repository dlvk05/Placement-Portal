import React from "react";
import a from './LearningVideosFeed.module.css';
import {Form, Col, Table} from 'react-bootstrap';
import { Link } from "react-router-dom";

class LearningVideosFeed extends React.Component{
    state={
        videoList: [
            {
                VideoTitle: "Kpop Music Videos",
                VideoTopic: "Kpop",
                TotalVideos: 2,
                VideoLinks: [
                    "https://youtu.be/3ymwOvzhwHs",
                    "https://youtu.be/mAKsZ26SabQ"
                ]
            }
        ]
    }

  render(){
    let list;
    list = this.state.videoList.map((currentVid, i) => (
      <tr key={i}>
        <td><Link>{currentVid.VideoTitle}</Link></td>
        <td>{currentVid.VideoTopic}</td>
        <td>{currentVid.TotalVideos}</td>
        <td>Not Attempted</td>
      </tr>
    ));

    return(
      <div className={a.wrapper}>
          <div className={a.container}>
              <h3>Learning Videos</h3>
              <hr />
              <div>
            <Form inline>
              <div>
                <Form.Group as={Col} controlId="SearchQuizes">
                  <Form.Row>
                    <Form.Label column="sm">
                      <i class="fas fa-search"></i> Search{" "}
                    </Form.Label>
                    <Form.Control
                      type="QuizSearch"
                      placeholder="Type Here"
                      required
                      size="sm"
                      onChange={(event, string) => {
                        this.inputChangeHandler(event, "QuizSearch");
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
            <hr />
          <br />
          <br />
          <Table>
            <thead>
              <tr>
                <td><b>Quiz Title</b></td>
                <td><b>Quiz Topic</b></td>
                <td><b>Total Number of Videos</b></td>
                <td><b>Status</b></td>
              </tr>
            </thead>
            {list}
          </Table>
          </div>
          </div>
      </div>
    );
  }
}

export default LearningVideosFeed;