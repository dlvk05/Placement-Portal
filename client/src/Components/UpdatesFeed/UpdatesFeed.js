import React from "react";
import styles from "./UpdatesFeed.module.css";
import { Row, Col } from "react-bootstrap";
import axios from "axios";

var fileDownload = require("js-file-download");

const updatesFeed = (props) => {
  console.log("got props");
  console.log(props.data);

  const createMarkup = (i) => {
    return { __html: props.data[i].UpdateBody };
  };

  /* const onFileDownload = (subHeader, fileName) => {
    console.log("onFileDownload called");

    axios({
      url: "/api/downloadFile",
      method: "GET",
      params: {
        folderName: "Profile",
        profileId: this.props.profileId,
        header: "Education",
        subHeader: subHeader,
        fileName: fileName,
      },
      responseType: "blob", // Important
    }).then((response) => {
      fileDownload(response.data, fileName);
    });
  }; */

  let feed;
  if (props.data.length === 0) {
    feed = <div>No Updates Yet!!!</div>;
  } 
  else {
    feed = props.data.map((currentUpdate, i) => (
      <div className={styles.subdiv} key={i}>
        <Row>
          <Col className={styles.colStyle}>
            <i class="fas fa-user-circle fa-3x"></i>
            <div xs={1} style={{ marginLeft: "10px" }}>
              <p style={{ fontSize: "15px" }}>
                <b>
                  {currentUpdate.AdminAccount.firstName}{" "}
                  {currentUpdate.AdminAccount.lastName}
                </b>{" "}
                <br />
                <i>{currentUpdate.DateOfCreation}</i>
              </p>
            </div>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col>
            <h5>{currentUpdate.UpdateTitle}</h5>
          </Col>
        </Row>
        <hr />
        <div dangerouslySetInnerHTML={createMarkup(i)}></div>
        <hr />

        {currentUpdate.FileAttached !== true ? (
          "There are no attached documents with this post"
        ) : (
          <h6>
            Attached Documents:
            <br />
            <ul style={{ listStyle: "none" }}>
              <li /* onClick={() => onFileDownload("current", currentUpdate.FileName)} */>
                {" "}
                <i class="fas fa-download fa-sm"></i> {currentUpdate.FileName}
              </li>
            </ul>
          </h6>
        )}
      </div>
    ));
  }

  return (
    <div className={styles.wrapper}>
      {feed}
      {/* <div className={styles.subdiv}>
        <Row>
          <Col className={styles.colStyle}>
            <i class="fas fa-user-circle fa-3x"></i>
            <div xs={1} style={{ marginLeft: "10px" }}>
              <p style={{ fontSize: "15px" }}>
                <b>Name of Sender</b> <br />
                <i>Date</i>
              </p>
            </div>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col>
            <h5>Lorem, ipsum dolor sit amet consectetur adipisicing.</h5>
          </Col>
        </Row>
        <hr />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis dolor
        iste iure blanditiis, aliquam accusantium tempora quae eaque hic
        explicabo tenetur quis eum ab quos vero aperiam, obcaecati eveniet porro
        repudiandae consectetur quasi rerum. Quia vitae explicabo aperiam, atque
        officiis rem, est ratione fugiat cumque, ullam ipsum adipisci libero
        maxime?
        <hr />
        <h6>
          Attached Documents:
          <br />
          <ul style={{ listStyle: "none" }}>
            <li>
              {" "}
              <i class="fas fa-download fa-sm"></i> Document 1
            </li>
            <li>
              {" "}
              <i class="fas fa-download fa-sm"></i> Document 2
            </li>
          </ul>
        </h6>
      </div> */}
    </div>
  );
};

export default updatesFeed;
