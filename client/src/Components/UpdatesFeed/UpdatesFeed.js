import React from "react";
import styles from "./UpdatesFeed.module.css";
import { Row, Col } from "react-bootstrap";

const updatesFeed = (props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.subdiv}>
          {/* ^^^ map goes here */}
        <Row>
          <Col className={styles.colStyle}>
            <i class="fas fa-user-circle fa-3x"></i>
            <div xs={1} style={{marginLeft: "10px"}}>
                <p style={{fontSize: "15px"}}><b>Name of Sender</b> <br /><i>Date</i></p>
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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis dolor iste iure blanditiis, aliquam accusantium tempora quae eaque hic explicabo tenetur quis eum ab quos vero aperiam, obcaecati eveniet porro repudiandae consectetur quasi rerum. Quia vitae explicabo aperiam, atque officiis rem, est ratione fugiat cumque, ullam ipsum adipisci libero maxime?
        <hr />
        <h6>Attached Documents: 
            <br />
            <ul style={{listStyle:"none"}}>
                <li> <i class="fas fa-download fa-sm"></i> Document 1</li>
                <li> <i class="fas fa-download fa-sm"></i> Document 2</li>
            </ul>
        </h6>
      </div>
    </div>
  );
};

export default updatesFeed;
