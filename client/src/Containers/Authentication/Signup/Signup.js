import React from "react";
import { connect } from "react-redux";
import { Form, Button, Col } from "react-bootstrap";
import "./Signup.css";

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
      regno: {
        type: "regno",
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
      program: {
        type: "program",
        value: "",
      },
      semester: {
        type: "semester",
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

    if(this.state.loading&&!this.props.signupDone){
      spinner='Loading';
    }

    if (this.props.signupDone) {
      this.props.history.push("/login");
    }

    return (
      <div className="section3">
        <div className="section4">
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
                  this.inputChangeHandler(event, "regno");
                }}
              />
            </Form.Group>

            <Form.Group controlId="formGridMobileNumber">
              <Form.Label>Mobile Number</Form.Label>
              <Form.Control /* ^^^ fix this weird invalid/valid problem */
                // {x ? isInvalid : null}
                placeholder="Mobile Number"
                required
                onChange={(event, string) => {
                  this.inputChangeHandler(event, "mobileno");
                }}
              />
              <Form.Control.Feedback type="invalid">
                Please enter a valid mobile no.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridBranch">
                <Form.Label>Department</Form.Label>
                <Form.Control
                  placeholder="department"
                  required
                  onChange={(event, string) => {
                    this.inputChangeHandler(event, "department");
                  }}
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridProgram">
                <Form.Label>Program</Form.Label>
                <Form.Control
                  placeholder="Program"
                  required
                  onChange={(event, string) => {
                    this.inputChangeHandler(event, "program");
                  }}
                />
              </Form.Group>
            </Form.Row>

            {/* <Form.Row>
              <Form.Group as={Col} controlId="formGridSemester">
                <Form.Label>Semester</Form.Label>
                <Form.Control
                  placeholder="Semester"
                  required
                  onChange={(event, string) => {
                    this.inputChangeHandler(event, "semester");
                  }}
                />
              </Form.Group>
            </Form.Row> */}

            <Form.Group controlId="exampleForm.SelectCustom">
              <Form.Label>Custom select</Form.Label>
              <Form.Control
                as="select"
                custom
                onChange={(event, string) => {
                  this.inputChangeHandler(event, "semester");
                  console.log("drop down is being read");
                }}
              >
                <option eventkey="6">6</option>
                <option eventkey="7">7</option>
                <option eventkey="8">8</option>
              </Form.Control>
            </Form.Group>
            {spinner}
            {/* <Button
              variant="primary"
              type="submit"
              onClick={this.onSubmitHandler}
            >
              Submit
            </Button> */}
          </Form>
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
