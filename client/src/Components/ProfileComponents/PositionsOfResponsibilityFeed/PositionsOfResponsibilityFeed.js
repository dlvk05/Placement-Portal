import React from "react";
import AddPositionsOfResponsibilityModal from "../../../Containers/Profile/PositionsOfResponsibility/AddPositionsOfResponsibility/AddPositionsOfResponsibilityModal";

const positionsOfResponsibilityFeed = ({ PositionsOfResponsibility }) => {
  var feed = PositionsOfResponsibility.map((currentPosition, i) => (
    <div
      style={{
        border: "groove 2px",
        borderRadius: "8px",
        padding: "10px",
        marginBottom: "10px",
        background: "#F8F8FF",
      }}
    >
      <span style={{ fontSize: "19px" }}>{currentPosition.Title}</span>
      <br />
      <span>{currentPosition.OrganizationName}</span> <br />
      <span>
        (start Date: {currentPosition.StartDate} --- End Date:
        {currentPosition.EndDate})
      </span>
      <br />
      <br />
      <span>{currentPosition.Description}</span>
      <br />
      <br />
      <hr />
      <span>
        <AddPositionsOfResponsibilityModal name="edit" /> |{" "}
        <i class="fas fa-trash-alt fa-lg"> Delete</i>
      </span>
    </div>
  ));
  return feed;
};

export default positionsOfResponsibilityFeed;
