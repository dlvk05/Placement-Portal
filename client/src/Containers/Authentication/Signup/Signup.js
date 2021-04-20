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
  };

  onSubmitHandler = () => {
    // ^^^ fix this function
    /* let x = null;
    for(let i in this.state){
      i.value ?  x = true : x = false;
    } */
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
              <Form.Control  /* ^^^ fix this weird invalid/valid problem */
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

            <Button
              variant="primary"
              type="submit"
              onClick={this.onSubmitHandler}
            >
              Submit
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default Signup;
