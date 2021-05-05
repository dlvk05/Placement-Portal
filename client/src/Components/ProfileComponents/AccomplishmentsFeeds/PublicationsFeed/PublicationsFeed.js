import React from "react";
// import PublicationsModal from "../../../../Containers/Profile/Accomplishments/Publications/PublicationsModal";

const publicationsFeed = (props) => {
  let feed = "there is no data to display"
  if(props.pubs!=null){
    feed = props.pubs.map((currenPublication, i) => (
      <div
        style={{
          border: "groove 2px",
          borderRadius: "8px",
          padding: "10px",
          marginBottom: "10px",
          background: "#F8F8FF",
        }}
      >
        <span style={{ fontSize: "19px" }}>{currenPublication.Title}</span>
        <br />
        <span>{currenPublication.Publisher}</span> <br />
        <span>{currenPublication.PublicationDate}</span>
        <br />
        <br />
        <span>{currenPublication.Description}</span>
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

export default publicationsFeed;
