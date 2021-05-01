import React from "react";
import { Modal, Button, Form, Col} from "react-bootstrap";

class AddResumesModal extends React.Component {
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
          <i class="fas fa-plus"> Add New Resume</i>
        </a>

        <Modal show={this.state.show} onHide={this.handleShow}>
          <Modal.Header closeButton>
            <Modal.Title>Add Resume Info</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group as={Col} controlId="formGridResumeTitle">
                <Form.Row>
                  <Form.Label column="sm">Enter Resume Title</Form.Label>
                  <Form.Control
                    type="resumeTitle"
                    placeholder="Resume Title"
                    required
                    size="sm"
                    onChange={(event, string) => {
                      this.inputChangeHandler(event, "resumeTitle");
                    }}
                  />
                </Form.Row>
              </Form.Group>

              <Form.Row>
                <Form.Group as={Col}>
                  <Form.Label column="sm">Upload Resume</Form.Label>
                  <Form.File as={Col} />
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

export default AddResumesModal;
