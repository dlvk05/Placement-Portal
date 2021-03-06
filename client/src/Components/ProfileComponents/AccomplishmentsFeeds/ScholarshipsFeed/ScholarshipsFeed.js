import React from "react";
// import ScholarshipsModal from "../../../../Containers/Profile/Accomplishments/Scholarships/ScholarshipsModal";

const scholarshipsFeed = (props) => {
  let feed = "there is no data to display"
  if(props.scholarships!=null){
    feed = props.scholarships.map((currentScholarship, i) => (
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
        <span style={{ fontSize: "19px" }}>{currentScholarship.Title}</span>
        <br />
        <span>{currentScholarship.GrantDate}</span>
        <br />
        <br />
        <span>{currentScholarship.Description}</span>
        <br />
        <br />
        <hr />
        <span>
          <i
            class="fas fa-pen-square fa-lg"
          >
            {" "}
            Edit
          </i>{" "}
          | <i class="fas fa-trash-alt fa-lg"> Delete</i>
        </span>
      </div>
    ));
  }
  return feed;
};

export default scholarshipsFeed;
