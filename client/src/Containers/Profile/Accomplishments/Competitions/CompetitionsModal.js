import React from "react";
import { Modal, Button, Form, Col, Row, InputGroup } from "react-bootstrap";

class CompetitionsModal extends React.Component {
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
          <i class="fas fa-plus"> Add Competitions Info</i>
        </a>

        <Modal show={this.state.show} onHide={this.handleShow}>
          <Modal.Header closeButton>
            <Modal.Title>Add Competitions Info</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group as={Col} controlId="formGridCompetitionTitle">
                <Form.Row>
                  <Form.Label column="sm">Enter Competition Title</Form.Label>
                  <Form.Control
                    type="CompetitionTitle"
                    placeholder="Competition Title"
                    required
                    size="sm"
                    onChange={(event, string) => {
                      this.inputChangeHandler(event, "CompetitionTitle");
                    }}
                  />
                </Form.Row>
              </Form.Group>
              <Form.Group as={Col} controlId="formGridPosition">
                <Form.Row>
                  <Form.Label column="sm">Enter Position</Form.Label>
                  <Form.Control
                    type="Position"
                    placeholder="Enter Position"
                    required
                    size="sm"
                    onChange={(event, string) => {
                      this.inputChangeHandler(event, "Position");
                    }}
                  />
                </Form.Row>
              </Form.Group>

              <Form.Group as={Col}>
                  <Form.Row>
                      <Form.Label column="sm">Competition Date</Form.Label>
                      <Form.Control
                            type="date"
                            placeholder="CompetitionDate"
                            required
                            size="sm"
                            onChange={(event, string) => {
                              this.inputChangeHandler(event, "CompetitionDate");
                            }}
                          />
                  </Form.Row>
              </Form.Group>

              <Form.Group>
                <Form.Row>
                  <Form.Label htmlFor="" column="sm">
                  Competition Details
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

export default CompetitionsModal;
