import React from "react";
import { Modal, Button, Form, Col, Row, InputGroup} from "react-bootstrap";

class AwardsModal extends React.Component {
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
          <i class="fas fa-plus"> Add Awards Info</i>
        </a>

        <Modal show={this.state.show} onHide={this.handleShow}>
          <Modal.Header closeButton>
            <Modal.Title>Add Award Info</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group as={Col} controlId="formGridAwardTitle">
                  <Form.Row>
                  <Form.Label column="sm">Enter Award Title</Form.Label>
                  <Form.Control
                      type="awardTitle"
                      placeholder="Award Title"
                      required
                      size="sm"
                      onChange={(event, string) => {
                      this.inputChangeHandler(event, "awardTitle");
                      }}
                  />
                  </Form.Row>
              </Form.Group>
              <Form.Group as={Col} controlId="formGridIssuerName">
                  <Form.Row>
                  <Form.Label column="sm">Enter Issuer Name</Form.Label>
                  <Form.Control
                      type="issuerName"
                      placeholder="Enter Issuer Name"
                      required
                      size="sm"
                      onChange={(event, string) => {
                      this.inputChangeHandler(event, "issuerName");
                      }}
                  />
                  </Form.Row>
              </Form.Group>
              <Form.Row>
                <Row>
                  <Col>
                    <Form.Group>
                      <InputGroup className="mb-3" size="sm" as={Col}>
                        <Form.Label htmlFor="" column="sm">
                          Date Issued
                        </Form.Label>
                        <InputGroup.Append>
                          <Form.Control
                            type="date"
                            placeholder="Date"
                            required
                            size="sm"
                            onChange={(event, string) => {
                              this.inputChangeHandler(event, "issueDate");
                            }}
                          />
                        </InputGroup.Append>
                      </InputGroup>
                    </Form.Group>
                  </Col>
                </Row>
              </Form.Row>
              <Form.Group>
                <Form.Row>
                  <Form.Label htmlFor="" column="sm">
                    Project Details
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

export default AwardsModal;
