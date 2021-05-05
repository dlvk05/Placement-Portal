import React from "react";
import { Modal, Button, Form, Row, Col, InputGroup } from "react-bootstrap";
import axios from "axios";
import { connect } from "react-redux";
class XClassModal extends React.Component {
  state = {
    show: false,
    formData: {
      School: {
        type: "School",
        value: "",
      },
      Board: {
        type: "Board",
        value: "",
      },
      EducationType: {
        type: "EducationType",
        value: "",
      },
      Score: {
        type: "Score",
        value: "",
      },
      ScoreType: {
        type: "ScoreType",
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
      MarksheetProvided: {
        type: "DocumentProvided",
        value: false,
      },
      FileName: {
        type: "FileName",
        value: "",
      },
    },
    selectedFile: null,
    loading: false,
  };

  // On file select (from the pop up)
  onFileChange = (event) => {
    // Update the state
    this.setState({ selectedFile: event.target.files[0] });
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

    //creating formData to send to Resume put route
    const formData = {};
    for (let formElementIdentifier in this.state.formData) {
      formData[formElementIdentifier] = this.state.formData[
        formElementIdentifier
      ].value;
    }

    if (this.state.selectedFile !== null) {
      formData.MarksheetProvided = true;
      formData.FileName = this.state.selectedFile.name;
    }

    console.log(formData);

    //creating fileFormData to send to uploadFile route
    const fileFormData = new FormData();
    // Update the formData object
    fileFormData.append("folderName", "Profile");
    fileFormData.append("profileId", this.props.profileId);
    fileFormData.append("header", "Education");
    fileFormData.append("subHeader", "Class10th");
    fileFormData.append("file", this.state.selectedFile);

    //creating config for axios
    const config = {
      headers: { "content-type": "multipart/form-data" },
    };

    this.setState({
      ...this.state,
      loading: true,
    });

    let postData = {
      formData: formData,
      subHeader: "Class10th",
      profileId: this.props.profileId,
    };

    let url = "/api/updateUserProfile/education";
    axios
      .all([
        axios.put(url, postData),
        axios.post("api/uploadFile", fileFormData, config),
      ])
      .then(
        axios.spread((res1, res2) => {
          this.setState({
            loading: false,
            show: !this.state.show,
          });
          console.log(res1);
          console.log(res2);
          this.props.forceReload();
        })
      )
      .catch(
        axios.spread((err1, err2) => {
          console.log(err1);
          console.log(err2);
          this.setState({
            loading: false,
            // show: !this.state.show,
          });
        })
      );
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
            <Form.Group as={Col} controlId="exampleForm.SelectCustom">
              <Form.Row>
                <Form.Label column="sm">Education Type</Form.Label>
                <Form.Control
                  as="select"
                  custom
                  size="sm"
                  onChange={(event, string) => {
                    this.inputChangeHandler(event, "EducationType");
                    console.log("drop down is being read");
                  }}
                >
                  <option eventkey="none" selected disabled hidden>Please Select an Option</option>
                  <option eventkey="6">Home Schooled</option>
                  <option eventkey="7">Full Time Student</option>
                  <option eventkey="8">Distance Learning</option>
                  <option eventkey="9">Lateral Entry</option>
                </Form.Control>
              </Form.Row>
            </Form.Group>
              <Form.Group as={Col} controlId="formGridSchoolName">
                <Form.Row>
                  <Form.Label column="sm">School Name</Form.Label>
                  <Form.Control
                    type="SchoolName"
                    placeholder="Enter School Name"
                    required
                    size="sm"
                    onChange={(event, string) => {
                      this.inputChangeHandler(event, "School");
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

              <Form.Group as={Col} controlId="exampleForm.SelectCustom">
                <Form.Row>
                  <Form.Label column="sm">Score Type</Form.Label>
                  <Form.Control
                    as="select"
                    custom
                    size="sm"
                    onChange={(event, string) => {
                      this.inputChangeHandler(event, "ScoreType");
                    }}
                  >
                    <option eventkey="none" selected disabled hidden>Please Select an Option</option>
                    <option eventkey="CGPA">CGPA</option>
                    <option eventkey="Percentage">Percentage</option>
                  </Form.Control>
                </Form.Row>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridScore">
                <Form.Row>
                  <Form.Label column="sm">Score</Form.Label>
                  <Form.Control
                    type="Score"
                    placeholder="Enter Score"
                    required
                    size="sm"
                    onChange={(event, string) => {
                      this.inputChangeHandler(event, "Score");
                    }}
                  />
                </Form.Row>
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Row>
                  <Form.File
                    label="Upload X Marksheet"
                    onChange={this.onFileChange}
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
                        <InputGroup.Append>
                          <Form.Control
                            type="date"
                            placeholder="Course End Date"
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

export default connect(mapStateToProps)(XClassModal);
