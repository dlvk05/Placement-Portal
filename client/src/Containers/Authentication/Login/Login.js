import React from "react";
import { connect } from "react-redux";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./Login.module.css";

import * as actions from "../../../Redux/actions/index";
class Login extends React.Component {
  state = {
    formData: {
      email: {
        type: "email",
        value: "",
      },
      password: {
        type: "password",
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

  //this takes input from all forms on this page
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
    // console.log('clicked');
    event.preventDefault(); //prevent page reload

    const formData = {};
    for (let formElementIdentifier in this.state.formData) {
      formData[formElementIdentifier] = this.state.formData[
        formElementIdentifier
      ].value;
    }

    console.log(formData);
    this.props.onUserLogin(formData);
    this.setState({
      ...this.state,
      loading: true,
    });
  };

  render() {
    let spinner = null;

    if (this.state.loading && !this.props.isAuthenticated) {
      spinner = "Loading";
    }

    if (this.props.isAuthenticated) {
      this.props.history.push("/");
    }

    if (this.props.error) {
      spinner = null;
    }

    return (
      <div className={styles.section1}>
        <div className={styles.section2}>
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
                {this.props.error}
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
            <Button variant="primary" onClick={this.onSubmitHandler}>
              Login
            </Button>
          </Form>
          <hr /> 
          <Link to="/AdminSignup">
          <Button variant="success" className="b1">
            Admin Login
          </Button>
          </Link>
          <Link to="/Signup">
            <Button variant="info">Sign Up</Button>
          </Link>
          {spinner}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.userAuth.isAuthenticated,
    error: state.userAuth.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onUserLogin: (userData) =>
      dispatch(actions.userLogin(userData.email, userData.password)),
    onErrorReset: () => dispatch(actions.authErrorReset()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
