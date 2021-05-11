import React from "react";
import { Form, Col, Button, Row } from "react-bootstrap";
import styles from "./Updates.module.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import { connect } from "react-redux";


class UpdatesForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        UpdateTitle: {
          type: "UpdateTitle",
          value: "",
        },
        FileName: {
          type: "FileName",
          value: "",
        },
        UpdateBody: {
          type: "UpdateBody",
          value: "",
        },
        AdminAccount: {
          type: "AdminAccount",
          value: "",
        },
        updateID: {
          type: "updateID",
          value: "",
        },
        FileAttached: {
          type: "FileAttached",
          value: false,
        },
      },
      text: { info: "" },
      selectedFile: null,
      loading: false,
    }; // You can also pass a Quill Delta here
    this.handleChange = this.handleChange.bind(this);
  }

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

    axios
      .get("/api/updates/getRandomId")
      .then((res) => {
        let newId2 = res.data.id;

        //creating formData to send to Resume put route
        const formData = {};
        for (let formElementIdentifier in this.state.formData) {
          formData[formElementIdentifier] = this.state.formData[
            formElementIdentifier
          ].value;
        }

        if (this.state.selectedFile !== null) {
          formData.FileAttached = true;
          formData.FileName = this.state.selectedFile.name;
        }

        formData.UpdateBody = this.state.text.info;
        formData.AdminAccount = this.props.adminID;
        formData.updateID = newId2;

        console.log(formData);

        //creating fileFormData to send to uploadFile route
        const fileFormData = new FormData();
        // Update the formData object
        fileFormData.append("updateID", formData.updateID);
        fileFormData.append("file", this.state.selectedFile);

        //creating config for axios
        const config = {
          headers: { "content-type": "multipart/form-data" },
        };

        this.setState({
          ...this.state,
          loading: true,
        });

        let postData = {
          ...formData,
        };

        let url = "/api/updates/addNewUpdate";
        axios
          .all([
            axios.post(url, postData),
            axios.post("api/updates/uploadFile", fileFormData, config),
          ])
          .then(
            axios.spread((res1, res2) => {
              this.setState({
                loading: false,
              });
              console.log(res1);
              console.log(res2);
              this.props.history.push("/AdminUpdatesFeed");
            })
          )
          .catch(
            axios.spread((err1, err2) => {
              console.log(err1);
              console.log(err2);
              this.setState({
                loading: false,
              });
            })
          );
      })
      .catch((err) => {
        console.log("err in /api/updates/getRandomId");
        console.log(err);
      });
  };

  handleChange(value) {
    this.setState({ text: { info: value } });
    console.log(this.state.text);
  }

  //this is the function you'll need to convert string to HTML so thats why I've commented it and still kept it
  createMarkup = () => {
    return { __html: this.state.text.info };
  };

  render() {
    return (
      //   <h1>hello</h1>
      <div className={styles.wrapper}>
        <div className={styles.innerDiv}>
          <h5>Enter Update Messages Here!</h5>
          <hr />
          <div className={styles.titleDiv}>
            <Form.Group as={Col} controlId="formGridUpdateTitle">
              <Form.Row>
                <Form.Label column="sm">Message Title</Form.Label>
                <Form.Control
                  type="messageTitle"
                  placeholder="Enter Title Here"
                  required
                  size="sm"
                  onChange={(event, string) => {
                    this.inputChangeHandler(event, "UpdateTitle");
                  }}
                />
              </Form.Row>
            </Form.Group>
          </div>
          <br />
          <h5>Enter Message Body:</h5>
          <hr />

          <div className={styles.quillDiv}>
            <ReactQuill
              //   bounds={'.app'}
              //   style={{minHeight: "300px"}}
              className={styles.quillItself}
              value={
                this.state.text.info
              } /* this is the final form of the text that has been received */
              onChange={this.handleChange}
              size={"large"}
            ></ReactQuill>
          </div>
          <br />
          <br />
          <br />
          <hr />
          <div>
            <Row>
              <Form.Group as={Col}>
                <Form.Label>
                  <u>
                    <b>Upload Relevant Document</b>
                  </u>
                </Form.Label>
                <Form.Row>
                  <Form.File
                    Placeholder="Upload Doc"
                    size="sm"
                    onChange={this.onFileChange}
                  />
                </Form.Row>
              </Form.Group>
            </Row>
          </div>
          <br />
          <Button variant="primary" onClick={this.onSubmitHandler}>
            {" "}
            Submit{" "}
          </Button>
          {/* <div dangerouslySetInnerHTML={this.createMarkup()}></div> */}
          {/* {this.state.text.info} */}
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

export default connect(mapStateToProps)(UpdatesForm);
