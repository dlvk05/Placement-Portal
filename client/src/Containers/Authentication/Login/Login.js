import React from "react";
import { Form, Button } from "react-bootstrap";
import "./Login.css";

class Login extends React.Component {
  state = {
    email: {
      type: "email",
      value: "",
    },
    password: {
      type: "password",
      value: "",
    },
  };

  //this takes input from all forms on this page
  inputChangeHandler = (event, string) => {
    const input = event.target.value;
    console.log(input);
    const updatedState = {
      ...this.state,
      [string]: {
        type: [string],
        value: input,
      },
    };
    this.setState({ ...updatedState });
    console.log(this.state);
  };

  random = () => {
    console.log("from button");
    console.log(this.state);
  };

  render() {
    return (
    <div className="section1">
        <div className="section2">
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={(event, string) =>
                  this.inputChangeHandler(event, "email")
                }
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(event, string) =>
                  this.inputChangeHandler(event, "password")
                }
              />
            </Form.Group>
            <Button variant="primary" onClick={this.random}>
              Login
            </Button>
          </Form>
          <hr />
          <Button variant="success" className="b1">
            Admin Login
          </Button>
          <Button variant="info">Sign Up</Button>
        </div>
      </div>
        
    );
  }
}

export default Login;
