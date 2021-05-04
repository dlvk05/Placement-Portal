import React from "react";
import { Modal, Button, Form, Col, Row, InputGroup } from "react-bootstrap";
import axios from "axios";
import { connect } from "react-redux";

class AwardsModal extends React.Component {
  state = {
    show: false,
    formData: {
      Title: {
        type: "Title",
        value: this.props.awards != null ? this.props.awards.Title : "",
      },
      Issuer: {
        type: "Issuer",
        value: this.props.awards != null ? this.props.awards.Issuer : "",
      },
      IssueDate: {
        type: "IssueDate",
        value: this.props.awards != null ? this.props.awards.IssueDate : "",
      },
      Description: {
        type: "Description",
        value: this.props.awards != null ? this.props.awards.Description : "",
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
      subHeader: "Awards",
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
    return (
      <div>
        <a href="#empty" onClick={this.handleShow}>
          <i class="fas fa-plus"> {this.props.name}</i>
        </a>

        <Modal show={this.state.show} onHide={this.handleShow}>
          <Modal.Header closeButton>
            <Modal.Title>Add Award Info</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group as={Col} controlId="formGridAwardTitle">
                <Form.Row>
                  <Form.Label column="sm">Enter Award Title</Form.Label>
                  <Form.Control
                    type="awardTitle"
                    placeholder="Award Title"
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
              <Form.Row>
                <Row>
                  <Col>
                    <Form.Group>
                      <InputGroup className="mb-3" size="sm" as={Col}>
                        <Form.Label htmlFor="" column="sm">
                          Date Issued
                        </Form.Label>
                        <InputGroup.Append>
                          <Form.Control
                            type="date"
                            placeholder="Date"
                            required
                            size="sm"
                            onChange={(event, string) => {
                              this.inputChangeHandler(event, "IssueDate");
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

export default connect(mapStateToProps)(AwardsModal);
