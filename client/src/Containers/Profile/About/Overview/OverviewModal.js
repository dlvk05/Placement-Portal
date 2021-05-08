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
        value: this.props.data!=null?this.props.data.Name:"",
      },
      DateOfBirth: {
        type: "DateOfBirth",
        value: this.props.data!=null?this.props.data.DateOfBirth:"",
      },
      Gender: {
        type: "Gender",
        value: this.props.data!=null?this.props.data.Gender:"",
      },
      Category: {
        type: "Category",
        value: this.props.data!=null?this.props.data.Category:"",
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

    // console.log(formData);

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
    // console.log(this.props.data);
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
                    as='input'
                    placeholder="Enter Name"
                    value={this.state.formData.Name.value}
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
                    value={this.state.formData.DateOfBirth.value}
                    required
                    onChange={(event, string) => {
                      this.inputChangeHandler(event, "DateOfBirth");
                    }}
                  />
                </Form.Group>
              </Form.Row>

              <Form.Group controlId="exampleForm.SelectCustom">
              <Form.Label>Gender</Form.Label>
              <Form.Control
                as="select"
                custom
                // value={this.state.formData.Gender.value}
                onChange={(event, string) => {
                  this.inputChangeHandler(event, "Gender");
                  // console.log("drop down is being read");
                }}
              >
                <option eventkey="NULL" selected disabled hidden>Please select an option</option>
                <option eventkey="Male">Male</option>
                <option eventkey="Female">Female</option>
                <option eventkey="Non-Binary">Non-Binary</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="exampleForm.SelectCustom">
              <Form.Label>Categroy</Form.Label>
              <Form.Control
                as="select"
                custom
                onChange={(event, string) => {
                  this.inputChangeHandler(event, "Category");
                  // console.log("drop down is being read");
                }}
              >
                <option value="" selected disabled hidden>Please select an option</option>
                <option eventkey="6"  >General</option>
                <option eventkey="7">SC/St</option>
                <option eventkey="8">OBC</option>
              </Form.Control>
            </Form.Group>
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
