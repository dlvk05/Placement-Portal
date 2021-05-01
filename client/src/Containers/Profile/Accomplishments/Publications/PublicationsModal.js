import React from "react";
import { Modal, Button, Form, Col, Row, InputGroup } from "react-bootstrap";

class PublicationsModal extends React.Component {
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
              <Form.Group as={Col} controlId="formGridTestTitle">
                <Form.Row>
                  <Form.Label column="sm">Enter Title</Form.Label>
                  <Form.Control
                    type="Title"
                    placeholder=" Title"
                    required
                    size="sm"
                    onChange={(event, string) => {
                      this.inputChangeHandler(event, "Title");
                    }}
                  />
                </Form.Row>
              </Form.Group>
              <Form.Group as={Col} controlId="formGridPublisher">
                <Form.Row>
                  <Form.Label column="sm">Enter Publisher Name</Form.Label>
                  <Form.Control
                    type="Publisher"
                    placeholder="Publisher Name"
                    required
                    size="sm"
                    onChange={(event, string) => {
                      this.inputChangeHandler(event, "Publisher");
                    }}
                  />
                </Form.Row>
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Row>
                  <Form.Label column="sm">Publication Date</Form.Label>
                  <Form.Control
                    type="PublicaionDate"
                    placeholder="Publication Date"
                    required
                    size="sm"
                    onChange={(event, string) => {
                      this.inputChangeHandler(event, "PublicaionDate");
                    }}
                  />
                </Form.Row>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPublicationURL">
                <Form.Row>
                  <Form.Label column="sm">Enter PublicationURL</Form.Label>
                  <Form.Control
                    type="PublicationURL"
                    placeholder="PublicationURL"
                    required
                    size="sm"
                    onChange={(event, string) => {
                      this.inputChangeHandler(event, "PublicationURL");
                    }}
                  />
                </Form.Row>
              </Form.Group>
              <Form.Group>
                <Form.Row>
                  <Form.Label htmlFor="" column="sm">
                    Publication Details/Description
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

export default PublicationsModal;
