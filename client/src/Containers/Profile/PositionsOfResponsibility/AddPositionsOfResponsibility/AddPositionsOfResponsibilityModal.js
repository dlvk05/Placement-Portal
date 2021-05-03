import React from "react";
import { Modal, Button, Form, Row, Col, InputGroup } from "react-bootstrap";
import axios from "axios";
import { connect } from "react-redux";

class AddPositionsOfResponsibilityModal extends React.Component {
  state = {
    show: false,
    formData: {
      Title: {
        type: "Title",
        value: "",
      },
      OrganizationName: {
        type: "OrganizationName",
        value: "",
      },
      StartDate: {
        type: "StartDate",
        value: "",
      },
      EndDate: {
        type: "EndDate",
        value: "",
      },
      Description: {
        type: "Description",
        value: "",
      },
    },
    loading: false,
  };

  inputChangeHandler = (event, inputIdentifier) => {
    const updatedformData = {
      ...this.state.formData,
    };

    const updatedFormElement = { ...updatedformData[inputIdentifier] };

    //des updating the value in the selected input element
    updatedFormElement.value = event.target.value;
    updatedformData[inputIdentifier] = updatedFormElement;

    this.setState({
      formData: updatedformData,
    });
  };

  onSubmitHandler = (event) => {
    event.preventDefault(); //prevent page reload

    const formData = {};
    for (let formElementIdentifier in this.state.formData) {
      formData[formElementIdentifier] = this.state.formData[
        formElementIdentifier
      ].value;
    }

    console.log(formData);

    this.setState({
      ...this.state,
      loading: true,
    });

    let postData = {
      formData: formData,
      profileId: this.props.profileId,
    };

    let url = "/api/updateUserProfile/PositionsOfResponsibility";
    axios
      .put(url, postData)
      .then((res) => {
        console.log(res.data);

        this.setState({
          loading: false,
          show: !this.state.show,
        });
      })
      .catch((err) => {
        console.log(err);

        this.setState({
          loading: false,
          // show: !this.state.show,
        });
      });
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
          <i class="fas fa-plus"> Add Info</i>
        </a>

        <Modal show={this.state.show} onHide={this.handleShow}>
          <Modal.Header closeButton>
            <Modal.Title>Add Info</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group as={Col} controlId="formGridPositionTitle">
                <Form.Row>
                  <Form.Label column="sm">Enter Position Title</Form.Label>
                  <Form.Control
                    type="positionTitle"
                    placeholder="Enter Title"
                    required
                    size="sm"
                    onChange={(event, string) => {
                      this.inputChangeHandler(event, "Title");
                    }}
                  />
                </Form.Row>
              </Form.Group>
              <Form.Group as={Col} controlId="formGridOrganizationName">
                <Form.Row>
                  <Form.Label column="sm">
                    Enter the name of the Organization
                  </Form.Label>
                  <Form.Control
                    type="organizationName"
                    placeholder="Enter Organization Name"
                    required
                    size="sm"
                    onChange={(event, string) => {
                      this.inputChangeHandler(event, "OrganizationName");
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
                          Start Date
                        </Form.Label>
                        <InputGroup.Append>
                          <Form.Control
                            type="date"
                            placeholder="Start Date"
                            required
                            size="sm"
                            onChange={(event, string) => {
                              this.inputChangeHandler(event, "StartDate");
                            }}
                          />
                        </InputGroup.Append>
                      </InputGroup>
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group>
                      <InputGroup className="mb-3" size="sm" as={Col}>
                        <Form.Label htmlFor="" column="sm">
                          End Date
                        </Form.Label>
                        <InputGroup.Append>
                          <Form.Control
                            type="date"
                            placeholder="End Date"
                            required
                            size="sm"
                            onChange={(event, string) => {
                              this.inputChangeHandler(event, "EndDate");
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
                    Position Details
                  </Form.Label>
                  <textarea
                    name=""
                    id=""
                    cols="60"
                    rows="10"
                    onChange={(event, string) => {
                      this.inputChangeHandler(event, "Description");
                    }}
                  ></textarea>
                </Form.Row>
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleShow}>
              Close
            </Button>
            <Button variant="primary" onClick={this.onSubmitHandler}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    profileId: state.userAuth.profileId,
  };
};

export default connect(mapStateToProps)(AddPositionsOfResponsibilityModal);
