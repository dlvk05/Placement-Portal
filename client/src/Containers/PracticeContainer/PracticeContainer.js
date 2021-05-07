import React from "react";
import {Form, Button, Col} from 'react-bootstrap';


const styles={
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "aliceblue",
    height: "100vh"
}

const innerDiv={
    border: "solid 2px silver",
    borderRadius: "10px",
    backgroundColor: "#f5f5f5",
    padding: "20px"
}

class PracticeContainer extends React.Component{

  render(){
    return(
      <div style={styles}>
          <div style={innerDiv}>
              <h3>here you go</h3>
              <hr />
              <div>
              <Form.Group as={Col}>
                <Form.Row>
                  <Form.Label column="sm">Upload Document</Form.Label>
                  <Form.File Placeholder="Upload Doc" size="sm" />
                </Form.Row>
              </Form.Group>
              </div>
              <Button>Click Me!!</Button>
          </div>
      </div>
    );
  }
}

export default PracticeContainer;