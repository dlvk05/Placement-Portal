import React from "react";
import { Form, Col } from "react-bootstrap";
import styles from "./LearningModuleUpload.module.css";

class LearningModuleUpload extends React.Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <h3>Learning Module Upload Form</h3>
          <hr />
          <div className={styles.formDiv}>
            <Form>
              <Form.Group as={Col} controlId="LearningModuleTitle" sm={5}>
                <Form.Row>
                  <Form.Label column="sm">Enter Learning Module Title</Form.Label>
                  <Form.Control
                    type="LearningModuleTitle"
                    placeholder="Type Module Title Here"
                    required
                    size="sm"
                    onChange={(event, string) => {
                      this.inputChangeHandler(event, "LearningModuleTitle");
                    }}
                  />
                </Form.Row>
              </Form.Group>
              <Form.Group as={Col} controlId="LearningModuleTopic" sm={5}>
                <Form.Row>
                  <Form.Label column="sm">Enter Quiz Topic</Form.Label>
                  <Form.Control
                    type="LearningModuleTopic"
                    placeholder="Type the Module Topic Here"
                    required
                    size="sm"
                    onChange={(event, string) => {
                      this.inputChangeHandler(event, "LearningModuleTopic");
                    }}
                  />
                </Form.Row>
              </Form.Group>
              <Form.Group as={Col} controlId="TotalVideos" sm={5}>
                  <Form.Row>
                  <Form.Label column="sm">Enter Total Number of Videos in the Learning Module</Form.Label>
                  <Form.Control
                      type="TotalVideos"
                      placeholder="Total No. of Videos"
                      required
                      size="sm"
                      onChange={(event, string) => {
                      this.inputChangeHandler(event, "TotalVideos");
                      }}
                  />
                  </Form.Row>
              </Form.Group>
              <Form.Group as={Col}  controlId="LearningModuleDescription" sm={8}>
                <Form.Row>
                  <Form.Label column="sm">About this Learning Module</Form.Label>
                  <Form.Control
                    type="TextArea"
                    placeholder="What will the student learn from this Module?"
                    rows="5"
                    cols="70"
                    as="textarea"
                    // value={this.state.stage.StageDescription.value}
                    onChange={(event, string) => {
                      this.stageInputHandler(event, "LearningModuleDescription");
                    }}
                  />
                </Form.Row>
              </Form.Group>
              <br />
              <Form.Group as={Col} sm={6}>
                <Form.Row>
                  <Form.Label column="sm">Upload Learning Module Excel File: </Form.Label>
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

export default LearningModuleUpload;
