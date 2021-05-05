import React from "react";
import { Modal, Button, Form, Row, Col, InputGroup } from "react-bootstrap";
import axios from "axios";
import { connect } from "react-redux";
class AddProjectsModal extends React.Component {
  state = {
    show: false,
    formData: {
      Title: {
        type: "Title",
        value: "",
      },
      ProjectDomain: {
        type: "ProjectDomain",
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
      DocumentProvided: {
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
      formData.DocumentProvided = true;
      formData.FileName = this.state.selectedFile.name;
    }

    console.log(formData);

    //creating fileFormData to send to uploadFile route
    const fileFormData = new FormData();
    // Update the formData object
    fileFormData.append("folderName", "Profile");
    fileFormData.append("profileId", this.props.profileId);
    fileFormData.append("header", "Projects");
    fileFormData.append("subHeader", null);
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
      profileId: this.props.profileId,
    };

    let url = "/api/updateUserProfile/Projects";
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
      <div id="AddProjectsModal">
        <a href="#empty" onClick={this.handleShow}>
          <i class="fas fa-plus"> {this.props.name}</i>
        </a>

        <Modal show={this.state.show} onHide={this.handleShow}>
          <Modal.Header closeButton>
            <Modal.Title>Add Info</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group as={Col} controlId="formGridProjectTitle">
                <Form.Row>
                  <Form.Label column="sm">Enter Project Title</Form.Label>
                  <Form.Control
                    type="projectTitle"
                    placeholder="Project Title"
                    required
                    size="sm"
                    onChange={(event, string) => {
                      this.inputChangeHandler(event, "Title");
                    }}
                  />
                </Form.Row>
              </Form.Group>
              <Form.Group as={Col} controlId="formGridProjectDomain">
                <Form.Row>
                  <Form.Label column="sm">Enter Project Domain</Form.Label>
                  <Form.Control
                    type="projectDomain"
                    placeholder="Project Domain"
                    required
                    size="sm"
                    onChange={(event, string) => {
                      this.inputChangeHandler(event, "ProjectDomain");
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
                    Project Details
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
              <Form.Group as={Col}>
                <Form.Row>
                  <Form.Label column="sm">
                    Upload Project Certification
                  </Form.Label>
                  <Form.File as={Col} onChange={this.onFileChange} />
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

export default connect(mapStateToProps)(AddProjectsModal);
