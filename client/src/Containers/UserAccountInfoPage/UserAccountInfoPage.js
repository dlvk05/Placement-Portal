import React from "react";
import { Col, Row, Modal, Button, Form } from "react-bootstrap";
import styles from "./UserAccountInfoPage.module.css";

class UserAccountInfoPage extends React.Component {
  state = {
    firstName: {
      value: "nobody",
      type: String,
    },
    lastName: {
      value: "cares",
      type: String,
    },
    email: {
      value: "rocklee@naruto.com",
      type: String,
    },
    password: {
      value: "",
      type: String,
    },
    regNo: {
      value: "179306745",
      type: String,
    },
    mobileNo: {
      value: "9865746453",
      type: String,
    },
    programme: {
      value: "B.tech",
      type: String,
    },
    department: {
      value: "IT",
      type: String,
    },
    semester: {
      value: "8",
      type: String,
    },
    dateOfCreation: {
      type: Date,
      default: Date.now,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    show: false,
  };

  handleShow = () => {
    this.setState({
      show: !this.state.show,
    });
  };

  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.sidediv}>
          <i style={{ paddingRight: "10%" }} class="far fa-user fa-5x"></i>
          <div
            style={{
              width: "25%",
              border: "solid silver",
              padding: "5px",
              borderRadius: "4px",
              marginTop: "5px",
            }}
          >
            STUDENT
          </div>
          <hr style={{ width: "90%" }} />
          <h5>Manipal University Jaipur</h5>
          <h5>{this.state.regNo.value}</h5>
        </div>
        <div className={styles.subdiv}>
          <h3>Basic Account Information</h3>
          <hr />
          <h6>Contact Details</h6>
          <hr />
          <Row>
            <Col>
              <div>Mobile Number: {this.state.mobileNo.value}</div>
              <div>Email Id: {this.state.email.value}</div>
            </Col>
          </Row>
          <hr />
          <h6>Password Details </h6>
          <hr />
          <Row>
            <Col>
              <div>Password: ******</div>
            </Col>
            <Col>
              <a href="#empty" onClick={this.handleShow}>
                <i class="fas fa-edit"> Change Password</i>
              </a>

              <Modal show={this.state.show} onHide={this.handleShow}>
                <Modal.Header closeButton>
                  <Modal.Title>Change Password</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form>
                    <Form.Group as={Col} controlId="formGridCurrentPassword">
                      <Form.Row>
                      <Form.Label column="sm">Current Password</Form.Label>
                      <Form.Control
                        type="CurrentPassword"
                        placeholder="Type Here"
                        required
                        size="sm"
                        /* onChange={(event, string) => {
                        this.inputChangeHandler(event, "CurrentPassword");
                        }} */
                      />
                      </Form.Row>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridPassword">
                      <Form.Row>
                        <Form.Label column="sm">Enter New Password</Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Type here"
                          required
                          size="sm"
                          /* onChange={(event, string) => {
                              this.inputChangeHandler(event, "password");
                              }} */
                        />
                      </Form.Row>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridConfirmPassword">
                      <Form.Row>
                        <Form.Label column="sm">Confirm Password</Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Type here"
                          required
                          size="sm"
                          /* onChange={(event, string) => {
                              this.inputChangeHandler(event, "confirmPassword");
                              }} */
                        />
                      </Form.Row>
                    </Form.Group>
                  </Form>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={this.handleShow}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={this.handleShow}>
                    Save Changes
                  </Button>
                </Modal.Footer>
              </Modal>
            </Col>
          </Row>
          <br />
          <br />
          <br />
          <hr />
          <Row>
            <Col>
              <div>
                <center>
                  This project was made by Suvansh Shukla & Vibhor Khare, all
                  rights reserved
                </center>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default UserAccountInfoPage;
