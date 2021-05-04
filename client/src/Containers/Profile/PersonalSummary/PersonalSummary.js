import React from "react";
import styles from './PersonalSummary.module.css';
import PersonalSummaryModal from "./PersonalSummaryModal/PersonalSummaryModal";

class PersonalSummary extends React.Component {
  
  render() {
    // console.log(this.props.summary);
    return (
        <div className={styles.wrapper} id="Summary">
            <div className={styles.halfcolor}>
            <i class="fas fa-user-circle fa-7x"></i>
            </div>
            <br/>
            <i>this is where the Reg Number goes</i>
            <br/>
            <i>this is where the semester & dept goes</i>
            <br/>
            <i>this is where the Branch goes</i>
            <br/>
            <i>this is where the college name goes</i>
            <hr/>
            <i>{this.props.data!=null?this.props.data:"this is where the personal summary goes"}</i>
            <hr/>
            <PersonalSummaryModal currentSummary={this.props.data} forceReload={this.props.forceReload}/>
        </div>
    );
  }
}

export default PersonalSummary;
