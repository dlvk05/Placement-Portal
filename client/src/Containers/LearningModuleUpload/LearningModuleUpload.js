import React from "react";
import { Form, Col ,Button} from "react-bootstrap";
import styles from "./LearningModuleUpload.module.css";
import axios from "axios";
import { connect } from "react-redux";
import readXlsxFile from "read-excel-file";
class LearningModuleUpload extends React.Component {
  state = {
    formData: {
      VideoModuleTitle: {
        type: "VideoModuleTitle",
        value: "",
      },
      VideoModuleTopic: {
        type: "VideoModuleTopic",
        value: "",
      },
      TotalVideos: {
        type: "TotalVideos",
        value: "",
      },
      AdminAccount: {
        type: "AdminAccount",
        value: "",
      },
      VideoModuleDescription: {
        type: "VideoModuleDescription",
        value: "",
      },
      VideoLinks: {
        type: "VideoLinks",
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
    let newVideoLinks = [];
    readXlsxFile(this.state.selectedFile).then((rows) => {
      let i;
      for (i = 1; i < rows.length; i++) {
        let temp = {
          VideoTitle: rows[i][0],
          iframe: rows[i][1],
        };
        newVideoLinks.push(temp);
      }
      formData.VideoLinks = newVideoLinks;

      console.log(formData);
      axios
        .post("/api/learningModules/addNewLearningModule", formData)
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
          <h3>Learning Module Upload Form</h3>
          <hr />
          <div className={styles.formDiv}>
            <Form>
              <Form.Group as={Col} controlId="LearningModuleTitle" sm={5}>
                <Form.Row>
                  <Form.Label column="sm">
                    Enter Module Title
                  </Form.Label>
                  <Form.Control
                    type="LearningModuleTitle"
                    placeholder="Type Module Title Here"
                    required
                    size="sm"
                    onChange={(event, string) => {
                      this.inputChangeHandler(event, "VideoModuleTitle");
                    }}
                  />
                </Form.Row>
              </Form.Group>
              <Form.Group as={Col} controlId="LearningModuleTopic" sm={5}>
                <Form.Row>
                  <Form.Label column="sm">Enter Module Topic</Form.Label>
                  <Form.Control
                    type="LearningModuleTopic"
                    placeholder="Type the Module Topic Here"
                    required
                    size="sm"
                    onChange={(event, string) => {
                      this.inputChangeHandler(event, "VideoModuleTopic");
                    }}
                  />
                </Form.Row>
              </Form.Group>
              <Form.Group as={Col} controlId="TotalVideos" sm={5}>
                <Form.Row>
                  <Form.Label column="sm">
                    Enter Total Number of Videos in the Learning Module
                  </Form.Label>
                  <Form.Control
                    type="TotalVideos"
                    placeholder="Total No. of Videos"
                    required
                    size="sm"
                    onChange={(event, string) => {
                      this.inputChangeHandler(event, "TotalVideos");
                    }}
                  />
                </Form.Row>
              </Form.Group>
              <Form.Group as={Col} controlId="LearningModuleDescription" sm={8}>
                <Form.Row>
                  <Form.Label column="sm">
                    About this Learning Module
                  </Form.Label>
                  <Form.Control
                    type="TextArea"
                    placeholder="What will the student learn from this Module?"
                    rows="5"
                    cols="70"
                    as="textarea"
                    // value={this.state.stage.StageDescription.value}
                    onChange={(event, string) => {
                      this.inputChangeHandler(
                        event,
                        "VideoModuleDescription"
                      );
                    }}
                  />
                </Form.Row>
              </Form.Group>
              <br />
              <Form.Group as={Col} sm={6}>
                <Form.Row>
                  <Form.Label column="sm">
                    Upload Learning Module Excel File:{" "}
                  </Form.Label>
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

export default connect(mapStateToProps)(LearningModuleUpload);
