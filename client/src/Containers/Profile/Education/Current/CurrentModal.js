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
import axios from "axios";
import { connect } from "react-redux";

class CurrentModal extends React.Component {
  state = {
    show: false,
    formData: {
      Department: {
        type: "Department",
        value: "",
      },
      Programme: {
        type: "Programme",
        value: "",
      },
      RegNo: {
        type: "RegNo",
        value: "",
      },
      CurrentSemester: {
        type: "CurrentSemester",
        value: "",
      },
      CGPAScore: {
        type: "CGPAScore",
        value: "",
      },
      PercentageScore: {
        type: "PercentageScore",
        value: "",
      },
      StartDate: {
        type: "StartDate",
        value: "",
      },
      EndDate: {
        type: "EndDate",
        value: "",
      },
      CurrentCompleted: {
        type: "CurrentCompleted",
        value: "",
      },
    },
    performance: [
      {
        SemNo: 1,
        CGPA: "",
        SGPA: "",
        BacklogTotal: "",
        BacklogOngoing: "",
        MarksheetProvided: false,
        FileName: "",
      },
      {
        SemNo: 2,
        CGPA: "",
        SGPA: "",
        BacklogTotal: "",
        BacklogOngoing: "",
        MarksheetProvided: false,
        FileName: "",
      },
      {
        SemNo: 3,
        CGPA: "",
        SGPA: "",
        BacklogTotal: "",
        BacklogOngoing: "",
        MarksheetProvided: false,
        FileName: "",
      },
      {
        SemNo: 4,
        CGPA: "",
        SGPA: "",
        BacklogTotal: "",
        BacklogOngoing: "",
        MarksheetProvided: false,
        FileName: "",
      },
      {
        SemNo: 5,
        CGPA: "",
        SGPA: "",
        BacklogTotal: "",
        BacklogOngoing: "",
        MarksheetProvided: false,
        FileName: "",
      },
      {
        SemNo: 6,
        CGPA: "",
        SGPA: "",
        BacklogTotal: "",
        BacklogOngoing: "",
        MarksheetProvided: false,
        FileName: "",
      },
      {
        SemNo: 7,
        CGPA: "",
        SGPA: "",
        BacklogTotal: "",
        BacklogOngoing: "",
        MarksheetProvided: false,
        FileName: "",
      },
      {
        SemNo: 8,
        CGPA: "",
        SGPA: "",
        BacklogTotal: "",
        BacklogOngoing: "",
        MarksheetProvided: false,
        FileName: "",
      },
    ],
    selectedFiles: [
      {
        sem: 1,
        file: null,
      },
      {
        sem: 2,
        file: null,
      },
      {
        sem: 3,
        file: null,
      },
      {
        sem: 4,
        file: null,
      },
      {
        sem: 5,
        file: null,
      },
      {
        sem: 6,
        file: null,
      },
      {
        sem: 7,
        file: null,
      },
      {
        sem: 8,
        file: null,
      },
    ],
    loading: false,
  };

  // On file select (from the pop up)
  onFileChange = (event, semNo) => {
    let index = [semNo];
    index = index - 1;
    let updatedFilesArray = [...this.state.selectedFiles];
    updatedFilesArray[index].file = event.target.files[0];
    // console.log("file uploaded");
    // console.log(updatedFilesArray);

    // Update the state
    this.setState({
      ...this.state,
      selectedFiles: updatedFilesArray,
    });
  };

  inputChangeHandler = (event, inputIdentifier) => {
    const updatedformData = {
      ...this.state.formData,
    };

    const updatedFormElement = { ...updatedformData[inputIdentifier] };

    //des updating the value in the selected input element
    updatedFormElement.value = event.target.value;
    updatedformData[inputIdentifier] = updatedFormElement;
    // console.log("inputChangeHandler");
    // console.log(updatedformData);

    this.setState({
      formData: updatedformData,
    });
  };

  performanceInputHandler(event, inputIdentifier, semNo) {
    const updatedValue = event.target.value;
    let index = [semNo];
    index = index - 1;

    let updatedPerformanceArray = [...this.state.performance];
    let updatedSemPerformance = { ...updatedPerformanceArray[index] };
    updatedSemPerformance[inputIdentifier] = updatedValue;
    updatedPerformanceArray[index] = updatedSemPerformance;

    // console.log("performanceInputHandler");
    // console.log(updatedPerformanceArray);

    this.setState({
      ...this.state,
      performance: updatedPerformanceArray,
    });
  }

