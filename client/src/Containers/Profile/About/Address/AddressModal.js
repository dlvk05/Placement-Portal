import React from "react";
import { Modal, Button, Form, Col } from "react-bootstrap";
import axios from "axios";
import { connect } from "react-redux";

class AddressModal extends React.Component {
  state = {
    show: false,
    formData: {
      CompleteAddress: {
        type: "CompleteAddress",
        value: "",
      },
      Pincode: {
        type: "Pincode",
        value: "",
      },
      State: {
        type: "State",
        value: "",
      },
      City: {
        type: "City",
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
      subHeader: "Address",
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
            <Modal.Title>Edit Address</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridCompleteAddress">
                  <Form.Label>Complete Address</Form.Label>
                  <Form.Control
                    type="CompleteAddress"
                    placeholder="Enter CompleteAddress"
                    required
                    onChange={(event, string) => {
                      this.inputChangeHandler(event, "CompleteAddress");
                    }}
                  />
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col} controlId="formGridPincode">
                  <Form.Label>Pincode</Form.Label> <br />
                  <Form.Control
                    type="Pincode"
                    placeholder="Enter Pincode"
                    required
                    onChange={(event, string) => {
                      this.inputChangeHandler(event, "Pincode");
                    }}
                  />
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>State</Form.Label> <br />
                  <Form.Control
                    type="State"
                    placeholder="Enter State"
                    required
                    onChange={(event, string) => {
                      this.inputChangeHandler(event, "State");
                    }}
                  />
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label>City</Form.Label> <br />
                  <Form.Control
                    type="City"
                    placeholder="Enter City"
                    required
                    onChange={(event, string) => {
                      this.inputChangeHandler(event, "City");
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

export default connect(mapStateToProps)(AddressModal);
