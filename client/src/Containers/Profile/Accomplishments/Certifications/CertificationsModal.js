import React from "react";
import { Modal, Button, Form, Col} from "react-bootstrap";
import axios from "axios";
import { connect } from "react-redux";
class CertificationsModal extends React.Component {
  state = {
    show: false,
    formData: {
      Title: {
        type: "Title",
        value: "",
      },
      Issuer: {
        type: "Issuer",
        value: "",
      },
      CertificationURL: {
        type: "CertificationURL",
        value: "",
      },
      CertificationDate: {
        type: "CertificationDate",
        value: "",
      },
      LicenceNumber: {
        type: "LicenceNumber",
        value: "",
      },
      Description: {
        type: "Description",
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
      subHeader: "Certifications",
      profileId: this.props.profileId,
    };

    let url = "/api/updateUserProfile/Accomplishments";
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
          <i class="fas fa-plus">{this.props.name} </i>
        </a>

        <Modal show={this.state.show} onHide={this.handleShow}>
          <Modal.Header closeButton>
            <Modal.Title>Add Certification Info</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group as={Col} controlId="formGridCertificationTitle">
                <Form.Row>
                  <Form.Label column="sm">Enter Certification Title</Form.Label>
                  <Form.Control
                    type="certificationTitle"
                    placeholder="Certification Title"
                    required
                    size="sm"
                    onChange={(event, string) => {
                      this.inputChangeHandler(event, "Title");
                    }}
                  />
                </Form.Row>
              </Form.Group>
              <Form.Group as={Col} controlId="formGridIssuerName">
                <Form.Row>
                  <Form.Label column="sm">Enter Issuer Name</Form.Label>
                  <Form.Control
                    type="issuerName"
                    placeholder="Enter Issuer Name"
                    required
                    size="sm"
                    onChange={(event, string) => {
                      this.inputChangeHandler(event, "Issuer");
                    }}
                  />
                </Form.Row>
              </Form.Group>
              <Form.Group as={Col} controlId="formGridCertificationURL">
                <Form.Row>
                  <Form.Label column="sm">Enter Certification URL</Form.Label>
                  <Form.Control
                    type="CertificationURL"
                    placeholder="URL"
                    required
                    size="sm"
                    onChange={(event, string) => {
                      this.inputChangeHandler(event, "CertificationURL");
                    }}
                  />
                </Form.Row>
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Row>
                  <Form.Label column="sm">Date</Form.Label>
                  <Form.Control
                    type="date"
                    placeholder="End Date"
                    required
                    size="sm"
                    onChange={(event, string) => {
                      this.inputChangeHandler(event, "CertificationDate");
                    }}
                  />
                </Form.Row>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridLicenceNumber">
                <Form.Row>
                  <Form.Label column="sm">Enter Licence Number</Form.Label>
                  <Form.Control
                    type="LicenceNumber"
                    placeholder="Licence Number"
                    required
                    size="sm"
                    onChange={(event, string) => {
                      this.inputChangeHandler(event, "LicenceNumber");
                    }}
                  />
                </Form.Row>
              </Form.Group>
              <Form.Group>
                <Form.Row>
                  <Form.Label htmlFor="" column="sm">
                    Certification Details
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


export default connect(mapStateToProps)(CertificationsModal);
