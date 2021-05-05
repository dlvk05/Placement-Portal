import React from "react";
import { Modal, Button, Form, Col} from "react-bootstrap";
import axios from "axios";
import { connect } from "react-redux";
class AdditionalInformationModal extends React.Component {
  state = {
    show: false,
    formData: {
      StudentWhatsappNo: {
        type: "StudentWhatsappNo",
        value: this.props.data!=null?this.props.data.StudentWhatsappNo:"",
      },
      FatherName: {
        type: "FatherName",
        value: this.props.data!=null?this.props.data.FatherName:"",
      },
      FatherContactNo: {
        type: "FatherContactNo",
        value: this.props.data!=null?this.props.data.FatherContactNo:"",
      },
      FatherOccupation: {
        type: "FatherOccupation",
        value: this.props.data!=null?this.props.data.FatherOccupation:"",
      },
      FatherEmail: {
        type: "FatherEmail",
        value: this.props.data!=null?this.props.data.FatherEmail:"",
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
      subHeader: "AdditionalInfo",
      formData: formData,
      profileId: this.props.profileId,
    };

    let url = "/api/updateUserProfile/about";
    axios
      .put(url, postData)
      .then((res) => {
        console.log(res.data);

        this.setState({
          loading: false,
          show: !this.state.show,
        });
        this.props.forceReload()
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
          <i class="fas fa-plus"> Edit</i>
        </a>

        <Modal show={this.state.show} onHide={this.handleShow}>
          <Modal.Header closeButton>
            <Modal.Title>Add Edit Additional Info</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group as={Col} controlId="formGridStudentWhatsaapNumber">
                  <Form.Row>
                  <Form.Label column="sm">Enter Student WhatsAap Number</Form.Label>
                  <Form.Control
                      type="StudentWhatsaapNumber"
                      placeholder="WhatsAap Number"
                      required
                      value={this.state.formData.StudentWhatsappNo.value}
                      size="sm"
                      onChange={(event, string) => {
                      this.inputChangeHandler(event, "StudentWhatsappNo");
                      }}
                  />
                  </Form.Row>
              </Form.Group>
              <Form.Group as={Col} controlId="formGridFatherName">
                  <Form.Row>
                  <Form.Label column="sm">Enter Father's Name</Form.Label>
                  <Form.Control
                      type="FatherName"
                      placeholder="Enter Father's Name"
                      required
                      value={this.state.formData.FatherName.value}
                      size="sm"
                      onChange={(event, string) => {
                      this.inputChangeHandler(event, "FatherName");
                      }}
                  />
                  </Form.Row>
              </Form.Group>
              <Form.Group as={Col} controlId="formGridFatherContactNumber">
                  <Form.Row>
                  <Form.Label column="sm">Father's Contact Number</Form.Label>
                  <Form.Control
                      type="FatherContactNumber"
                      placeholder="Contact Number"
                      value={this.state.formData.FatherContactNo.value}
                      required
                      size="sm"
                      onChange={(event, string) => {
                      this.inputChangeHandler(event, "FatherContactNo");
                      }}
                  />
                  </Form.Row>
              </Form.Group>
              <Form.Group as={Col} controlId="formGridFatherOccupation">
                  <Form.Row>
                  <Form.Label column="sm">Enter Father's Occupation</Form.Label>
                  <Form.Control
                      type="FatherOccupation"
                      placeholder="Occupation"
                      value={this.state.formData.FatherOccupation.value}
                      required
                      size="sm"
                      onChange={(event, string) => {
                      this.inputChangeHandler(event, "FatherOccupation");
                      }}
                  />
                  </Form.Row>
              </Form.Group>
              <Form.Group as={Col} controlId="formGridFatherEmail">
                  <Form.Row>
                  <Form.Label column="sm">Enter Father's Email</Form.Label>
                  <Form.Control
                      type="FatherEmail"
                      placeholder="Email Address"   
                      required
                      value={this.state.formData.FatherEmail.value}
                      size="sm"
                      onChange={(event, string) => {
                      this.inputChangeHandler(event, "FatherEmail");
                      }}
                  />
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

export default connect(mapStateToProps)(AdditionalInformationModal);
