import React from "react";
import { Modal, Button, Form, Col } from "react-bootstrap";
import axios from "axios";
import { connect } from "react-redux";

class ContactDetailsModal extends React.Component {
  state = {
    show: false,
    formData: {
      ContactNo: {
        type: "ContactNo",
        value: "",
      },
      Email: {
        type: "Email",
        value: "",
      },
      PersonalEmail: {
        type: "PersonalEmail",
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
      formData[formElementIdentifier] = {value:this.state.formData[
        formElementIdentifier
      ].value};
    }

    console.log(formData);

    this.setState({
      ...this.state,
      loading: true,
    });

    let postData = {
      subHeader: "ContactDetails",
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
          <i class="fas fa-edit"> Edit</i>
        </a>

        <Modal show={this.state.show} onHide={this.handleShow}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Contact Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridContactNumber">
                  <Form.Label>Contact Number</Form.Label>
                  <Form.Control
                    type="ContactNumber"
                    placeholder="Enter Contact Number"
                    required
                    onChange={(event, string) => {
                      this.inputChangeHandler(event, "ContactNo");
                    }}
                  />
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Email</Form.Label> <br />
                  <Form.Control
                    type="Email"
                    placeholder="Enter Email"
                    required
                    onChange={(event, string) => {
                      this.inputChangeHandler(event, "Email");
                    }}
                  />
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col} controlId="formGridPersonalEmail">
                  <Form.Label>Personal Email</Form.Label> <br />
                  <Form.Control
                    type="PersonalEmail"
                    placeholder="Enter Personal Email"
                    required
                    onChange={(event, string) => {
                      this.inputChangeHandler(event, "PersonalEmail");
                    }}
                  />
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

export default connect(mapStateToProps)(ContactDetailsModal);
