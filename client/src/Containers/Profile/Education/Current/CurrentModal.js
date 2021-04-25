import React from "react";
import {
  Modal,
  Button,
  Form,
  Col,
  InputGroup,
  Row,
  Table,
} from "react-bootstrap";

class CurrentModal extends React.Component {
  state = {
    show: false,
    about: {
      firstName: "",
      lastName: "",
    },
  };

  handleShow = () => {
    this.setState({
      show: !this.state.show,
    });
  };

  render() {
    return (
      <div>
        <a href="#empty" onClick={this.handleShow}>
          <i class="fas fa-edit"> Edit</i>
        </a>

        <Modal show={this.state.show} onHide={this.handleShow} size="lg">
          <Modal.Header closeButton>
            <Modal.Title>Edit Current Education Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Row>
                <Form.Group controlId="exampleForm.SelectCustom">
                  <Form.Label>Current Semester</Form.Label>
                  <Form.Control
                    as="select"
                    custom
                    /* onChange={(event, string) => {
                  this.inputChangeHandler(event, "semester");
                  console.log("drop down is being read");
                }} */
                  >
                    <option eventkey="1">1</option>
                    <option eventkey="2">2</option>
                    <option eventkey="3">3</option>
                    <option eventkey="4">4</option>
                    <option eventkey="5">5</option>
                    <option eventkey="6">6</option>
                    <option eventkey="7">7</option>
                    <option eventkey="8">8</option>
                  </Form.Control>
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Row>
                  <Col>
                    <label htmlFor="">Score</label>
                    <InputGroup className="mb-3">
                      <Form.Control />
                      <InputGroup.Append>
                        <InputGroup.Text id="basic-addon2">
                          CGPA
                        </InputGroup.Text>
                      </InputGroup.Append>
                    </InputGroup>
                  </Col>
                  <Col>
                    <label htmlFor="">Percentage Equivalent</label>
                    <InputGroup className="mb-3">
                      <Form.Control />
                      <InputGroup.Append>
                        <InputGroup.Text id="basic-addon2">%</InputGroup.Text>
                      </InputGroup.Append>
                    </InputGroup>
                  </Col>
                </Row>
              </Form.Row>

              <Form.Row>
                <Row>
                  <Col>
                    <label htmlFor="">Course Start Date</label>
                    <InputGroup className="mb-3">
                      <InputGroup.Append>
                        <Form.Control
                          type="date"
                          placeholder="Enter DOB"
                          required
                          onChange={(event, string) => {
                            this.inputChangeHandler(event, "DOB");
                          }}
                        />
                      </InputGroup.Append>
                    </InputGroup>
                  </Col>
                  <Col>
                    <label htmlFor="">Course End Date</label>
                    <InputGroup className="mb-3">
                      <InputGroup.Append>
                        <Form.Control
                          type="date"
                          placeholder="Enter DOB"
                          required
                          onChange={(event, string) => {
                            this.inputChangeHandler(event, "DOB");
                          }}
                        />
                      </InputGroup.Append>
                    </InputGroup>
                  </Col>
                </Row>
              </Form.Row>

              <Form.Row>
                <Row>
                  <Table size="sm">
                    <Col>
                      <thead>
                        <tr>
                          <th>
                            <Col></Col>
                          </th>
                          <th>
                            <Col></Col>
                          </th>
                          <th>
                            <Col></Col>
                          </th>
                          <th>
                            <Col>CGPA</Col>
                          </th>
                          <th>
                            <Col></Col>
                          </th>
                          <th>
                            <Col></Col>
                          </th>
                          <th>
                            <Col>SGPA</Col>
                          </th>
                          <th>
                            <Col></Col>
                          </th>
                          <th>
                            <Col></Col>
                          </th>
                          <th>
                            <Col></Col>
                          </th>

                          <th>
                            <Col>Total</Col>
                          </th>
                          <th>
                            <Col></Col>
                          </th>
                          <th>
                            <Col></Col>
                          </th>

                          <th>
                            <Col>Ongoing</Col>
                          </th>
                        </tr>
                      </thead>
                    </Col>
                    <Col>
                      <tr>
                        <td>Semester 1</td>
                        <td>
                          <Form.Control size="sm" />
                        </td>
                        <td>
                          <Form.Control size="sm" />
                        </td>
                        <td>
                          <Form.Control size="sm" />
                        </td>
                        <td>
                          <Form.Control size="sm" />
                        </td>
                      </tr>
                    </Col>
                    <Col>
                      <tr>
                        <td>Semester 2</td>
                        <td>
                          <Form.Control size="sm" />
                        </td>
                        <td>
                          <Form.Control size="sm" />
                        </td>
                        <td>
                          <Form.Control size="sm" />
                        </td>
                        <td>
                          <Form.Control size="sm" />
                        </td>
                      </tr>
                    </Col>
                    <Col>
                      <tr>
                        <td>Semester 3</td>
                        <td>
                          <Form.Control size="sm" />
                        </td>
                        <td>
                          <Form.Control size="sm" />
                        </td>
                        <td>
                          <Form.Control size="sm" />
                        </td>
                        <td>
                          <Form.Control size="sm" />
                        </td>
                      </tr>
                    </Col>
                    <Col>
                      <tr>
                        <td>Semester 4</td>
                        <td>
                          <Form.Control size="sm" />
                        </td>
                        <td>
                          <Form.Control size="sm" />
                        </td>
                        <td>
                          <Form.Control size="sm" />
                        </td>
                        <td>
                          <Form.Control size="sm" />
                        </td>
                      </tr>
                    </Col>
                    <Col>
                      <tr>
                        <td>Semester 5</td>
                        <td>
                          <Form.Control size="sm" />
                        </td>
                        <td>
                          <Form.Control size="sm" />
                        </td>
                        <td>
                          <Form.Control size="sm" />
                        </td>
                        <td>
                          <Form.Control size="sm" />
                        </td>
                      </tr>
                    </Col>
                    <Col>
                      <tr>
                        <td>Semester 6 </td>
                        <td>
                          <Form.Control size="sm" />
                        </td>
                        <td>
                          <Form.Control size="sm" />
                        </td>
                        <td>
                          <Form.Control size="sm" />
                        </td>
                        <td>
                          <Form.Control size="sm" />
                        </td>
                      </tr>
                    </Col>
                  </Table>
                </Row>
              </Form.Row>
            </Form>
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

export default CurrentModal;
