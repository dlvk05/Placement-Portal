import React from "react";
import a from "./StudentQuizView.module.css";
import { Modal, Button, Alert } from "react-bootstrap";

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
    show: false,
    currentQuestionNumber: 0,
    lastQuestion: false,
    selectedOption: 0,
    score: 0,
    submittedQuiz: false,
    QandA: [],
  };

  handleShow = () => {
    this.setState({
      show: !this.state.show,
    });
  };

 onOptionSelect = (currentQNo, optionNo) =>{
   this.state.QandA.push(optionNo);

   //check if selected option is currect option and that score isn't more than maxmarks then increase score
    if(this.state.QuizBody[currentQNo].correctOption === optionNo && this.state.score < this.state.MaxMarks){
      this.setState({
        score: this.state.score + 1,
      })
    }
    
    //checks if current question number is not final question
    if(currentQNo<this.state.QuizBody.length-1){
      this.setState({
        currentQuestionNumber: currentQNo + 1
      })
    } else{
      this.setState({
        lastQuestion: true
      })
    }
 }



  render() {
    
let x;
    let QuizReview = this.state.QuizBody.map((currentQ, i) => (
      <div>
        <span style={{display: "none"}}>{currentQ.correctOption===this.state.QandA[i]?  x = "success": x = "danger"}</span>
        <Alert variant={x}>
          <div><b>Q{i+1}.{currentQ.question}</b></div>
          <ol type="1">
            <li>{currentQ.option1}</li>
            <li>{currentQ.option2}</li>
            <li>{currentQ.option3}</li>
            <li>{currentQ.option4}</li>
          </ol>
          <div>Your Answer: <b>{this.state.QandA[i]}</b></div>
          <div>Correct Answer: <b>{currentQ.correctOption}</b></div><br />
        </Alert>
      </div>
    ))


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
            <li>Once an option has been clicked you will be moved to the next question, and the clicked option will be treated as your answer</li>
          </ul>
          <br />
          <br />
          <div>
            <center>
              <Button
                onClick={this.handleShow}
                disabled={this.state.submittedQuiz ? true : false}
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
                    <Button onClick={() => {this.onOptionSelect(this.state.currentQuestionNumber, 1)}} id={1} >
                      {
                        this.state.QuizBody[this.state.currentQuestionNumber]
                          .option1
                      }
                    </Button>{" "}
                  </li>
                  <br />
                  <li>
                    <Button onClick={() => {this.onOptionSelect(this.state.currentQuestionNumber, 2)}} id={2}>
                      {
                        this.state.QuizBody[this.state.currentQuestionNumber]
                          .option2
                      }
                    </Button>
                  </li>
                  <br />
                  <li>
                    <Button onClick={() => {this.onOptionSelect(this.state.currentQuestionNumber, 3)}} id={3}>
                      {
                        this.state.QuizBody[this.state.currentQuestionNumber]
                          .option3
                      }
                    </Button>
                  </li>
                  <br />
                  <li>
                    <Button onClick={() => {this.onOptionSelect(this.state.currentQuestionNumber, 4 )}} id={4}>
                      {
                        this.state.QuizBody[this.state.currentQuestionNumber]
                          .option4
                      }
                    </Button>
                  </li>
                </ol>
                <span style={{ float: "right" }}>
                  {this.state.lastQuestion? <Alert variant="primary">This is the last question</Alert> : ""}
                </span>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={this.handleShow}>
                  Close
                </Button>
                <Button
                  variant="danger"
                  onClick={() => {
                    this.handleShow();
                    this.setState({
                      submittedQuiz: true,
                    });
                  }}
                >
                  Submit Quiz
                </Button>
              </Modal.Footer>
            </Modal>
            <div
              style={{ display: this.state.submittedQuiz ? "block" : "none" }}
            >
              <hr />
              <h4>Your Score: {this.state.score}</h4>
              <hr />
              {QuizReview}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default StudentQuizView;
