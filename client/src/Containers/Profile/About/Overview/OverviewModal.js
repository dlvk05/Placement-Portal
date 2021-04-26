import React from "react";
import { Modal, Button, Form, Col, Spinner } from "react-bootstrap";
import axios from "axios";
import { connect } from "react-redux";

class OverviewModal extends React.Component {
  state = {
    show: false,
    formData: {
      Name: {
        type: "Name",
        value: "",
      },
      DateOfBirth: {
        type: "DateOfBirth",
        value: "",
      },
      Gender: {
        type: "Gender",
        value: "",
      },
      Category: {
        type: "Category",
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
      subHeader: "Overview",
      formData: formData,
      profileId: this.props.profileId,
    };

    let url = "/api/updateUserProfile/about";
    axios
      .put(url,postData)
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
    let Loading = <Spinner/>;
    if (!this.state.loading) {
      Loading = (
        <div>
          <Button variant="secondary" onClick={this.handleShow}>
            Close
          </Button>
          <Button variant="primary" onClick={this.onSubmitHandler}>
            Save Changes
          </Button>
        </div>
      );
    }

    return (
      <div>
        <a href="#empty" onClick={this.handleShow}>
          <i class="fas fa-edit"> Edit</i>
        </a>

        <Modal show={this.state.show} onHide={this.handleShow}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Overview</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="Name"
                    placeholder="Enter Name"
                    required
                    onChange={(event, string) => {
                      this.inputChangeHandler(event, "Name");
                    }}
                  />
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col} controlId="formGridDOB">
                  <Form.Label>Date of Birth</Form.Label> <br />
                  <Form.Control
                    type="date"
                    placeholder="Enter DOB"
                    required
                    onChange={(event, string) => {
                      this.inputChangeHandler(event, "DateOfBirth");
                    }}
                  />
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col} controlId="formGridGender">
                  <Form.Label>Gender</Form.Label>
                  <Form.Control
                    type="Gender"
                    placeholder="Enter Gender"
                    required
                    onChange={(event, string) => {
                      this.inputChangeHandler(event, "Gender");
                    }}
                  />
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col} controlId="formGridCategory">
                  <Form.Label>Category</Form.Label>
                  <Form.Control
                    type="Category"
                    placeholder="Enter Category"
                    required
                    onChange={(event, string) => {
                      this.inputChangeHandler(event, "Category");
                    }}
                  />
                </Form.Group>
              </Form.Row>
            </Form>
          </Modal.Body>
          <Modal.Footer>{Loading}</Modal.Footer>
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

export default connect(mapStateToProps)(OverviewModal);
