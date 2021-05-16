import React from "react";
import styles from "./AdminUpdatesFeed.module.css";
import { Row, Col, Button } from "react-bootstrap";
import axios from "axios";
var fileDownload = require("js-file-download");

const AdminUpdatesFeed = (props) => {
  console.log("got props");
  console.log(props.data);

  const createMarkup = (i) => {
    return { __html: props.data[i].UpdateBody };
  };

  const onFileDownload = (updateID, fileName) => {
    console.log("onFileDownload called");

    axios({
      url: "/api/updates/downloadFile",
      method: "GET",
      params: {
        updateID: updateID,
        fileName: fileName,
      },
      responseType: "blob", // Important
    }).then((response) => {
      fileDownload(response.data, fileName);
    });
  };

  const onDeleteHandler = (updateID) => {
    let url = "/api/updates/deleteSpecificUpdate";
    let postData = { updateID: updateID };
    axios
      .post(url, postData)
      .then((res) => {
        console.log("deleted post");
        props.forceReload();
      })
      .catch((err) => console.log(err));
  };

  let feed;
  if (props.data.length === 0) {
    feed = <div>No Updates Yet!!!</div>;
  } else {
    feed = props.data
      .map((currentUpdate, i) => (
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
                  <i>{currentUpdate.DateOfCreation.slice(0,10)}</i>
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
                <li
                  onClick={() =>
                    onFileDownload(currentUpdate._id, currentUpdate.FileName)
                  }
                >
                  {" "}
                  <i class="fas fa-download fa-sm"></i> {currentUpdate.FileName}
                </li>
              </ul>
            </h6>
          )}
          <hr />
          <Button onClick={() => onDeleteHandler(currentUpdate._id)}>
            Delete
          </Button>
        </div>
      ))
      .reverse();
  }

  return <div className={styles.wrapper}>{feed}</div>;
};

export default AdminUpdatesFeed;
