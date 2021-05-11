import React from "react";
import a from "./StudentQuizView.module.css";
import { Modal, Button } from "react-bootstrap";

class StudentQuizView extends React.Component {
  state = {
    QuizTitle: "History of Rome",
    QuizTopic: "Republic of Rome",
    MaxMarks: 5,
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
        correctOption: "3",
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
    show: false,
    currentQuestionNumber: 0,
    lastQuestion: false,
  };

  noQuestionsLeft = "No Questions left";
  nextQuestion = "Next Question";

  handleShow = () => {
    this.setState({
      show: !this.state.show,
    });
  };

  render() {
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
          </ul>
          <br />
          <br />
          <div>
            <center>
              <Button onClick={this.handleShow}>Start The Quiz</Button>
            </center>

            <Modal show={this.state.show} onHide={this.handleShow}>
              <Modal.Header closeButton>
                <Modal.Title>Your Quiz Has Started</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div>Q{this.state.currentQuestionNumber+1}.
                  {
                    this.state.QuizBody[this.state.currentQuestionNumber]
                      .question
                  }
                </div>
                <hr />
                <ol type="A">
                  <li>
                    <Button>
                      {
                        this.state.QuizBody[this.state.currentQuestionNumber]
                          .option1
                      }
                    </Button>{" "}
                  </li>
                  <br />
                  <li>
                    <Button>
                      {
                        this.state.QuizBody[this.state.currentQuestionNumber]
                          .option2
                      }
                    </Button>
                  </li>
                  <br />
                  <li>
                    <Button>
                      {
                        this.state.QuizBody[this.state.currentQuestionNumber]
                          .option3
                      }
                    </Button>
                  </li>
                  <br />
                  <li>
                    <Button>
                      {
                        this.state.QuizBody[this.state.currentQuestionNumber]
                          .option4
                      }
                    </Button>
                  </li>
                </ol>
                <span style={{ float: "right" }}>
                  <Button
                    variant="success"
                    onClick={() => {
                        if(this.state.currentQuestionNumber<this.state.QuizBody.length-1){
                            this.setState({
                              currentQuestionNumber:
                                this.state.currentQuestionNumber + 1,
                            });
                        }else {
                            this.setState({
                                lastQuestion: true
                            })
                        }
                    }}
                  >
                    {this.state.lastQuestion===true? this.noQuestionsLeft : this.nextQuestion}
                  </Button>
                </span>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={this.handleShow}>
                  Close
                </Button>
                <Button variant="danger" onClick={this.handleShow}>
                  Submit Quiz
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
      </div>
    );
  }
}

export default StudentQuizView;
