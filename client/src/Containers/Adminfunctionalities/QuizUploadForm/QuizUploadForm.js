import React from "react";
import { Form, Col, Button } from "react-bootstrap";
import styles from "./QuizUploadForm.module.css";
import axios from "axios";
import { connect } from "react-redux";
import readXlsxFile from "read-excel-file";

class QuizUploadForm extends React.Component {
  state = {
    formData: {
      QuizTitle: {
        type: "QuizTitle",
        value: "",
      },
      QuizTopic: {
        type: "QuizTopic",
        value: "",
      },
      MaxMarks: {
        type: "MaxMarks",
        value: "",
      },
      AdminAccount: {
        type: "AdminAccount",
        value: "",
      },
      QuizBody: {
        type: "QuizBody",
        value: "",
      },
    },
    selectedFile: null,
    loading: false,
  };

  // On file select (from the pop up)
  onFileChange = (event) => {
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
      formData[formElementIdentifier] =
        this.state.formData[formElementIdentifier].value;
    }
    formData.AdminAccount = this.props.adminID;
    let newQuizBody = [];
    //create and assign quiz body from xlsx
    readXlsxFile(this.state.selectedFile).then((rows) => {
      let i;
      for (i = 1; i < rows.length; i++) {
        let temp = {
          question: rows[i][0],
          option1: rows[i][1],
          option2: rows[i][2],
          option3: rows[i][3],
          option4: rows[i][4],
          correctOption: rows[i][5],
        };
        newQuizBody.push(temp);
      }
      formData.QuizBody = newQuizBody;

      console.log(formData);

      axios
        .post("/api/quiz/addNewQuiz", formData)
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => console.log(err));
    });
  };

  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <h3>Quiz Upload Form</h3>
          <hr />
          <div className={styles.formDiv}>
            <Form>
              <Form.Group as={Col} controlId="QuizTitle" sm={5}>
                <Form.Row>
                  <Form.Label column="sm">Enter Quiz Title</Form.Label>
                  <Form.Control
                    type="QuizTitle"
                    placeholder="Enter Quiz Title"
                    required
                    size="sm"
                    onChange={(event, string) => {
                      this.inputChangeHandler(event, "QuizTitle");
                    }}
                  />
                </Form.Row>
              </Form.Group>
              <Form.Group as={Col} controlId="QuizTopic" sm={5}>
                <Form.Row>
                  <Form.Label column="sm">Enter Quiz Topic</Form.Label>
                  <Form.Control
                    type="QuizTopic"
                    placeholder="Quiz Topic"
                    required
                    size="sm"
                    onChange={(event, string) => {
                      this.inputChangeHandler(event, "QuizTopic");
                    }}
                  />
                </Form.Row>
              </Form.Group>
              <Form.Group as={Col} controlId="MaxMarks" sm={5}>
                <Form.Row>
                  <Form.Label column="sm">
                    Enter Maximum Marks obtainable for this quiz (one mark for
                    every question)
                  </Form.Label>
                  <Form.Control
                    type="MaxMarks"
                    placeholder="Max Marks"
                    required
                    size="sm"
                    onChange={(event, string) => {
                      this.inputChangeHandler(event, "MaxMarks");
                    }}
                  />
                </Form.Row>
              </Form.Group>
              <br />
              <Form.Group as={Col} sm={6}>
                <Form.Row>
                  <Form.Label column="sm">Upload Quiz Excel File: </Form.Label>
                  <Form.File
                    Placeholder="Upload Doc"
                    size="sm"
                    onChange={this.onFileChange}
                  />
                </Form.Row>
              </Form.Group>
            </Form>
          </div>
          <Button variant="primary" onClick={this.onSubmitHandler}>
            Submit
          </Button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    adminID: state.userAuth.userId,
  };
};

export default connect(mapStateToProps)(QuizUploadForm);
