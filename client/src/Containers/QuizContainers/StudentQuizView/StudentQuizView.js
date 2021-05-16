import React from "react";
import a from "./StudentQuizView.module.css";
import { Modal, Button, Alert } from "react-bootstrap";
import axios from "axios";
import { connect } from "react-redux";
class StudentQuizView extends React.Component {
  state = {
    quizId: null,
    QuizTitle: "History of Rome",
    QuizTopic: "Republic of Rome",
    MaxMarks: 5,
    DateOfCreation: new Date(),
    QuizBody: [
      {
        question: "When was Julius Caesar made consul of rome?",
        option1: "59BCE",
        option2: "60BCE",
        option3: "58BCE",
        option4: "61BCE",
        correctOption: 1,
      },
      {
        question: "Did Julius Caesar go to conquer Gaul after his consulship?",
        option1: "Yes",
        option2: "No",
        option3: "No, he went for the self-defense of Rome",
        option4: "None of the above",
        correctOption: 3,
      },
      {
        question: "Who were the Gauls?",
        option1: "they were Celts",
        option2: "They were Germanic",
        option3: "They were saxon",
        option4: "none of the above",
        correctOption: 1,
      },
      {
        question: "Did julius Caesar succeed in his mission to conquer Gaul",
        option1: "Yes",
        option2: "No",
        option3: "He did not go to conquer Gaul",
        option4: "His defeat was greatly exaggerated",
        correctOption: 3,
      },
      {
        question: "Who was the leader of unified Gaul?",
        option1: "Asterix",
        option2: "Vitalstatistix",
        option3: "Obelix",
        option4: "Verkingetorix",
        correctOption: 4,
      },
    ],
    AttemptedBy: [],
    checkedAttempted: false,
    quizLoaded: false,
    attemptedAlready: false,
    attemptScore: null,
    attemptDate: null,
    show: false,
    currentQuestionNumber: 0,
    lastQuestion: false,
    selectedOption: 0,
    score: 0,
    submittedQuiz: false,
    QandA: [],
  };

