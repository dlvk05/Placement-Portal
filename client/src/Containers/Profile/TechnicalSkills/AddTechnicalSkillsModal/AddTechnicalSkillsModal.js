import React from "react";
import { Modal, Button, Form, Row, Col, InputGroup } from "react-bootstrap";

class AddTechnicalSkillsModal extends React.Component {
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
          <i class="fas fa-plus"> Add Skills</i>
        </a>

        <Modal show={this.state.show} onHide={this.handleShow}>
          <Modal.Header closeButton>
            <Modal.Title>Add Internship or Work Experience </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group as={Col} controlId="formGridSkill">
                <Form.Row>
                  <Form.Label column="sm">Skill Name</Form.Label>
                  <Form.Control
                    type="Skill"
                    placeholder="Enter Skill Name"
                    required
                    size="sm"
                    onChange={(event, string) => {
                      this.inputChangeHandler(event, "Skill");
                    }}
                  />
                </Form.Row>
              </Form.Group>
              <Form.Group as={Col} controlId="formGridProficiency">
                <Form.Row>
                  <Form.Label column="sm">Select Proficiency</Form.Label>
                  <Form.Control
                    as="select"
                    custom
                    onChange={(event, string) => {
                      this.inputChangeHandler(event, "proficiency");
                      console.log("drop down is being read");
                    }}
                  >
                    <option eventkey="Beginner">Beginner</option>
                    <option eventkey="Novice">Novice</option>
                    <option eventkey="Intermediate">Intermediate</option>
                    <option eventkey="Advanced">Advanced</option>
                    <option eventkey="Expert">Expert</option>
                  </Form.Control>
                </Form.Row>
              </Form.Group>
              <Form.Group>
                <Form.Row>
                  <Form.Group as={Col}>
                  <Form.Label column="sm">Upload Certification</Form.Label>
                    <Form.File
                    as={Col}
                      required
                      name="file"
                    />
                  </Form.Group>
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

export default AddTechnicalSkillsModal;
