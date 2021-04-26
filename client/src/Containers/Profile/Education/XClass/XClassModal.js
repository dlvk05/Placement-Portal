import React from "react";
import { Modal, Button, Form, Row, Col, InputGroup } from "react-bootstrap";

class XClassModal extends React.Component {
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
            <Modal.Title>
              Edit 10<sup>th</sup> Class Education Details{" "}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group as={Col} controlId="formGridSchoolName">
                <Form.Row>
                  <Form.Label column="sm">School Name</Form.Label>
                  <Form.Control
                    type="SchoolName"
                    placeholder="Enter School Name"
                    required
                    size="sm"
                    onChange={(event, string) => {
                      this.inputChangeHandler(event, "SchoolName");
                    }}
                  />
                </Form.Row>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridBoard">
                <Form.Row>
                  <Form.Label column="sm">Board</Form.Label> <br />
                  <Form.Control
                    type="text"
                    placeholder="Board"
                    required
                    size="sm"
                    onChange={(event, string) => {
                      this.inputChangeHandler(event, "Board");
                    }}
                  />
                </Form.Row>
              </Form.Group>

              <Row>
                <Col>
                  <Form.Label htmlFor="" column="sm">
                    Course Start Date
                  </Form.Label>
                </Col>
                <Col>
                  <Form.Label htmlFor="" column="sm">
                    Course End Date
                  </Form.Label>
                </Col>
              </Row>

              <Form.Row>
                <Row>
                  <Col>
                    <Form.Group>
                      <InputGroup className="mb-3" size="sm" as={Col}>
                        <InputGroup.Append>
                          <Form.Control
                            type="date"
                            placeholder="Course Start Date"
                            required
                            size="sm"
                            onChange={(event, string) => {
                              this.inputChangeHandler(event, "courseStartDate");
                            }}
                          />
                        </InputGroup.Append>
                      </InputGroup>
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group>
                      <InputGroup className="mb-3" size="sm" as={Col}>
                        <InputGroup.Append>
                          <Form.Control
                            type="date"
                            placeholder="Course End Date"
                            required
                            size="sm"
                            onChange={(event, string) => {
                              this.inputChangeHandler(event, "courseEndDate");
                            }}
                          />
                        </InputGroup.Append>
                      </InputGroup>
                    </Form.Group>
                  </Col>
                </Row>
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

export default XClassModal;
