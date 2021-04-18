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

  inputChangeHandler = (type, event) => {
    const input = event.target.value;
    const updatedState = {
      ...this.state,
      [type]: {
        type: [type],
        value: input,
      },
    };
    this.setState(updatedState);
    console.log(this.state);
  };

  render() {
    return (
      <div className="section">
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={("email", event) =>
                this.inputChangeHandler("email", event)
              }
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary">Submit</Button>
        </Form>
      </div>
    );
  }
}

export default Login;
