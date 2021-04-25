import React from "react";
import { Modal, Button, Form, Col } from "react-bootstrap";

class OverviewModal extends React.Component {
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
            <Modal.Title>Edit Overview</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="Name"
                  placeholder="Enter Name"
                  required
                  onChange={(event, string) => {
                    this.inputChangeHandler(event, "Name");
                  }}
                />
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col} controlId="formGridDOB">
                <Form.Label>Date of Birth</Form.Label> <br/>
                <input
                  type="date"
                  placeholder="Enter DOB"
                  required
                  onChange={(event, string) => {
                    this.inputChangeHandler(event, "DOB");
                  }}
                />
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col} controlId="formGridGender">
                <Form.Label>Gender</Form.Label>
                <Form.Control
                  type="Gender"
                  placeholder="Enter Gender"
                  required
                  onChange={(event, string) => {
                    this.inputChangeHandler(event, "Gender");
                  }}
                />
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col} controlId="formGridCategory">
                <Form.Label>Category</Form.Label>
                <Form.Control
                  type="Category"
                  placeholder="Enter Category"
                  required
                  onChange={(event, string) => {
                    this.inputChangeHandler(event, "Category");
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

export default OverviewModal;
