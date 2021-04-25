import React from "react";
import { Modal, Button, Form, Col } from "react-bootstrap";

class ContactDetailsModal extends React.Component {
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
          <i class="fas fa-edit"> Edit</i>
        </a>

        <Modal show={this.state.show} onHide={this.handleShow}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Contact Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridContactNumber">
                  <Form.Label>Contact Number</Form.Label>
                  <Form.Control
                    type="ContactNumber"
                    placeholder="Enter Contact Number"
                    required
                    onChange={(event, string) => {
                      this.inputChangeHandler(event, "ContactNumber");
                    }}
                  />
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Email</Form.Label> <br />
                  <Form.Control
                    type="Email"
                    placeholder="Enter Email"
                    required
                    onChange={(event, string) => {
                      this.inputChangeHandler(event, "Email");
                    }}
                  />
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col} controlId="formGridPersonalEmail">
                  <Form.Label>Personal Email</Form.Label> <br />
                  <Form.Control
                    type="PersonalEmail"
                    placeholder="Enter Personal Email"
                    required
                    onChange={(event, string) => {
                      this.inputChangeHandler(event, "PersonalEmail");
                    }}
                  />
                </Form.Group>
              </Form.Row>
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

export default ContactDetailsModal;
