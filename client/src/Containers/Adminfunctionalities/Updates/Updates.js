import React from "react";
import { Form, Col, Button } from "react-bootstrap";
import styles from "./Updates.module.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

class Updates extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: { info: "" } }; // You can also pass a Quill Delta here
    this.handleChange = this.handleChange.bind(this);
  }

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
                    this.inputChangeHandler(event, "messageTitle");
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
          <br />
          <Button
            variant="primary"
            onClick={() => {
              alert(this.state.text.info);
            }}
          >
            {" "}
            Submit{" "}
          </Button>
          {/* <div dangerouslySetInnerHTML={this.createMarkup()}></div> */}
        </div>
      </div>
    );
  }
}

export default Updates;
