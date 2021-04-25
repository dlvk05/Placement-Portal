import React from "react";
import { Modal, Button, Form, Col } from "react-bootstrap";

class AddressModal extends React.Component {
  state = {
    show: false,
    about: {
      firstName: "",
      lastName: "",
    },
  };

  handleShow = () => {
      this.setState({
          show: !this.state.show
      })
  }


  render() {
    return (
      <div>
        <a href="#empty" onClick={this.handleShow}>
        <i class="fas fa-edit"> Edit</i>
        </a>

        <Modal show={this.state.show} onHide={this.handleShow}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Address</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridCompleteAddress">
                <Form.Label>Complete Address</Form.Label>
                <Form.Control
                  type="CompleteAddress"
                  placeholder="Enter CompleteAddress"
                  required
                  onChange={(event, string) => {
                    this.inputChangeHandler(event, "CompleteAddress");
                  }}
                />
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col} controlId="formGridPincode">
                <Form.Label>Pincode</Form.Label> <br/>
                <Form.Control
                  type="Pincode"
                  placeholder="Enter Pincode"
                  required
                  onChange={(event, string) => {
                    this.inputChangeHandler(event, "Pincode");
                  }}
                />
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col} controlId="formGridState">
                <Form.Label>State</Form.Label> <br/>
                <Form.Control
                  type="State"
                  placeholder="Enter State"
                  required
                  onChange={(event, string) => {
                    this.inputChangeHandler(event, "State");
                  }}
                />
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>City</Form.Label> <br/>
                <Form.Control
                  type="City"
                  placeholder="Enter City"
                  required
                  onChange={(event, string) => {
                    this.inputChangeHandler(event, "City");
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

export default AddressModal;
