import React from "react";
import { Modal, Button, Form, Row, Col, InputGroup } from "react-bootstrap";
import axios from "axios";
import { connect } from "react-redux";
class AddTechnicalSkillsModal extends React.Component {
  state = {
    show: false,
    formData: {
      Skill: {
        type: "Skill",
        value: "",
      },
      Proficiency: {
        type: "Proficiency",
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
    console.log('file added');
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

    if(this.state.selectedFile!==null){
      formData.DocumentProvided=true;
      formData.FileName=this.state.selectedFile.name;
    }

    console.log(formData);
    

    //creating fileFormData to send to uploadFile route
    const fileFormData = new FormData();
    // Update the formData object
    fileFormData.append("folderName", "Profile");
    fileFormData.append("profileId", this.props.profileId);
    fileFormData.append("header", "TechnicalSkills");
    fileFormData.append("subHeader", null);
    fileFormData.append(
      "file",
      this.state.selectedFile,
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

    let url = "/api/updateUserProfile/TechnicalSkills";
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
          <i class="fas fa-plus"> {this.props.name}</i>
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
                      this.inputChangeHandler(event, "Proficiency");
                      console.log("drop down is being read");
                    }}
                  >
                    <option selected disabled hidden>Please Choose an Option</option>
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
                      onChange={this.onFileChange}
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


export default connect(mapStateToProps)(AddTechnicalSkillsModal);
