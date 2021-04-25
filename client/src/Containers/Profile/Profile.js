import React, { Component } from "react";
import PersonalSummary from './PersonalSummary/PersonalSummary';
import About from "./About/About"
import styles from './Profile.module.css';

class Profile extends Component {
  render() {
    return (
      <div className={styles.wrapper}>
      <div className={styles.sidenav}>
        <h4>Navigation Options</h4>
        <hr />
        <a href="#Summary">Nav option 1</a> <br />
        <a href="#About">Nav option 2</a> <br />
        <a href="#empty">Nav option 3</a> <br />
        <a href="#empty">Nav option 4</a> <br />
        <a href="#empty">Nav option 5</a> <br />
      </div>
      <div className={styles.subdiv3}>
      <a id="Summary"></a>
        <PersonalSummary/>
      </div>
      <div className={styles.subdiv3} style={{marginTop: "20px"}} >
        <a id="About"></a>
        <About/>
      </div>
    </div>
    );
  }
}

export default Profile;
