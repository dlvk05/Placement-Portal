import React from "react";
import { Modal, Button, Form, Col } from "react-bootstrap";
import axios from "axios";
import { connect } from "react-redux";
class AddResumesModal extends React.Component {
  state = {
    show: false,
    formData: {
      DocumentName: {
        type: "DocumentName",
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

  // On file upload (click the upload button)
  onFileUpload = () => {
    // Create an object of formData
    const formData = new FormData();
    // Update the formData object
    formData.append("folderName", "Profile");
    formData.append("profileId", this.props.profileId);
    formData.append("header", "Resumes");
    formData.append("subHeader", null);
    formData.append(
      "file",
      this.state.selectedFile,
      this.state.formData.DocumentName.value
    );
    // Details of the uploaded file
    console.log(this.state.selectedFile);
    console.log("--------------------");
    console.log(formData);
    console.log(this.state.formData);
    const config = {
      headers: { "content-type": "multipart/form-data" },
    };
    // Request made to the backend api
    // Send formData object
    axios.post("api/uploadFile", formData, config).then((res) => {
      console.log(res.data);
    });
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

    console.log(formData);

    //creating fileFormData to send to uploadFile route
    const fileFormData = new FormData();
    // Update the formData object
    fileFormData.append("folderName", "Profile");
    fileFormData.append("profileId", this.props.profileId);
    fileFormData.append("header", "Resumes");
    fileFormData.append("subHeader", null);
    fileFormData.append(
      "file",
      this.state.selectedFile,
      this.state.formData.DocumentName.value
    );

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

    let url = "/api/updateUserProfile/Resumes";
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
                  <Form.Label column="sm">Enter Resume Title With its File Extension</Form.Label>
                  <Form.Control
                    type="resumeTitle"
                    placeholder="e.g. Resume1.pdf"
                    required
                    size="sm"
                    onChange={(event, string) => {
                      this.inputChangeHandler(event, "DocumentName");
                    }}
                  />
                </Form.Row>
              </Form.Group>

              <Form.Row>
                <Form.Group as={Col}>
                  <Form.Label column="sm">Upload Resume</Form.Label>
                  <Form.File as={Col} onChange={this.onFileChange} />
                </Form.Group>
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

export default connect(mapStateToProps)(AddResumesModal);
