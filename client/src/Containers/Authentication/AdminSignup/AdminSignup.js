import React from "react";
import {Form, Button, Col} from 'react-bootstrap';
import styles from './AdminSignup.module.css';


class AdminSignup extends React.Component {
  state ={
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
  }

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

  onSubmitHandler = () =>{
    console.log(this.state);    
  }


  render() {
    return (
      <div className={styles.section3}>
        <div className={styles.section4}>
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

            <Form.Group controlId="formGridEmployeeId">
              <Form.Label>EmployeeID</Form.Label>
              <Form.Control
                placeholder="Employee ID"
                onChange={(event, string) => {
                  this.inputChangeHandler(event, "employeeid");
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
                <Form.Label>Department</Form.Label>
                <Form.Control
                  placeholder="department"
                  onChange={(event, string) => {
                    this.inputChangeHandler(event, "department");
                  }}
                />
              </Form.Group>
            </Form.Row>
            <Button variant="primary" onClick={this.onSubmitHandler}>
              Submit
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default AdminSignup;
