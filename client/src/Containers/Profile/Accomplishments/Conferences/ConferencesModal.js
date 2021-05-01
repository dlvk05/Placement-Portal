import React from "react";
import { Modal, Button, Form, Col, Row, InputGroup } from "react-bootstrap";

class ConferencesModal extends React.Component {
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
          <i class="fas fa-plus"> Add Conferences Info</i>
        </a>

        <Modal show={this.state.show} onHide={this.handleShow}>
          <Modal.Header closeButton>
            <Modal.Title>Add Conferences Info</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group as={Col} controlId="formGridConferencesTitle">
                <Form.Row>
                  <Form.Label column="sm">Enter Conferences Title</Form.Label>
                  <Form.Control
                    type="ConferencesTitle"
                    placeholder="Conferences Title"
                    required
                    size="sm"
                    onChange={(event, string) => {
                      this.inputChangeHandler(event, "ConferencesTitle");
                    }}
                  />
                </Form.Row>
              </Form.Group>
              <Form.Group as={Col} controlId="formGridConferenceOrganizer">
                <Form.Row>
                  <Form.Label column="sm">Enter Conference Organizer</Form.Label>
                  <Form.Control
                    type="ConferenceOrganizer"
                    placeholder="Enter Conference Organizer info"
                    required
                    size="sm"
                    onChange={(event, string) => {
                      this.inputChangeHandler(event, "ConferenceOrganizer");
                    }}
                  />
                </Form.Row>
              </Form.Group>

              <Form.Group as={Col}>
                  <Form.Row>
                      <Form.Label column="sm">Conference Date</Form.Label>
                      <Form.Control
                            type="date"
                            placeholder="ConferenceDate"
                            required
                            size="sm"
                            onChange={(event, string) => {
                              this.inputChangeHandler(event, "ConferenceDate");
                            }}
                          />
                  </Form.Row>
              </Form.Group>

              <Form.Group>
                <Form.Row>
                  <Form.Label htmlFor="" column="sm">
                  Conference Details
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

export default ConferencesModal;
