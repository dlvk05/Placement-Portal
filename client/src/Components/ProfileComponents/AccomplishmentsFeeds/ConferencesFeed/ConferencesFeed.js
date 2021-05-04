import React from "react";
// import ConferencesModal from "../../../../Containers/Profile/Accomplishments/Conferences/ConferencesModal";

const conferencesFeed = (props) => {
  let feed = "there is no data to display"
  if(props.conferences!=null){
    feed = props.conferences.map((currentConference, i) => (
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
        <span style={{ fontSize: "19px" }}>{currentConference.Title}</span>
        <br />
        <span>{currentConference.Organizer}</span> <br />
        <span>{currentConference.EventDate}</span>
        <br />
        <br />
        <span>{currentConference.Description}</span>
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

export default conferencesFeed;
