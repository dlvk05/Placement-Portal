import React from "react";
import CompetitionsModal from "../../../../Containers/Profile/Accomplishments/Competitions/CompetitionsModal";

const competitionsFeed = ({ competitions }) => {
  let feed = competitions.map((currentCompetition, i) => (
    <div
    key={i}
      style={{
        border: "groove 2px",
        borderRadius: "8px",
        padding: "10px",
        marginBottom: "10px",
        background: "#F8F8FF",
      }}
    >
      <span style={{ fontSize: "19px" }}>{currentCompetition.Title}</span>
      <br />
      <span>{currentCompetition.Position}</span> <br />
      <span>{currentCompetition.CompetitionDate}</span>
      <br />
      <br />
      <span>{currentCompetition.Description}</span>
      <br />
      <br />
      <hr />
      <span>
        <i
          
          class="fas fa-pen-square fa-lg"
        >
          {" "}
          <CompetitionsModal name="edit"/>
        </i>{" "}
        | <i class="fas fa-trash-alt fa-lg"> Delete</i>
      </span>
    </div>
  ));

  return feed;
};

export default competitionsFeed;
