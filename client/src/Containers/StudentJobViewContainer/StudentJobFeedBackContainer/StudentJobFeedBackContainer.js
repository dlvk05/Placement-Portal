import React from "react";
import styles from "./StudentJobFeedBackContainer.module.css";
import { Button, Form, Col } from "react-bootstrap";

class StudentJobFeedBackContainer extends React.Component {
  render() {
    return (
      <div className={styles.feedbackDiv}>
        <h5>Student Feedback</h5>
        <hr />
        <p>The FeedBack Form is currently closed</p>
        <div>
          <Form>
            <fieldset disabled>
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
            </fieldset>
          </Form>
          <Button>Submit FeedBack</Button>
        </div>
      </div>
    );
  }
}

export default StudentJobFeedBackContainer;
