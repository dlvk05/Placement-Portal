import React from "react";
import { Form, Col } from "react-bootstrap";
import styles from "./QuizUploadForm.module.css";

class QuizUploadForm extends React.Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <h3>Quiz Upload Form</h3>
          <hr />
          <div className={styles.formDiv}>
            <Form>
              <Form.Group as={Col} controlId="QuizTitle" sm={5}>
                <Form.Row>
                  <Form.Label column="sm">Enter Quiz Title</Form.Label>
                  <Form.Control
                    type="QuizTitle"
                    placeholder="Enter Quiz Title"
                    required
                    size="sm"
                    onChange={(event, string) => {
                      this.inputChangeHandler(event, "QuizTitle");
                    }}
                  />
                </Form.Row>
              </Form.Group>
              <Form.Group as={Col} controlId="QuizTopic" sm={5}>
                <Form.Row>
                  <Form.Label column="sm">Enter Quiz Topic</Form.Label>
                  <Form.Control
                    type="QuizTopic"
                    placeholder="Quiz Topic"
                    required
                    size="sm"
                    onChange={(event, string) => {
                      this.inputChangeHandler(event, "QuizTopic");
                    }}
                  />
                </Form.Row>
              </Form.Group>
              <Form.Group as={Col} controlId="MaxMarks" sm={5}>
                  <Form.Row>
                  <Form.Label column="sm">Enter Maximum Marks obtainable for this quiz (one mark for every question)</Form.Label>
                  <Form.Control
                      type="MaxMarks"
                      placeholder="Max Marks"
                      required
                      size="sm"
                      onChange={(event, string) => {
                      this.inputChangeHandler(event, "MaxMarks");
                      }}
                  />
                  </Form.Row>
              </Form.Group>
              <br />
              <Form.Group as={Col} sm={6}>
                <Form.Row>
                  <Form.Label column="sm">Upload Quiz Excel File: </Form.Label>
                  <Form.File
                    Placeholder="Upload Doc"
                    size="sm"
                    // onChange={this.onFileChange}
                  />
                </Form.Row>
              </Form.Group>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default QuizUploadForm;
