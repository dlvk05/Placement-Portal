import React from "react";
import { Form, Col, Table, Button } from "react-bootstrap";
import a from "./QuizListFeed.module.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
var fileDownload = require("js-file-download");
toast.configure();

class QuizListFeed extends React.Component {
  state = {
    QuizList: [],
    QuizListLoaded: false,
    Search: "",
    SortBy: null,
  };

  componentDidMount() {
    // console.log("component did mount");
    axios
      .get("/api/student/quiz/getAllQuizzes")
      .then((res) => {
        // console.log("quizzes loaded");
        // console.log(res.data.quizzes);
        this.setState({
          QuizList: res.data.quizzes,
          QuizListLoaded: true,
        });
      })
      .catch((err) => {
        console.log("error ocurred at /api/student/quiz/getAllQuizzes");
        console.log(err);
      });
  }

  returnStatus = (currentQuiz) => {
    let status = "Not Attempted";

    // console.log(currentQuiz);
    if (this.props.isAdmin) {
      status = currentQuiz.AttemptedBy.length + " Attempts";
    }

    if (currentQuiz.AttemptedBy.length > 0) {
      currentQuiz.AttemptedBy.forEach((attempt) => {
        // console.log(attempt)
        if (attempt.UserAccount._id === this.props.userId) {
          status = "Scored " + attempt.MarksScored;
        }
      });
    }

    return status;
  };

  handlePageChange = (id) => {
    if (this.props.isAdmin) {
      console.log("something");
    } else {
      this.props.history.push("/StudentQuizView/" + id);
    }
  };

  inputChangeHandler = (event, inputIdentifier) => {
    console.log(inputIdentifier);
    console.log(event.target.value);
    this.setState({
      ...this.state,
      [inputIdentifier]: event.target.value,
    });
  };

  filterArray = (quizzes) => {
    if (quizzes.length > 0) {
      if (this.state.Search != "") {
        return quizzes.filter((quiz) => {
          if (
            quiz.QuizTitle.toLowerCase().includes(
              this.state.Search.toLowerCase()
            ) ||
            quiz.QuizTopic.toLowerCase().includes(
              this.state.Search.toLowerCase()
            )
          ) {
            return true;
          }
          return false;
        });
      } else {
        return quizzes;
      }
    } else {
      return quizzes;
    }
  };

  sortArray = (quizzes) => {
    if (quizzes.length <= 0 || this.state.SortBy == null) {
      return quizzes.reverse();
    } else {
      if (
        this.state.SortBy === "QuizTitle" ||
        this.state.SortBy === "QuizTopic"
      ) {
        quizzes.sort((a, b) => {
          let fa = a[this.state.SortBy].toLowerCase(),
            fb = b[this.state.SortBy].toLowerCase();

          if (fa < fb) {
            return -1;
          }
          if (fa > fb) {
            return 1;
          }
          return 0;
        });
      } else if (this.state.SortBy === "DateOfCreation") {
        quizzes.sort((a, b) => {
          let fa = new Date(a[this.state.SortBy]),
            fb = new Date(b[this.state.SortBy]);

          return fa - fb;
        });
      }
      return quizzes;
    }
  };

  downloadReportHandler = (currentQuiz) => {
    if (currentQuiz.AttemptedBy.length <= 0) {
      toast.error("No attempts have been made yet");
      return;
    }

    let fileName =
      currentQuiz.QuizTitle + "_" + currentQuiz.QuizTopic + "_Results.csv";
    let url = "/api/quiz/downloadQuizReport/" + currentQuiz._id;
    console.log(url);
    axios({
      url: url,
      method: "GET",
      responseType: "blob",
    }).then((res) => {
      console.log("file downloaded");
      fileDownload(res.data, fileName);
    });
  };

  render() {
    let filteredQuizzes = [];
    filteredQuizzes = this.filterArray(this.state.QuizList);
    this.sortArray(filteredQuizzes);
    let list;
    list =
      filteredQuizzes.length === 0 ? (
        <div>Nothing to Show</div>
      ) : (
        filteredQuizzes.map((currentQuiz, i) => (
          <tr key={i}>
            <td>
              <Link onClick={() => this.handlePageChange(currentQuiz._id)}>
                {currentQuiz.QuizTitle}
              </Link>
            </td>
            <td>{currentQuiz.QuizTopic}</td>
            <td>{currentQuiz.MaxMarks}</td>
            <td>{this.returnStatus(currentQuiz)}</td>
            {this.props.isAdmin ? (
              <td>
                <Button onClick={() => this.downloadReportHandler(currentQuiz)}>
                  Download
                </Button>
              </td>
            ) : null}
          </tr>
        ))
      );

    return (
      <div className={a.wrapper}>
        <div className={a.container}>
          <h3>Quizzes</h3>
          <hr />
          <div>
            <Form inline>
              <div>
                <Form.Group as={Col} controlId="SearchQuizzes">
                  <Form.Row>
                    <Form.Label column="sm">
                      <i class="fas fa-search"></i> Search{" "}
                    </Form.Label>
                    <Form.Control
                      type="QuizSearch"
                      placeholder="Type Here"
                      required
                      size="sm"
                      onChange={(event, string) => {
                        this.inputChangeHandler(event, "Search");
                      }}
                    />
                  </Form.Row>
                </Form.Group>
              </div>
              <div>
                <Form.Group controlId="exampleForm.SelectCustom" as={Col}>
                  <Form.Row>
                    <Form.Label column="sm">Sort By</Form.Label>
                    <Form.Control
                      as="select"
                      custom
                      size="sm"
                      onChange={(event, string) => {
                        this.inputChangeHandler(event, "SortBy");
                        // console.log("drop down is being read");
                      }}
                    >
                      <option eventkey="none" selected disabled hidden>
                        Please Select an Option
                      </option>
                      <option value="DateOfCreation" eventkey="1">
                        Created Date
                      </option>
                      <option value="QuizTitle" eventkey="2">
                        Quiz Title
                      </option>
                      <option value="QuizTopic" eventkey="3">
                        Quiz Topic
                      </option>
                    </Form.Control>
                  </Form.Row>
                </Form.Group>
              </div>
            </Form>
          </div>
          <hr />
          <br />
          <br />
          <Table>
            <thead>
              <tr>
                <td>
                  <b>Quiz Title</b>
                </td>
                <td>
                  <b>Quiz Topic</b>
                </td>
                <td>
                  <b>Maximum Marks</b>
                </td>
                <td>
                  <b>Status</b>
                </td>
                {this.props.isAdmin ? (
                  <td>
                    <b>Download Report</b>
                  </td>
                ) : null}
              </tr>
            </thead>
            {list}
          </Table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userId: state.userAuth.userId,
    isAdmin: state.userAuth.isAdmin,
  };
};

export default connect(mapStateToProps)(QuizListFeed);
