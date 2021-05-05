import React from "react";
import styles from './PersonalSummary.module.css';
import PersonalSummaryModal from "./PersonalSummaryModal/PersonalSummaryModal";

class PersonalSummary extends React.Component {
  
  render() {
    // console.log(this.props.summary);
    console.log(this.props);
    return (
        <div className={styles.wrapper} id="Summary">
            <div className={styles.halfcolor}>
            <i class="fas fa-user-circle fa-7x"></i>
            </div>
            <br/>
            <i>Name: {this.props.firstName} {this.props.lastName}</i>
            <br/>
            <i>{this.props.regNo}</i>
            <br/>
            <i>{this.props.semester} semester </i>
            <br/>
            <i>{this.props.department}</i>
            <br/>
            <i>{this.props.programme}</i>
            <br/>
            <i>Manipal University Jaipur</i>
            <hr/>
            <i>{this.props.data!=null?this.props.data:"this is where the personal summary goes"}</i>
            <hr/>
            <PersonalSummaryModal currentSummary={this.props.data} forceReload={this.props.forceReload}/>
        </div>
    );
  }
}

export default PersonalSummary;
