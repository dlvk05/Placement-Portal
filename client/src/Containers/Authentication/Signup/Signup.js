import React from "react";
import { connect } from "react-redux";
import { Form, Button, Col, Spinner } from "react-bootstrap";
import styles from "./Signup.module.css";

import * as actions from "../../../Redux/actions/index";

class Signup extends React.Component {
  state = {
    formData: {
      firstName: {
        type: "firstName",
        value: "",
      },
      lastName: {
        type: "lastName",
        value: "",
      },
      email: {
        type: "email",
        value: "",
      },
      password: {
        type: "password",
        value: "",
      },
      regNo: {
        type: "regNo",
        value: "",
      },
      mobileNo: {
        type: "mobileNo",
        value: "",
      },
      department: {
        type: "department",
        value: "",
      },
      programme: {
        type: "programme",
        value: "",
      },
      semester: {
        type: "semester",
        value: "",
      },
    },
    loading: false,
  };

  componentDidUpdate() {
    if (this.props.error) {
      console.log("an error occurred : ");
      console.log(this.props.error);
    }
  }

  inputChangeHandler = (event, inputIdentifier) => {
    //des resetting error for new input
    if (this.props.error) {
      this.props.onErrorReset();
    }

    if (this.state.loading) {
      this.setState({
        ...this.state,
        loading: false,
      });
    }

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
    this.props.onUserSignup(formData);
    this.setState({
      ...this.state,
      loading: true,
    });
  };

  render() {
    let spinner = (
      <Button variant="primary" type="submit" onClick={this.onSubmitHandler}>
        Submit
      </Button>
    );

    if (this.state.loading && !this.props.signupDone) {
      spinner = <Spinner animation="border" />;
    }

    if (this.props.error) {
      spinner = (
        <Button variant="primary" type="submit" onClick={this.onSubmitHandler}>
          Submit
        </Button>
      );
    }

    if (this.props.signupDone) {
      this.props.history.push("/login");
    }

    return (
      <div className={styles.section3}>
        <div className={styles.section4}>
          <div>
            <strong>
              <u>Student Registration</u>
            </strong>
            <hr />
            <Form>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridFirstName">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="FirstName"
                    placeholder="Enter FirstName"
                    required
                    onChange={(event, string) => {
                      this.inputChangeHandler(event, "firstName");
                    }}
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridLastName">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="LastName"
                    placeholder="LastName"
                    required
                    onChange={(event, string) => {
                      this.inputChangeHandler(event, "lastName");
                    }}
                  />
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    as="input"
                    type="email"
                    placeholder="Enter email"
                    required
                    onChange={(event, string) => {
                      this.inputChangeHandler(event, "email");
                    }}
                  />
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    required
                    onChange={(event, string) => {
                      this.inputChangeHandler(event, "password");
                    }}
                  />
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col} controlId="formGridConfirmPassword">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control
                    type="password"
                    required
                    placeholder="Confirm Password"
                  />
                </Form.Group>
              </Form.Row>

              <Form.Group controlId="formGridRegistrationNumber">
                <Form.Label>RegistrationNumber</Form.Label>
                <Form.Control
                  placeholder="17930XXXX"
                  required
                  onChange={(event, string) => {
                    this.inputChangeHandler(event, "regNo");
                  }}
                />
              </Form.Group>

              <Form.Group controlId="formGridMobileNumber">
                <Form.Label>Mobile Number</Form.Label>
                <Form.Control /* ^^^ fix this weird invalid/valid problem */
                  placeholder="Mobile Number"
                  required
                  onChange={(event, string) => {
                    this.inputChangeHandler(event, "mobileNo");
                  }}
                />
                <Form.Control.Feedback type="invalid">
                  Please enter a valid mobile no.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="exampleForm.SelectCustom">
                <Form.Label>Department</Form.Label>
                <Form.Control
                  as="select"
                  custom
                  onChange={(event, string) => {
                    this.inputChangeHandler(event, "department");
                    console.log("drop down is being read");
                  }}
                >
                  <option selected disabled hidden>
                    Please Select an Option
                  </option>
                  <option eventkey="6">Infromation Technology</option>
                  <option eventkey="7">Computer Science Engineering</option>
                  <option eventkey="8">Computer Communication Engineering</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="exampleForm.SelectCustom">
                <Form.Label>Programme</Form.Label>
                <Form.Control
                  as="select"
                  custom
                  onChange={(event, string) => {
                    this.inputChangeHandler(event, "programme");
                    console.log("drop down is being read");
                  }}
                >
                  <option eventkey="none" selected disabled hidden>
                    Please Select an Option
                  </option>
                  <option eventkey="2">Bachlor of Technology</option>
                  <option eventkey="3">Master Technology</option>
                  <option eventkey="3">Master of Business Administration</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="exampleForm.SelectCustom">
                <Form.Label>Semester</Form.Label>
                <Form.Control
                  as="select"
                  custom
                  onChange={(event, string) => {
                    this.inputChangeHandler(event, "semester");
                    console.log("drop down is being read");
                  }}
                >
                  <option eventkey="6" selected disabled hidden>
                    Please Select an Option
                  </option>
                  <option eventkey="6">6</option>
                  <option eventkey="7">7</option>
                  <option eventkey="8">8</option>
                </Form.Control>
              </Form.Group>
              {spinner}
            </Form>
          </div>
        </div>
        <div className={styles.dope}>
          <h1 className={styles.h1}>
            <u>MUJ</u> <br />
            Inspired <br /> by <br /> Life.
          </h1>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    signupDone: state.userAuth.signupDone,
    error: state.userAuth.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onUserSignup: (userData) => dispatch(actions.userSignup(userData)),
    onErrorReset: () => dispatch(actions.authErrorReset()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
