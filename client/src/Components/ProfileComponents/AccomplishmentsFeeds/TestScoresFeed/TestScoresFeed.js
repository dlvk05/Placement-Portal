import React from "react";
import { Row, Col } from "react-bootstrap";
import TestScoresModal from "../../../../Containers/Profile/Accomplishments/TestScores/TestScoresModal";

const testScoresFeed = ({ testscores }) => {
  let feed = testscores.map((currentScore, i) => (
    <div
      style={{
        border: "groove 2px",
        borderRadius: "8px",
        padding: "10px",
        marginBottom: "10px",
        background: "#F8F8FF",
      }}
    >
      <Row>
        <Col>
          <span style={{ fontSize: "19px" }}>{currentScore.Title}</span>
          <br />
        </Col>
        <Col>
          <span style={{ fontSize: "19px" }}>{currentScore.ScoreObtained}</span>
          <br />
        </Col>
      </Row>
      <span>{currentScore.RankObtained}</span> <br />
      <span>{currentScore.ExamDate}</span>
      <br />
      <br />
      <span>{currentScore.Description}</span>
      <br />
      <br />
      <hr />
      <span>
        <i
          class="fas fa-pen-square fa-lg"
        >
          {" "}
          <TestScoresModal name="edit"/>
        </i>{" "}
        | <i class="fas fa-trash-alt fa-lg"> Delete</i>
      </span>
    </div>
  ));
  return feed;
};

export default testScoresFeed;
