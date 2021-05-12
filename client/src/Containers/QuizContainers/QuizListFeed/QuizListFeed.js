import React from "react";
import { Form, Col, Table } from "react-bootstrap";
import a from "./QuizListFeed.module.css";
import { Link } from "react-router-dom";


class QuizListFeed extends React.Component {
  state = {
    QuizList: [
      {
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
            question:
              "Did Julius Caesar go to conquer Gaul after his consulship?",
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
            question:
              "Did julius Caesar succeed in his mission to conquer Gaul",
            option1: "Yes",
            option2: "No",
            option3: "He did not go to conquer Gaul",
            option4: "His defeat was greatly exaggerated",
            correctOption: "3",
          },
          {
            question: "Who was the leader of unified Gaul?",
            option1: "Getafix",
            option2: "Vitalstatistix",
            option3: "Dogmatix",
            option4: "Verkingetorix",
            correctOption: 4,
          },
        ],
      },
      {
        QuizTitle: "Quiz 2",
        QuizTopic: "Science",
        MaxMarks: 4,
        QuizBody: [
          {
            question: "asgnaisnhaoghaga ",
            option1: "agdnfkcn ",
            option2: "jndsniojomj",
            option3: "dn osdm h",
            option4: "dmdmnfgi",
            correctOption: 2,
          },
          {
            question: "ansgahmds",
            option1: "mhkkjoyfkhf",
            option2: "nvjsddginidb",
            option3: "vndbismb",
            option4: "sdbdsnfx",
            correctOption: 4,
          },
          {
            question: "lorem ipusm as goangonongaduogaevaax",
            option1: "svnas",
            option2: "asgjamghskdhhs",
            option3: "gnoutnhtoyinrhw5",
            option4: "klsngrgmrba",
            correctOption: 3,
          },
          {
            question: "gnosermhns",
            option1: "sdgvzxcbx",
            option2: "dsccg",
            option3: "fhsddiof",
            option4: "fgkrji4jfugjgndgswacsf",
            correctOption: 1,
          },
        ],
      },
    ],
  };

  render() {
    let list;
    list = this.state.QuizList.map((currentQuiz, i) => (
      <tr key={i}>
        <td><Link>{currentQuiz.QuizTitle}</Link></td>
        <td>{currentQuiz.QuizTopic}</td>
        <td>{currentQuiz.MaxMarks}</td>
        <td>Not Attempted</td>
      </tr>
    ));

    return (
      <div className={a.wrapper}>
        <div className={a.container}>
          <h3>Quizes</h3>
          <hr />
          <div>
            <Form inline>
              <div>
                <Form.Group as={Col} controlId="SearchQuizes">
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
                        this.inputChangeHandler(event, "QuizSearch");
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
                        console.log("drop down is being read");
                      }}
                    >
                      <option eventkey="none" selected disabled hidden>
                        Please Select an Option
                      </option>
                      <option value="createdOn" eventkey="1">
                        Created Date
                      </option>
                      <option value="JobProfileTitle" eventkey="2">
                        Job Title
                      </option>
                      <option value="CompanyName" eventkey="3">
                        Company Name
                      </option>
                      <option value="Location" eventkey="4">
                        Location
                      </option>
                      <option value="ApplicationDeadLine" eventkey="5">
                        Application Deadline
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
                <td><b>Quiz Title</b></td>
                <td><b>Quiz Topic</b></td>
                <td><b>Maximum Marks</b></td>
                <td><b>Status</b></td>
              </tr>
            </thead>
            {list}
          </Table>
        </div>
      </div>
    );
  }
}

export default QuizListFeed;
