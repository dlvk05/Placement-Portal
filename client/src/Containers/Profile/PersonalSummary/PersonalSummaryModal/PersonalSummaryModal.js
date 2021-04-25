import React from "react";
import { Modal, Button } from "react-bootstrap";

class PersonalSummaryModal extends React.Component {
  state = {
    show: false,
    about: {
      firstName: "",
      lastName: "",
    },
  };

  handleShow = () => {
      this.setState({
          show: !this.state.show
      })
  }


  render() {
    return (
      <div>
        <a href="#empty" onClick={this.handleShow}>
          Launch Edit Summary Modal
        </a>

        <Modal show={this.state.show} onHide={this.handleShow}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <textarea name="" id="" cols="60" rows="10">

            </textarea>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleShow}>
              Close
            </Button>
            <Button variant="primary" onClick={this.handleShow}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default PersonalSummaryModal;
