import React from "react";
import { Modal, Button, Form, Col} from "react-bootstrap";

class TestScoresModal extends React.Component {
  state = {
    show: false,
    about: {
      firstName: "",
      lastName: "",
    },
  };

  handleShow = () => {
    this.setState({
      show: !this.state.show,
    });
  };

  render() {
    return (
      <div>
        <a href="#empty" onClick={this.handleShow}>
          <i class="fas fa-plus"> Add Test Score Info</i>
        </a>

        <Modal show={this.state.show} onHide={this.handleShow}>
          <Modal.Header closeButton>
            <Modal.Title>Add Test Score Info</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group as={Col} controlId="formGridTestTitle">
                <Form.Row>
                  <Form.Label column="sm">Enter Test Title</Form.Label>
                  <Form.Control
                    type="TestTitle"
                    placeholder="Test Title"
                    required
                    size="sm"
                    onChange={(event, string) => {
                      this.inputChangeHandler(event, "TestTitle");
                    }}
                  />
                </Form.Row>
              </Form.Group>
              <Form.Group as={Col} controlId="formGridScoreObtained">
                  <Form.Row>
                  <Form.Label column="sm">Enter Score Obtianed</Form.Label>
                  <Form.Control
                      type="ScoreObtained"
                      placeholder="Score"
                      required
                      size="sm"
                      onChange={(event, string) => {
                      this.inputChangeHandler(event, "ScoreObtained");
                      }}
                  />
                  </Form.Row>
              </Form.Group>
              <Form.Group as={Col} controlId="formGridMaxScore">
                  <Form.Row>
                  <Form.Label column="sm">Enter Maximum Possible Score</Form.Label>
                  <Form.Control
                      type="MaxScore"
                      placeholder="Maximum Possible Score"
                      required
                      size="sm"
                      onChange={(event, string) => {
                      this.inputChangeHandler(event, "MaxScore");
                      }}
                  />
                  </Form.Row>
              </Form.Group>


              <Form.Group as={Col}>
                  <Form.Row>
                      <Form.Label column="sm">Date of Examination</Form.Label>
                      <Form.Control
                            type="date"
                            placeholder="Examination Date"
                            required
                            size="sm"
                            onChange={(event, string) => {
                              this.inputChangeHandler(event, "ExamDate");
                            }}
                          />
                  </Form.Row>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridRank">
                <Form.Row>
                  <Form.Label column="sm">Enter Rank Obtained</Form.Label>
                  <Form.Control
                    type="Rank"
                    placeholder="Rank Obtained"
                    required
                    size="sm"
                    onChange={(event, string) => {
                      this.inputChangeHandler(event, "Rank");
                    }}
                  />
                </Form.Row>
              </Form.Group>
              <Form.Group>
                <Form.Row>
                  <Form.Label htmlFor="" column="sm">
                    Test Details/Description
                  </Form.Label>
                  <textarea name="" id="" cols="60" rows="10"></textarea>
                </Form.Row>
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleShow}>
              Close
            </Button>
            <Button variant="primary" onClick={this.handleShow}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default TestScoresModal;
