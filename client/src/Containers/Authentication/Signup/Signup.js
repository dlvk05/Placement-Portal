import React from "react";
import { Form, Button, Col } from "react-bootstrap";
import "./Signup.css";

class Signup extends React.Component {
  state = {
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
    branch: {
      type: "branch",
      value: "",
    },
  };

  inputChangeHandler = (event, string) => {
    const input = event.target.value;
    const updatedState = {
      ...this.state,
      [string]: {
        type: [string],
        value: input,
      },
    };
    this.setState({
      ...updatedState,
    });
    console.log(this.state);
  };

  render() {
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
                  type="email"
                  placeholder="Enter email"
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
                  type="ConfirmPassword"
                  placeholder="Confirm Password"
                />
              </Form.Group>
            </Form.Row>

            <Form.Group controlId="formGridRegistrationNumber">
              <Form.Label>RegistrationNumber</Form.Label>
              <Form.Control
                placeholder="17930XXXX"
                onChange={(event, string) => {
                  this.inputChangeHandler(event, "regno");
                }}
              />
            </Form.Group>

            <Form.Group controlId="formGridMobileNumber">
              <Form.Label>Mobile Number</Form.Label>
              <Form.Control
                placeholder="Mobile Number"
                onChange={(event, string) => {
                  this.inputChangeHandler(event, "mobileno");
                }}
              />
            </Form.Group>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridBranch">
                <Form.Label>Branch</Form.Label>
                <Form.Control
                  onChange={(event, string) => {
                    this.inputChangeHandler(event, "branch");
                  }}
                />
              </Form.Group>
            </Form.Row>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default Signup;
