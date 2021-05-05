import React from "react";
import { Modal, Button, Form, Row, Col, InputGroup } from "react-bootstrap";
import axios from "axios";
import { connect } from "react-redux";

class AddWorkExperienceModal extends React.Component {
  state = {
    show: false,
    formData: {
      Company: {
        type: "Company",
        value: "",
      },
      JobTitle: {
        type: "JobTitle",
        value: "",
      },
      Location: {
        type: "Location",
        value: "",
      },
      PositionType: {
        type: "PositionType",
        value: "",
      },
      JobFunction: {
        type: "JobFunction",
        value: "",
      },
      CompanySector: {
        type: "CompanySector",
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
      MonthlySalary: {
        type: "MonthlySalary",
        value: "",
      },
      Details: {
        type: "Details",
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

    let url = "/api/updateUserProfile/workExp";
    axios
      .put(url, postData)
      .then((res) => {
        console.log(res.data);

        this.setState({
          loading: false,
          show: !this.state.show,
        });
        this.props.forceReload();
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
          <i class="fas fa-plus"> Add Internship or Work Experience</i>
        </a>

        <Modal show={this.state.show} onHide={this.handleShow}>
          <Modal.Header closeButton>
            <Modal.Title>Add Internship or Work Experience </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group as={Col} controlId="formGridCompany">
                <Form.Row>
                  <Form.Label column="sm">Company Name</Form.Label>
                  <Form.Control
                    type="Company"
                    placeholder="Enter Company Name"
                    required
                    size="sm"
                    onChange={(event, string) => {
                      this.inputChangeHandler(event, "Company");
                    }}
                  />
                </Form.Row>
              </Form.Group>
              <Form.Group as={Col} controlId="formGridJobTitle">
                <Form.Row>
                  <Form.Label column="sm">Job Title</Form.Label>
                  <Form.Control
                    type="JobTitle"
                    placeholder="Enter Job Title"
                    required
                    size="sm"
                    onChange={(event, string) => {
                      this.inputChangeHandler(event, "JobTitle");
                    }}
                  />
                </Form.Row>
              </Form.Group>
              <Form.Group as={Col} controlId="formGridLocation">
                <Form.Row>
                  <Form.Label column="sm">Location</Form.Label>
                  <Form.Control
                    type="Location"
                    placeholder="Enter Location"
                    required
                    size="sm"
                    onChange={(event, string) => {
                      this.inputChangeHandler(event, "Location");
                    }}
                  />
                </Form.Row>
              </Form.Group>
              <Form.Group as={Col} controlId="formGridPositionType">
                <Form.Row>
                  <Form.Label column="sm">Position</Form.Label>
                  <Form.Control
                    type="Position"
                    placeholder="Enter Position"
                    required
                    size="sm"
                    onChange={(event, string) => {
                      this.inputChangeHandler(event, "PositionType");
                    }}
                  />
                </Form.Row>
              </Form.Group>
              <Form.Group as={Col} controlId="formGridJobFunction">
                <Form.Row>
                  <Form.Label column="sm">Job Function</Form.Label>
                  <Form.Control
                    type="JobFunction"
                    placeholder="Enter Job Function"
                    required
                    size="sm"
                    onChange={(event, string) => {
                      this.inputChangeHandler(event, "JobFunction");
                    }}
                  />
                </Form.Row>
              </Form.Group>
              <Form.Group as={Col} controlId="formGridCompanySector">
                <Form.Row>
                  <Form.Label column="sm">Company Sector</Form.Label>
                  <Form.Control
                    type="CompanySector"
                    placeholder="Enter Company Sector"
                    required
                    size="sm"
                    onChange={(event, string) => {
                      this.inputChangeHandler(event, "CompanySector");
                    }}
                  />
                </Form.Row>
              </Form.Group>
              <Form.Group as={Col} controlId="formGridMonthlySalary">
                <Form.Row>
                  <Form.Label column="sm">Monthly Salary</Form.Label>
                  <Form.Control
                    type="MonthlySalary"
                    placeholder="Enter Monthly Salary"
                    required
                    size="sm"
                    onChange={(event, string) => {
                      this.inputChangeHandler(event, "MonthlySalary");
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
                          Course Start Date
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
                          Course End Date
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
                    Work Details
                  </Form.Label>
                  <textarea
                    name=""
                    id=""
                    cols="60"
                    rows="10"
                    onChange={(event, string) => {
                      this.inputChangeHandler(event, "Details");
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

export default connect(mapStateToProps)(AddWorkExperienceModal);
