import React from "react";
// import AwardsModal from "../../../../Containers/Profile/Accomplishments/Awards/AwardsModal";

const awardsFeeds = ( props ) => {
  // console.log(props.awards);
  let feed = (
    <div>
      "No data"
    </div>
  );
  if (props.awards != null) {
    feed = props.awards.map((currentAward, i) => (
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
        <span>{currentAward.IssueDate.slice(0,10)}</span>
        <br />
        <br />
        <span>{currentAward.Description}</span>
        <br />
        <br />
        <hr />
        <span>
          <i class="fas fa-pen-square fa-lg">
            {" "}
            EDIT
            {/* <AwardsModal awards={props.awards}name="edit" forceReload={props.forceReload} /> */}
          </i>{" "}
          | <i class="fas fa-trash-alt fa-lg"> Delete</i>
        </span>
      </div>
    ));
  }

  return feed;
};

export default awardsFeeds;
