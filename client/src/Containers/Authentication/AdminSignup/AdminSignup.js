import React from "react";
import { Form, Button, Col } from "react-bootstrap";
import styles from "./AdminSignup.module.css";
import { connect } from "react-redux";
import * as actions from "../../../Redux/actions/index";

class AdminSignup extends React.Component {
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
      employeeid: {
        type: "employeeid",
        value: "",
      },
      mobileno: {
        type: "mobileno",
        value: "",
      },
      department: {
        type: "department",
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
    this.props.onAdminSignup(formData);
    this.setState({
      ...this.state,
      loading: true,
    });
  };

  render() {
    return (
      <div className={styles.section3}>
        <div className={styles.section4}>
          <strong>
            <u>Admin Registration</u>
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

            <Form.Group controlId="formGridEmployeeId">
              <Form.Label>EmployeeID</Form.Label>
              <Form.Control
                placeholder="Employee ID"
                required
                onChange={(event, string) => {
                  this.inputChangeHandler(event, "employeeid");
                }}
              />
            </Form.Group>

            <Form.Group controlId="formGridMobileNumber">
              <Form.Label>Mobile Number</Form.Label>
              <Form.Control
                placeholder="Mobile Number"
                required
                onChange={(event, string) => {
                  this.inputChangeHandler(event, "mobileno");
                }}
              />
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
                  <option eventkey="6">Information Technology</option>
                  <option eventkey="7">Computer Science Engineering</option>
                  <option eventkey="8">Computer Communication Engineering</option>
                </Form.Control>
              </Form.Group>
            <Button variant="primary" onClick={this.onSubmitHandler}>
              Submit
            </Button>
          </Form>
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
    onAdminSignup: (userData) => dispatch(actions.adminSignup(userData)),
    onErrorReset: () => dispatch(actions.authErrorReset()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminSignup);