  componentDidMount() {
    let url = "/api/student/quiz/getSpecificQuiz/" + this.props.match.params.id;
    axios
      .get(url)
      .then((res) => {
        console.log("quizLoaded");
        console.log(res.data.quiz);
        this.setState({
          ...this.state,
          quizId: res.data.quiz._id,
          QuizTitle: res.data.quiz.QuizTitle,
          QuizTopic: res.data.quiz.QuizTopic,
          MaxMarks: res.data.quiz.MaxMarks,
          DateOfCreation: res.data.quiz.DateOfCreation,
          QuizBody: res.data.quiz.QuizBody,
          AttemptedBy: res.data.quiz.AttemptedBy,
          quizLoaded: true,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleShow = () => {
    this.setState({
      show: !this.state.show,
    });
  };

  checkAttemptedStatus = () => {
    let attempted = false,
      attemptScore = null,
      attemptDate = null;
    console.log(this.state.AttemptedBy);

    this.state.AttemptedBy.forEach((attempt) => {
      // console.log(attempt.UserAccount)
      // console.log(this.props.userId)
      if (attempt.UserAccount._id === this.props.userId) {
        attempted = true;
        attemptScore = attempt.MarksScored;
        attemptDate = attempt.AttemptDate;
      }
    });
    this.setState({
      ...this.state,
      checkedAttempted: true,
      attemptedAlready: attempted,
      attemptScore: attemptScore,
      attemptDate: attemptDate,
    });
  };

  onOptionSelect = (currentQNo, optionNo) => {
    this.state.QandA.push(optionNo);

    //check if selected option is currect option and that score isn't more than maxmarks then increase score
    if (
      this.state.QuizBody[currentQNo].correctOption === optionNo &&
      this.state.score < this.state.MaxMarks
    ) {
      this.setState({
        score: this.state.score + 1,
      });
    }

    //checks if current question number is not final question
    if (currentQNo < this.state.QuizBody.length - 1) {
      this.setState({
        currentQuestionNumber: currentQNo + 1,
      });
    } else {
      this.setState({
        lastQuestion: true,
      });
    }
  };

  onSubmitHandler = (event) => {
    let postData = {
      UserAccount: this.props.userId,
      UserProfile: this.props.profileId,
      MarksScored: this.state.score,
      quizId: this.state.quizId,
    };

    let url = "/api/student/quiz/saveResult";
    axios.put(url, postData).then((res) => {
      console.log(res.data.updatedQuiz);
      this.setState({
        ...this.state,
        show: !this.state.show,
        submittedQuiz: true,
        attemptedAlready: true,
      });
    });
  };

  returnDiv = (QuizReview) => {
    let temp = null;
    if (this.state.attemptedAlready && !this.state.submittedQuiz) {
      temp = (
        <div style={{ display: "block" }}>
          <h6>Attempted On: {this.state.attemptDate.slice(0, 10)}</h6>
          <hr />
          <h6>Your Score: {this.state.attemptScore}</h6>
          <hr />
        </div>
      );
    }

    if (this.state.attemptedAlready && this.state.submittedQuiz) {
      temp = (
        <div style={{ display: "block" }}>
          <h6>Your Score: {this.state.score}</h6>
          <hr />
          {QuizReview}
        </div>
      );
    }
    return temp;
  };

  render() {
    if (this.state.quizLoaded && this.state.checkedAttempted === false) {
      this.checkAttemptedStatus();
    }

    let x;
    let QuizReview = this.state.QuizBody.map((currentQ, i) => (
      <div>
        <span style={{ display: "none" }}>
          {currentQ.correctOption === this.state.QandA[i]
            ? (x = "success")
            : (x = "danger")}
        </span>
        <Alert variant={x}>
          <div>
            <b>
              Q{i + 1}.{currentQ.question}
            </b>
          </div>
          <ol type="1">
            <li>{currentQ.option1}</li>
            <li>{currentQ.option2}</li>
            <li>{currentQ.option3}</li>
            <li>{currentQ.option4}</li>
          </ol>
          <div>
            Your Answer: <b>{this.state.QandA[i]}</b>
          </div>
          <div>
            Correct Answer: <b>{currentQ.correctOption}</b>
          </div>
          <br />
        </Alert>
      </div>
    ));

    return (
      <div className={a.wrapper}>
        <div className={a.container}>
          <h3>{this.state.QuizTitle}</h3>
          <hr />
          <div>
            <h5>Quiz Topic: {this.state.QuizTopic}</h5>
          </div>
          <div>
            <h5>Maximum Marks: {this.state.MaxMarks}</h5>
          </div>
          <hr />
          <div>
            <h6>General Instructions</h6>
          </div>
          <hr />
          <ul>
            <li>Each Correct Question is of 1 Mark</li>
            <li>
              There is NO nagative marking, wrong answers will not lead to marks
              deduction
            </li>
            <li>
              Once you move to the next question, your previous question will
              not be viewable again
            </li>
            <li>Once submitted, the quiz cannot be attempted again</li>
            <li>
              Once an option has been clicked you will be moved to the next
              question, and the clicked option will be treated as your answer
            </li>
          </ul>
          <br />
          <br />
          <div>
            <center>
              <Button
                onClick={this.handleShow}
                disabled={this.state.attemptedAlready ? true : false}
              >
                Start The Quiz
              </Button>
            </center>

            <Modal show={this.state.show} onHide={this.handleShow}>
              <Modal.Header closeButton>
                <Modal.Title>Your Quiz Has Started</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div>
                  Q{this.state.currentQuestionNumber + 1}.
                  {
                    this.state.QuizBody[this.state.currentQuestionNumber]
                      .question
                  }
                </div>
                <hr />
                <ol type="A">
                  <li>
                    <Button
                      onClick={() => {
                        this.onOptionSelect(
                          this.state.currentQuestionNumber,
                          1
                        );
                      }}
                      id={1}
                    >
                      {
                        this.state.QuizBody[this.state.currentQuestionNumber]
                          .option1
                      }
                    </Button>{" "}
                  </li>
                  <br />
                  <li>
                    <Button
                      onClick={() => {
                        this.onOptionSelect(
                          this.state.currentQuestionNumber,
                          2
                        );
                      }}
                      id={2}
                    >
                      {
                        this.state.QuizBody[this.state.currentQuestionNumber]
                          .option2
                      }
                    </Button>
                  </li>
                  <br />
                  <li>
                    <Button
                      onClick={() => {
                        this.onOptionSelect(
                          this.state.currentQuestionNumber,
                          3
                        );
                      }}
                      id={3}
                    >
                      {
                        this.state.QuizBody[this.state.currentQuestionNumber]
                          .option3
                      }
                    </Button>
                  </li>
                  <br />
                  <li>
                    <Button
                      onClick={() => {
                        this.onOptionSelect(
                          this.state.currentQuestionNumber,
                          4
                        );
                      }}
                      id={4}
                    >
                      {
                        this.state.QuizBody[this.state.currentQuestionNumber]
                          .option4
                      }
                    </Button>
                  </li>
                </ol>
                <span style={{ float: "right" }}>
                  {this.state.lastQuestion ? (
                    <Alert variant="primary">This is the last question</Alert>
                  ) : (
                    ""
                  )}
                </span>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={this.onSubmitHandler}>
                  Close
                </Button>
                <Button variant="danger" onClick={this.onSubmitHandler}>
                  Submit Quiz
                </Button>
              </Modal.Footer>
            </Modal>
            {this.returnDiv(QuizReview)}
            {/* <div
              style={{
                display: this.state.attemptedAlready ? "block" : "none",
              }}
            >
              <hr />
              <h4>Your Score: {this.state.attemptScore}</h4>
              <hr />
              {QuizReview}
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userId: state.userAuth.userId,
    profileId: state.userAuth.profileId,
  };
};

export default connect(mapStateToProps)(StudentQuizView);
