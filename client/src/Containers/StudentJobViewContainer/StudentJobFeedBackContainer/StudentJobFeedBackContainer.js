import React from "react";
import styles from "./StudentJobFeedBackContainer.module.css";
import { Button, Form, Col } from "react-bootstrap";
import axios from "axios";

class StudentJobFeedBackContainer extends React.Component {
  state = {
    formData: {
      FeedBackText: {
        type: "FeedBackText",
        value: "",
      },
      Rating: {
        type: "Rating",
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
      formData[formElementIdentifier] =
        this.state.formData[formElementIdentifier].value;
    }

    console.log(formData);

    this.setState({
      ...this.state,
      loading: true,
    });

    let postData = {
      userAccountId: this.props.userAccountId,
      FeedBackText: formData.FeedBackText,
      Rating: formData.Rating,
      jobProfileId: this.props.currentJobProfileId,
    };

    let url = "/api/student/addFeedbackToJobProfile";
    axios
      .post(url, postData)
      .then((res) => {
        console.log(res.data);

        this.setState({
          loading: false,
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

  render() {
    return (
      <div className={styles.feedbackDiv}>
        <h5>Student Feedback</h5>
        <hr />
        <p>The FeedBack Form is currently closed</p>
        <div>
          <Form>
            <fieldset>
              <Form.Group as={Col} controlId="UserRating" sm={2}>
                <Form.Row>
                  <Form.Label column="sm">User Rating :</Form.Label>
                  <Form.Control
                    type=""
                    placeholder="Rate out of 5"
                    required
                    size="sm"
                    onChange={(event, string) => {
                      this.inputChangeHandler(event, "Rating");
                    }}
                  />
                </Form.Row>
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Row>
                  <Form.Label>Student FeedBack</Form.Label>
                  <Form.Control
                    type="TextArea"
                    placeholder="What did you think of this Job opportunity?"
                    rows="10"
                    cols="40"
                    as="textarea"
                    onChange={(event, string) => {
                      this.inputChangeHandler(event, "FeedBackText");
                    }}
                  />
                </Form.Row>
              </Form.Group>
            </fieldset>
          </Form>
          <Button onClick={this.onSubmitHandler}>Submit FeedBack</Button>
        </div>
      </div>
    );
  }
}

export default StudentJobFeedBackContainer;
