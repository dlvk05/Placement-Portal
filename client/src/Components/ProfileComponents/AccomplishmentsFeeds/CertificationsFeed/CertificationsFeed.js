import React from "react";
// import CertificationsModal from "../../../../Containers/Profile/Accomplishments/Certifications/CertificationsModal";

const certificationsFeed = (props) => {
  let feed = "there is no content to display"
  if(props.certs!=null){
     feed = props.certs.map((currentCert, i) => (
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
        <span style={{ fontSize: "19px" }}>{currentCert.Title}</span>
        <br />
        <span>{currentCert.Issuer}</span> <br />
        <span>{currentCert.CertificationDate}</span>
        <br />
        <br />
        <span>{currentCert.Description}</span>
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

export default certificationsFeed;
