import React from "react";
import { Modal, Button, Form, Col, Row, InputGroup} from "react-bootstrap";

class AdditionalInformationModal extends React.Component {
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
          <i class="fas fa-plus"> Edit</i>
        </a>

        <Modal show={this.state.show} onHide={this.handleShow}>
          <Modal.Header closeButton>
            <Modal.Title>Add Edit Additional Info</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group as={Col} controlId="formGridStudentWhatsaapNumber">
                  <Form.Row>
                  <Form.Label column="sm">Enter Student WhatsAap Number</Form.Label>
                  <Form.Control
                      type="StudentWhatsaapNumber"
                      placeholder="WhatsAap Number"
                      required
                      size="sm"
                      onChange={(event, string) => {
                      this.inputChangeHandler(event, "StudentWhatsaapNumber");
                      }}
                  />
                  </Form.Row>
              </Form.Group>
              <Form.Group as={Col} controlId="formGridFatherName">
                  <Form.Row>
                  <Form.Label column="sm">Enter Father's Name</Form.Label>
                  <Form.Control
                      type="FatherName"
                      placeholder="Enter Father's Name"
                      required
                      size="sm"
                      onChange={(event, string) => {
                      this.inputChangeHandler(event, "FatherName");
                      }}
                  />
                  </Form.Row>
              </Form.Group>
              <Form.Group as={Col} controlId="formGridFatherContactNumber">
                  <Form.Row>
                  <Form.Label column="sm">Father's Contact Number</Form.Label>
                  <Form.Control
                      type="FatherContactNumber"
                      placeholder="Contact Number"
                      required
                      size="sm"
                      onChange={(event, string) => {
                      this.inputChangeHandler(event, "FatherContactNumber");
                      }}
                  />
                  </Form.Row>
              </Form.Group>
              <Form.Group as={Col} controlId="formGridFatherOccupation">
                  <Form.Row>
                  <Form.Label column="sm">Enter Father's Occupation</Form.Label>
                  <Form.Control
                      type="FatherOccupation"
                      placeholder="Occupation"
                      required
                      size="sm"
                      onChange={(event, string) => {
                      this.inputChangeHandler(event, "FatherOccupation");
                      }}
                  />
                  </Form.Row>
              </Form.Group>
              <Form.Group as={Col} controlId="formGridFatherEmail">
                  <Form.Row>
                  <Form.Label column="sm">Enter Father's Email</Form.Label>
                  <Form.Control
                      type="FatherEmail"
                      placeholder="Email Address"   
                      required
                      size="sm"
                      onChange={(event, string) => {
                      this.inputChangeHandler(event, "FatherEmail");
                      }}
                  />
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

export default AdditionalInformationModal;
