import React from "react";
import styles from "./PersonalSummary.module.css";
import PersonalSummaryModal from "./PersonalSummaryModal/PersonalSummaryModal";

class PersonalSummary extends React.Component {
  render() {
    // console.log(this.props.summary);
    // console.log(this.props);
    return (
      <div className={styles.wrapper} id="Summary">
        <div className={styles.halfcolor}>
          <i class="fas fa-user-circle fa-7x"></i>
        </div>
        <br />
        <i>
          {this.props.userAccountInfo != null
            ? this.props.userAccountInfo.firstName +" " +
              this.props.userAccountInfo.lastName
            : "this is where the Name goes"}
        </i>
        <br />
        <i>
          {this.props.userAccountInfo != null
            ? this.props.userAccountInfo.regNo
            : "this is where the regNo goes"}
        </i>
        <br />
        <i>
          {this.props.userAccountInfo != null
            ? this.props.userAccountInfo.semester
            : "this is where the semester goes"}
          semester{" "}
        </i>
        <br />
        <i>
          {this.props.userAccountInfo != null
            ? this.props.userAccountInfo.department
            : "this is where the department goes"}
        </i>
        <br />
        <i>
          {" "}
          {this.props.userAccountInfo != null
            ? this.props.userAccountInfo.programme
            : "this is where the programme goes"}
        </i>

        <br />
        <i>Manipal University Jaipur</i>
        <hr />
        <i>
          {this.props.data != null
            ? this.props.data
            : "this is where the personal summary goes"}
        </i>
        <hr />
        <PersonalSummaryModal
          currentSummary={this.props.data}
          forceReload={this.props.forceReload}
        />
      </div>
    );
  }
}

export default PersonalSummary;
