import React from "react";
import { Modal, Button, Form, Col, Row, InputGroup } from "react-bootstrap";

class TestScoresModal extends React.Component {
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
          <i class="fas fa-plus"> Add Test Score Info</i>
        </a>

        <Modal show={this.state.show} onHide={this.handleShow}>
          <Modal.Header closeButton>
            <Modal.Title>Add Test Score Info</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group as={Col} controlId="formGridTestScoreTitle">
                <Form.Row>
                  <Form.Label column="sm">Enter TestScore Title</Form.Label>
                  <Form.Control
                    type="TestScoreTitle"
                    placeholder="TestScore Title"
                    required
                    size="sm"
                    onChange={(event, string) => {
                      this.inputChangeHandler(event, "TestScoreTitle");
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
              <Form.Group as={Col} controlId="formGridCertificationURL">
                <Form.Row>
                  <Form.Label column="sm">Enter Certification URL</Form.Label>
                  <Form.Control
                    type="CertificationURL"
                    placeholder="URL"
                    required
                    size="sm"
                    onChange={(event, string) => {
                      this.inputChangeHandler(event, "CertificationURL");
                    }}
                  />
                </Form.Row>
              </Form.Group>

              <Form.Group as={Col}>
                  <Form.Row>
                      <Form.Label column="sm">Date</Form.Label>
                      <Form.Control
                            type="date"
                            placeholder="End Date"
                            required
                            size="sm"
                            onChange={(event, string) => {
                              this.inputChangeHandler(event, "EndDate");
                            }}
                          />
                  </Form.Row>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridLicenceNumber">
                <Form.Row>
                  <Form.Label column="sm">Enter Licence Number</Form.Label>
                  <Form.Control
                    type="LicenceNumber"
                    placeholder="Licence Number"
                    required
                    size="sm"
                    onChange={(event, string) => {
                      this.inputChangeHandler(event, "LicenceNumber");
                    }}
                  />
                </Form.Row>
              </Form.Group>
              <Form.Group>
                <Form.Row>
                  <Form.Label htmlFor="" column="sm">
                    Certification Details
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

export default TestScoresModal;
