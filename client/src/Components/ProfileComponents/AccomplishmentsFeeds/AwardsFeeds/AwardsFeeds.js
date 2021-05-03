import React from "react";
import AwardsModal from "../../../../Containers/Profile/Accomplishments/Awards/AwardsModal";

const awardsFeeds = ({ awards }) => {
  let feed = awards.map((currentAward, i) => (
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
      <span style={{ fontSize: "19px" }}>{currentAward.Title}</span>
      <br />
      <span>{currentAward.Issuer}</span> <br />
      <span>{currentAward.IssueDate}</span>
      <br />
      <br />
      <span>{currentAward.Description}</span>
      <br />
      <br />
      <hr />
      <span>
        <i class="fas fa-pen-square fa-lg">
          {" "}
          <AwardsModal name="edit" />
        </i>{" "}
        | <i class="fas fa-trash-alt fa-lg"> Delete</i>
      </span>
    </div>
  ));
  return feed;
};

export default awardsFeeds;
