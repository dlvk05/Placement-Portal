import React from "react";
import { Col, Row, Modal, Button, Form } from "react-bootstrap";
import styles from "./UserAccountInfoPage.module.css";
import axios from "axios";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();
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
    currentPassword: {
      value: "",
      type: String,
    },
    newPassword1: {
      value: "",
      type: String,
    },
    newPassword2: {
      value: "",
      type: String,
    },
    employeeId: {
      value: "",
      type: String,
    },
    show: false,
    accountLoaded: false,
  };

  handleShow = () => {
    this.setState({
      show: !this.state.show,
    });
  };

  componentDidMount() {
    let url = "/api/getSpecificUser/" + this.props.userId;

    if (this.props.isAdmin) {
      url = "/api/admin/getSpecificUser/" + this.props.userId;
    }

    // console.log("componentDidMount")
    axios.get(url).then((res) => {
      // console.log("account loaded")
      this.setState({
        email: {
          value: res.data.user.email,
          type: String,
        },

        mobileNo: {
          value: res.data.user.mobileNo,
          type: String,
        },
        employeeId: {
          value: res.data.user.employeeId,
          type: String,
        },
      });
    });
  }

  inputChangeHandler = (event, inputIdentifier) => {
    // console.log(inputIdentifier);
    // console.log(event.target.value);
    let temp = {
      value: event.target.value,
    };
    // console.log(temp);

    this.setState({
      ...this.state,
      [inputIdentifier]: temp,
    });
  };

  onSubmitHandler = (event) => {
    event.preventDefault();
    let formData = {
      email: this.state.email.value,
      password: this.state.currentPassword.value,
      newPassword: this.state.newPassword2.value,
    };
    // console.log(formData);
    let url = "/api/changePassword";

    if (this.props.isAdmin) {
      url = "/api/admin/changePassword";
    }

    axios
      .put(url, formData)
      .then((res) => {
        toast.success("Password Changed");
        this.handleShow();
      })
      .catch((err) => {
        toast.error("Error occurred please try again later")
        console.log(err)});
  };

  render() {
    // console.log(this.state);
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
            {this.props.isAdmin?"ADMIN":"STUDENT"}
          </div>
          <hr style={{ width: "90%" }} />
          <h5>Manipal University Jaipur</h5>
          <h5>{this.props.isAdmin?this.state.employeeId.value:this.state.regNo.value}</h5>
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
                          type="password"
                          placeholder="Type Here"
                          required
                          size="sm"
                          onChange={(event, string) => {
                            this.inputChangeHandler(event, "currentPassword");
                          }}
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
                          onChange={(event, string) => {
                            this.inputChangeHandler(event, "newPassword1");
                          }}
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
                          onChange={(event, string) => {
                            this.inputChangeHandler(event, "newPassword2");
                          }}
                        />
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

const mapStateToProps = (state) => {
  return {
    userId: state.userAuth.userId,
    profileId: state.userAuth.profileId,
    isAdmin: state.userAuth.isAdmin,
  };
};

export default connect(mapStateToProps)(UserAccountInfoPage);
