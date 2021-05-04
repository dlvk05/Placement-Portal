import React from "react";
import { Modal, Button, Form, Col } from "react-bootstrap";
import axios from "axios";
import { connect } from "react-redux";
class TestScoresModal extends React.Component {
  state = {
    show: false,
    formData: {
      Title: {
        type: "Title",
        value: "",
      },
      ScoreObtained: {
        type: "ScoreObtained",
        value: "",
      },
      MaximumPossibleScore: {
        type: "MaximumPossibleScore",
        value: "",
      },
      RankObtained: {
        type: "RankObtained",
        value: "",
      },
      ExamDate: {
        type: "ExamDate",
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
      subHeader: "TestScores",
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
            <Modal.Title>Add Test Score Info</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group as={Col} controlId="formGridTestTitle">
                <Form.Row>
                  <Form.Label column="sm">Enter Test Title</Form.Label>
                  <Form.Control
                    type="TestTitle"
                    placeholder="Test Title"
                    required
                    size="sm"
                    onChange={(event, string) => {
                      this.inputChangeHandler(event, "Title");
                    }}
                  />
                </Form.Row>
              </Form.Group>
              <Form.Group as={Col} controlId="formGridScoreObtained">
                <Form.Row>
                  <Form.Label column="sm">Enter Score Obtianed</Form.Label>
                  <Form.Control
                    type="ScoreObtained"
                    placeholder="Score"
                    required
                    size="sm"
                    onChange={(event, string) => {
                      this.inputChangeHandler(event, "ScoreObtained");
                    }}
                  />
                </Form.Row>
              </Form.Group>
              <Form.Group as={Col} controlId="formGridMaxScore">
                <Form.Row>
                  <Form.Label column="sm">
                    Enter Maximum Possible Score
                  </Form.Label>
                  <Form.Control
                    type="MaxScore"
                    placeholder="Maximum Possible Score"
                    required
                    size="sm"
                    onChange={(event, string) => {
                      this.inputChangeHandler(event, "MaximumPossibleScore");
                    }}
                  />
                </Form.Row>
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Row>
                  <Form.Label column="sm">Date of Examination</Form.Label>
                  <Form.Control
                    type="date"
                    placeholder="Examination Date"
                    required
                    size="sm"
                    onChange={(event, string) => {
                      this.inputChangeHandler(event, "ExamDate");
                    }}
                  />
                </Form.Row>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridRank">
                <Form.Row>
                  <Form.Label column="sm">Enter Rank Obtained</Form.Label>
                  <Form.Control
                    type="Rank"
                    placeholder="Rank Obtained"
                    required
                    size="sm"
                    onChange={(event, string) => {
                      this.inputChangeHandler(event, "RankObtained");
                    }}
                  />
                </Form.Row>
              </Form.Group>
              <Form.Group>
                <Form.Row>
                  <Form.Label htmlFor="" column="sm">
                    Test Details/Description
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

export default connect(mapStateToProps)(TestScoresModal);