  onSubmitHandler = (event) => {
    event.preventDefault(); //prevent page reload

    //creating formData to send to Resume put route
    const formData = {};
    for (let formElementIdentifier in this.state.formData) {
      formData[formElementIdentifier] = this.state.formData[
        formElementIdentifier
      ].value;
    }
    formData.CurrentCompleted=true;

    //adding performance array to formData
    formData.Performance = this.state.performance;
    // loop to add fileNames in formData
    this.state.selectedFiles.forEach((selectedFile) => {
      console.log(selectedFile);
      if (selectedFile.file !== null) {
        let index = [selectedFile.sem] - 1;
        formData.Performance[index].MarksheetProvided = true;
        formData.Performance[index].FileName = selectedFile.file.name;
      }
    });


    // console.log("formData after adding fileNames");
    console.log(formData);

    let fileFormDatas = [];
    let i;
    for (i = 0; i < 8; i++) {
      const fileFormData = new FormData();
      fileFormData.append("folderName", "Profile");
      fileFormData.append("profileId", this.props.profileId);
      fileFormData.append("header", "Education");
      fileFormData.append("subHeader", "Current");
      fileFormData.append("file", this.state.selectedFiles[i].file);
      fileFormDatas.push(fileFormData);
    }

    //creating config for axios
    const config = {
      headers: { "content-type": "multipart/form-data" },
    };

    this.setState({
      ...this.state,
      loading: true,
    });

    let postData = {
      formData: formData,
      subHeader: "Current",
      profileId: this.props.profileId,
    };

    let url = "/api/updateUserProfile/education";
    axios
      .all([
        axios.put(url, postData),
        axios.post("api/uploadFile", fileFormDatas[0], config),
        axios.post("api/uploadFile", fileFormDatas[1], config),
        axios.post("api/uploadFile", fileFormDatas[2], config),
        axios.post("api/uploadFile", fileFormDatas[3], config),
        axios.post("api/uploadFile", fileFormDatas[4], config),
        axios.post("api/uploadFile", fileFormDatas[5], config),
        axios.post("api/uploadFile", fileFormDatas[6], config),
        axios.post("api/uploadFile", fileFormDatas[7], config),
      ])
      .then(
        axios.spread((res1, res2, res3, res4, res5, res6, res7, res8, res9) => {
          this.setState({
            loading: false,
            show: !this.state.show,
          });
          console.log(res1);
          console.log(res2);
          this.props.forceReload();
        })
      )
      .catch(
        axios.spread((err1, err2, err3, err4, err5, err6, err7, err8, err9) => {
          console.log(err1);
          console.log(err2);
          this.setState({
            loading: false,
            // show: !this.state.show,
          });
        })
      );
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
                <Form.Group>
                  <Form.Label column="sm">Registration Number</Form.Label>
                  <Form.Control
                    type="regno"
                    placeholder="17930XXXX"
                    required
                    size="sm"
                    onChange={(event, string) => {
                      this.inputChangeHandler(event, "RegNo");
                    }}
                  />
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group controlId="exampleForm.SelectCustom">
                  <Form.Label column="sm">Department</Form.Label>
                  <Form.Control
                    as="select"
                    custom
                    size="sm"
                    onChange={(event, string) => {
                      this.inputChangeHandler(event, "Department");
                      console.log("drop down is being read");
                    }}
                  >
                    <option eventkey="none" selected disabled hidden>Please select an Option</option>
                    <option eventkey="2">Information Technology</option>
                    <option eventkey="3">Computer Science Engineering</option>
                    <option eventkey="4">Computer Communication Engineering</option>
                    
                  </Form.Control>
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group controlId="exampleForm.SelectCustom">
                  <Form.Label column="sm">Programme</Form.Label>
                  <Form.Control
                    as="select"
                    custom
                    size="sm"
                    onChange={(event, string) => {
                      this.inputChangeHandler(event, "Programme");
                      console.log("drop down is being read");
                    }}
                  >
                    <option eventkey="none" selected disabled hidden>Please Select an Option</option>
                    <option eventkey="2">Bachelor of Technology</option>
                    <option eventkey="3">Master Technology</option>
                    <option eventkey="3">Master of Business Administration</option>
                  </Form.Control>
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group controlId="exampleForm.SelectCustom">
                  <Form.Label column="sm">Current Semester</Form.Label>
                  <Form.Control
                    as="select"
                    custom
                    size="sm"
                    onChange={(event, string) => {
                      this.inputChangeHandler(event, "CurrentSemester");
                      console.log("drop down is being read");
                    }}
                  >
                    <option eventkey="1" selected disabled hidden>Please select an Option</option>
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
                    <label htmlFor="" column="sm">
                      Score
                    </label>
                    <InputGroup className="mb-3" size="sm">
                      <Form.Control
                        size="sm"
                        onChange={(event, string) => {
                          this.inputChangeHandler(event, "CGPAScore");
                        }}
                      />
                      <InputGroup.Append>
                        <InputGroup.Text id="inputGroup-sizing-sm">
                          CGPA
                        </InputGroup.Text>
                      </InputGroup.Append>
                    </InputGroup>
                  </Col>
                  <Col>
                    <label htmlFor="" column="sm">
                      Percentage Equivalent
                    </label>
                    <InputGroup className="mb-3" size="sm">
                      <Form.Control
                        onChange={(event, string) => {
                          this.inputChangeHandler(event, "PercentageScore");
                        }}
                      />
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
                          placeholder="Course Start Date"
                          required
                          size="sm"
                          onChange={(event, string) => {
                            this.inputChangeHandler(event, "StartDate");
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
                          placeholder="Course End Date"
                          required
                          size="sm"
                          onChange={(event, string) => {
                            this.inputChangeHandler(event, "EndDate");
                          }}
                        />
                      </InputGroup.Append>
                    </InputGroup>
                  </Col>
                </Row>
              </Form.Row>
              <br />
              <br />
              {/* !!! This is where the Table begins PROCEED TO EDIT WITH CAUTION */}
              <Form.Row>
                <Row>
                  <Col xs={2}></Col>
                  <Col xs={3}>
                    <label htmlFor="">
                      <strong>Performance</strong>
                    </label>
                  </Col>
                  <Col>
                    <label htmlFor="">
                      <strong>Backlogs Details</strong>
                    </label>
                  </Col>

                  <Table size="sm">
                    <Col>
                      <thead>
                        <tr>
                          <th>
                            <Col>Sem</Col>
                          </th>

                          <th>
                            <Col>CGPA</Col>
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
                            <Col>Total</Col>
                          </th>
                          <th>
                            <Col></Col>
                          </th>

                          <th>
                            <Col>Ongoing</Col>
                          </th>
                          <th>
                            <Col></Col>
                          </th>
                          <th>
                            <Col>Upload File</Col>
                          </th>
                        </tr>
                      </thead>
                    </Col>
                    <Col>
                      <tr>
                        <td>
                          <Form.Label column="sm">1</Form.Label>
                        </td>
                        <td>
                          <Form.Control
                            size="sm"
                            onChange={(event, string) => {
                              this.performanceInputHandler(event, "CGPA", 1);
                            }}
                          />
                        </td>
                        <td>
                          <Form.Control
                            size="sm"
                            onChange={(event, string) => {
                              this.performanceInputHandler(event, "SGPA", 1);
                            }}
                          />
                        </td>
                        <td>
                          <Form.Control
                            size="sm"
                            onChange={(event, string) => {
                              this.performanceInputHandler(
                                event,
                                "BacklogTotal",
                                1
                              );
                            }}
                          />
                        </td>
                        <td>
                          <Form.Control
                            size="sm"
                            onChange={(event, string) => {
                              this.performanceInputHandler(
                                event,
                                "BacklogOngoing",
                                1
                              );
                            }}
                          />
                        </td>
                        <td>
                          <Form.File
                            id="exampleFormControlFile1"
                            onChange={(event, string) => {
                              this.onFileChange(event, 1);
                            }}
                          />
                        </td>
                      </tr>
                    </Col>
                    <Col>
                      <tr>
                        <td>
                          <Form.Label column="sm">2</Form.Label>
                        </td>
                        <td>
                          <Form.Control
                            size="sm"
                            onChange={(event, string) => {
                              this.performanceInputHandler(event, "CGPA", 2);
                            }}
                          />
                        </td>
                        <td>
                          <Form.Control
                            size="sm"
                            onChange={(event, string) => {
                              this.performanceInputHandler(event, "SGPA", 2);
                            }}
                          />
                        </td>
                        <td>
                          <Form.Control
                            size="sm"
                            onChange={(event, string) => {
                              this.performanceInputHandler(
                                event,
                                "BacklogTotal",
                                2
                              );
                            }}
                          />
                        </td>
                        <td>
                          <Form.Control
                            size="sm"
                            onChange={(event, string) => {
                              this.performanceInputHandler(
                                event,
                                "BacklogOngoing",
                                2
                              );
                            }}
                          />
                        </td>
                        <td>
                          <Form.File
                            id="exampleFormControlFile1"
                            onChange={(event, string) => {
                              this.onFileChange(event, 2);
                            }}
                          />
                        </td>
                      </tr>
                    </Col>
                    <Col>
                      <tr>
                        <td>
                          <Form.Label column="sm">3</Form.Label>
                        </td>
                        <td>
                          <Form.Control
                            size="sm"
                            onChange={(event, string) => {
                              this.performanceInputHandler(event, "CGPA", 3);
                            }}
                          />
                        </td>
                        <td>
                          <Form.Control
                            size="sm"
                            onChange={(event, string) => {
                              this.performanceInputHandler(event, "SGPA", 3);
                            }}
                          />
                        </td>
                        <td>
                          <Form.Control
                            size="sm"
                            onChange={(event, string) => {
                              this.performanceInputHandler(
                                event,
                                "BacklogTotal",
                                3
                              );
                            }}
                          />
                        </td>
                        <td>
                          <Form.Control
                            size="sm"
                            onChange={(event, string) => {
                              this.performanceInputHandler(
                                event,
                                "BacklogOngoing",
                                3
                              );
                            }}
                          />
                        </td>
                        <td>
                          <Form.File
                            id="exampleFormControlFile1"
                            onChange={(event, string) => {
                              this.onFileChange(event, 3);
                            }}
                          />
                        </td>
                      </tr>
                    </Col>
                    <Col>
                      <tr>
                        <td>
                          <Form.Label column="sm">4</Form.Label>
                        </td>
                        <td>
                          <Form.Control
                            size="sm"
                            onChange={(event, string) => {
                              this.performanceInputHandler(event, "CGPA", 4);
                            }}
                          />
                        </td>
                        <td>
                          <Form.Control
                            size="sm"
                            onChange={(event, string) => {
                              this.performanceInputHandler(event, "SGPA", 4);
                            }}
                          />
                        </td>
                        <td>
                          <Form.Control
                            size="sm"
                            onChange={(event, string) => {
                              this.performanceInputHandler(
                                event,
                                "BacklogTotal",
                                4
                              );
                            }}
                          />
                        </td>
                        <td>
                          <Form.Control
                            size="sm"
                            onChange={(event, string) => {
                              this.performanceInputHandler(
                                event,
                                "BacklogOngoing",
                                4
                              );
                            }}
                          />
                        </td>
                        <td>
                          <Form.File
                            id="exampleFormControlFile1"
                            onChange={(event, string) => {
                              this.onFileChange(event, 4);
                            }}
                          />
                        </td>
                      </tr>
                    </Col>
                    <Col>
                      <tr>
                        <td>
                          <Form.Label column="sm">5</Form.Label>
                        </td>
                        <td>
                          <Form.Control
                            size="sm"
                            onChange={(event, string) => {
                              this.performanceInputHandler(event, "CGPA", 5);
                            }}
                          />
                        </td>
                        <td>
                          <Form.Control
                            size="sm"
                            onChange={(event, string) => {
                              this.performanceInputHandler(event, "SGPA", 5);
                            }}
                          />
                        </td>
                        <td>
                          <Form.Control
                            size="sm"
                            onChange={(event, string) => {
                              this.performanceInputHandler(
                                event,
                                "BacklogTotal",
                                5
                              );
                            }}
                          />
                        </td>
                        <td>
                          <Form.Control
                            size="sm"
                            onChange={(event, string) => {
                              this.performanceInputHandler(
                                event,
                                "BacklogOngoing",
                                5
                              );
                            }}
                          />
                        </td>
                        <td>
                          <Form.File
                            id="exampleFormControlFile1"
                            onChange={(event, string) => {
                              this.onFileChange(event, 5);
                            }}
                          />
                        </td>
                      </tr>
                    </Col>
                    <Col>
                      <tr>
                        <td>
                          <Form.Label column="sm">6</Form.Label>
                        </td>
                        <td>
                          <Form.Control
                            size="sm"
                            onChange={(event, string) => {
                              this.performanceInputHandler(event, "CGPA", 6);
                            }}
                          />
                        </td>
                        <td>
                          <Form.Control
                            size="sm"
                            onChange={(event, string) => {
                              this.performanceInputHandler(event, "SGPA", 6);
                            }}
                          />
                        </td>
                        <td>
                          <Form.Control
                            size="sm"
                            onChange={(event, string) => {
                              this.performanceInputHandler(
                                event,
                                "BacklogTotal",
                                6
                              );
                            }}
                          />
                        </td>
                        <td>
                          <Form.Control
                            size="sm"
                            onChange={(event, string) => {
                              this.performanceInputHandler(
                                event,
                                "BacklogOngoing",
                                6
                              );
                            }}
                          />
                        </td>
                        <td>
                          <Form.File
                            id="exampleFormControlFile1"
                            onChange={(event, string) => {
                              this.onFileChange(event, 6);
                            }}
                          />
                        </td>
                      </tr>
                    </Col>
                    <Col>
                      <tr>
                        <td>
                          <Form.Label column="sm">7</Form.Label>
                        </td>
                        <td>
                          <Form.Control
                            size="sm"
                            onChange={(event, string) => {
                              this.performanceInputHandler(event, "CGPA", 7);
                            }}
                          />
                        </td>
                        <td>
                          <Form.Control
                            size="sm"
                            onChange={(event, string) => {
                              this.performanceInputHandler(event, "SGPA", 7);
                            }}
                          />
                        </td>
                        <td>
                          <Form.Control
                            size="sm"
                            onChange={(event, string) => {
                              this.performanceInputHandler(
                                event,
                                "BacklogTotal",
                                7
                              );
                            }}
                          />
                        </td>
                        <td>
                          <Form.Control
                            size="sm"
                            onChange={(event, string) => {
                              this.performanceInputHandler(
                                event,
                                "BacklogOngoing",
                                7
                              );
                            }}
                          />
                        </td>
                        <td>
                          <Form.File
                            id="exampleFormControlFile1"
                            onChange={(event, string) => {
                              this.onFileChange(event, 7);
                            }}
                          />
                        </td>
                      </tr>
                    </Col>
                    <Col>
                      <tr>
                        <td>
                          <Form.Label column="sm">8</Form.Label>
                        </td>
                        <td>
                          <Form.Control
                            size="sm"
                            onChange={(event, string) => {
                              this.performanceInputHandler(event, "CGPA", 8);
                            }}
                          />
                        </td>
                        <td>
                          <Form.Control
                            size="sm"
                            onChange={(event, string) => {
                              this.performanceInputHandler(event, "SGPA", 8);
                            }}
                          />
                        </td>
                        <td>
                          <Form.Control
                            size="sm"
                            onChange={(event, string) => {
                              this.performanceInputHandler(
                                event,
                                "BacklogTotal",
                                8
                              );
                            }}
                          />
                        </td>
                        <td>
                          <Form.Control
                            size="sm"
                            onChange={(event, string) => {
                              this.performanceInputHandler(
                                event,
                                "BacklogOngoing",
                                8
                              );
                            }}
                          />
                        </td>
                        <td>
                          <Form.File
                            id="exampleFormControlFile1"
                            onChange={(event, string) => {
                              this.onFileChange(event, 8);
                            }}
                          />
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
            <Button variant="primary" onClick={this.onSubmitHandler}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    profileId: state.userAuth.profileId,
  };
};

export default connect(mapStateToProps)(CurrentModal);
