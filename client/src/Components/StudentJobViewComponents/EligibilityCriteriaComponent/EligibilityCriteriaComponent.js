/* eslint-disable eqeqeq */
import React from "react";
import { Table } from "react-bootstrap";
import styles from "./EligibilityCriteriaComponent.module.css";

const eligibilityCriteriaComponent = (props) => {
  const EligibilityCriteria = props.EligibilityCriteria;
  const eligibilityResults = props.eligibilityResults;
  const currentResults = props.currentResults;
  const currentOffers = props.currentOffers;
  const finalEligibility = props.finalEligibility;

  const returnIcon = (val) => {
    if (val) {
      return (
        <i
          class="far fa-check-circle fa-2x"
          style={{ color: "greenyellow" }}
        ></i>
      );
    } else {
      return <i class="fas fa-times-circle fa-2x" style={{ color: "red" }}></i>;
    }
  };

  console.log(EligibilityCriteria.ProgrammesAllowed);

  let studentEligibilityTable = (
    <Table striped bordered hover>
      <thead>
        <tr>
          <td>
            <b>Eligibility Requirements</b>
          </td>
          <td>
            <b>Student Status</b>
          </td>
          <td>
            <b>Validity</b>
          </td>
        </tr>
      </thead>
      <tr>
        <td>
          Maximum of 3 offers allowed in placement: Campus Placements for
          2020-2021
        </td>
        <td>
          currently has {currentOffers != null ? currentOffers.TotalOffers : ""}{" "}
          offers
        </td>
        <td>{returnIcon(eligibilityResults.MaxOffers3)}</td>
      </tr>
      <tr>
        <td>Maximum of 2 offers allowed in ITES Category</td>
        <td>Currently has {currentOffers != null ? currentOffers.ITES : ""}</td>
        <td>{returnIcon(eligibilityResults.ItesOffers)}</td>
      </tr>
      <tr>
        <td>Maximum of 1 offers allowed in CORE/PREFERRED Category</td>
        <td>
          currently has {currentOffers != null ? currentOffers.CORE : ""} offers
        </td>
        <td>{returnIcon(eligibilityResults.CoreOffers)}</td>
      </tr>
      <tr>
        <td>Maximum of 1 offers allowed in R & D Category</td>
        <td>
          currently has {currentOffers != null ? currentOffers.RandD : ""}{" "}
          offers
        </td>
        <td>{returnIcon(eligibilityResults.RnDOffers)}</td>
      </tr>
      <tr>
        <td>Maximum of 2 offers allowed in NON-CORE Category</td>
        <td>
          currently has {currentOffers != null ? currentOffers.NonCORE : ""}{" "}
          offers
        </td>
        <td>{returnIcon(eligibilityResults.NonCoreOffers)}</td>
      </tr>
      <tr>
        <td>Maximum of 1 offer allowed in Dream Category</td>
        <td>
          currently has {currentOffers != null ? currentOffers.Dream : ""}{" "}
          offers
        </td>
        <td>{returnIcon(eligibilityResults.DreamOffer)}</td>
      </tr>
      <tr>
        <td>
          Programmes Allowed:{" "}
          {EligibilityCriteria.ProgrammesAllowed != undefined
            ? EligibilityCriteria.ProgrammesAllowed.join(", ")
            : ""}
        </td>
        <td>
          {eligibilityResults.ProgrammesAllowed
            ? "Condition fullfilled"
            : "Condition Not fullfilled"}
        </td>
        <td>{returnIcon(eligibilityResults.ProgrammesAllowed)}</td>
      </tr>
      <tr>
        <td>
          Branches Allowed:{" "}
          {EligibilityCriteria.BranchesAllowed != undefined
            ? EligibilityCriteria.BranchesAllowed.join(", ")
            : ""}
        </td>
        <td>
          {eligibilityResults.BranchesAllowed
            ? "Condition fullfilled"
            : "Condition Not fullfilled"}
        </td>
        <td>{returnIcon(eligibilityResults.BranchesAllowed)}</td>
      </tr>
      <tr>
        <td>Number of Backlogs allowed: {EligibilityCriteria.Backlogs}</td>
        <td>
          Student Backlogs:{" "}
          {currentResults !== null ? currentResults.Backlogs : ""}
        </td>
        <td>{returnIcon(eligibilityResults.Backlogs)}</td>
      </tr>
      <tr>
        <td>
          UG Course Eligibility Required: {EligibilityCriteria.UGScoreRequired}{" "}
        </td>
        <td>
          Student UG Eligibility:{" "}
          {currentResults !== null ? currentResults.UGScore : ""}
        </td>
        <td>{returnIcon(eligibilityResults.UGScoreRequired)}</td>
      </tr>
      <tr>
        <td>
          10<sup>th</sup> Academic Eligibility Required:{" "}
          {EligibilityCriteria.Class10thScoreRequiredPercentage}%/
          {EligibilityCriteria.Class10thScoreRequiredCGPA}CGPA{" "}
        </td>
        <td>
          Student 10<sup>th</sup> Class Score:{" "}
          {currentResults !== null ? currentResults.Score10 : ""}
        </td>
        <td>{returnIcon(eligibilityResults.Class10thScoreRequired)}</td>
      </tr>
      <tr>
        <td>
          12 <sup>th</sup> Academic Eligibility Required:{" "}
          {EligibilityCriteria.Class12thScoreRequiredPercentage}%/
          {EligibilityCriteria.Class12thScoreRequiredCGPA}CGPA
        </td>
        <td>
          Student 12<sup>th</sup> Class Score:{" "}
          {currentResults !== null ? currentResults.Score12 : ""}
        </td>
        <td>{returnIcon(eligibilityResults.Class12thScoreRequired)}</td>
      </tr>
    </Table>
  );

  let AdminEligibilityTable = (
    <Table striped bordered hover>
      <thead>
        <tr>
          <td>
            <b>Eligibility Requirements</b>
          </td>
          {/* <td><b>Student Status</b></td>
                  <td><b>Validity</b></td> */}
        </tr>
      </thead>
      <tr>
        <td>
          Maximum of 3 offers allowed in placement: Campus Placements for
          2020-2021
        </td>
        {/* <td>currently has 0 offers</td>
                <td><i class="fas fa-check fa-2x" style={{color: "greenyellow"}}></i></td> */}
      </tr>
      <tr>
        <td>Maximum of 2 offers allowed in ITES Category</td>
        {/* <td>Currently has 0</td>
                <td><i class="fas fa-check fa-2x" style={{color: "greenyellow"}}></i></td> */}
      </tr>
      <tr>
        <td>Maximum of 1 offers allowed in CORE/PREFERRED Category</td>
        {/* <td>currently has 0 offers</td>
                <td><i class="fas fa-check fa-2x" style={{color: "greenyellow"}}></i></td> */}
      </tr>
      <tr>
        <td>Maximum of 1 offers allowed in R & D Category</td>
        {/* <td>currently has 0 offers</td>
                <td><i class="fas fa-check fa-2x" style={{color: "greenyellow"}}></i></td> */}
      </tr>
      <tr>
        <td>Maximum of 2 offers allowed in NON-CORE Category</td>
        {/* <td>currently has 0 offers</td>
                <td><i class="fas fa-check fa-2x" style={{color: "greenyellow"}}></i></td> */}
      </tr>
      <tr>
        <td>Maximum of 1 offer allowed in Dream Category</td>
      </tr>
      <tr>
        <td>
          Programmes Allowed:{" "}
          {EligibilityCriteria.ProgrammesAllowed != undefined
            ? EligibilityCriteria.ProgrammesAllowed.join(", ")
            : ""}
        </td>
      </tr>
      <tr>
        <td>
          Branches Allowed:{" "}
          {EligibilityCriteria.BranchesAllowed != undefined
            ? EligibilityCriteria.BranchesAllowed.join(", ")
            : ""}
        </td>
      </tr>
      <tr>
        <td>Number of Backlogs allowed: {EligibilityCriteria.Backlogs}</td>
        {/* <td>Student Backlogs: 0</td>
                <td><i class="fas fa-check fa-2x" style={{color: "greenyellow"}}></i></td> */}
      </tr>
      <tr>
        <td>
          UG Course Eligibility Required: {EligibilityCriteria.UGScoreRequired}{" "}
        </td>
        {/* <td>Condition Fullfilled</td>
                <td><i class="fas fa-check fa-2x" style={{color: "greenyellow"}}></i></td> */}
      </tr>
      <tr>
        <td>
          10<sup>th</sup> Academic Eligibility Required:{" "}
          {EligibilityCriteria.Class10thScoreRequiredPercentage}%/
          {EligibilityCriteria.Class10thScoreRequiredCGPA}CGPA{" "}
        </td>
        {/* <td>Condition fullfilled</td>
                <td><i class="fas fa-check fa-2x" style={{color: "greenyellow"}}></i></td> */}
      </tr>
      <td>
        <tr>
          12 <sup>th</sup> Academic Eligibility Required:{" "}
          {EligibilityCriteria.Class12thScoreRequiredPercentage}%/
          {EligibilityCriteria.Class12thScoreRequiredCGPA}CGPA
        </tr>
      </td>
    </Table>
  );

  return (
    <div className={styles.eligibilityDiv}>
      <h5>Eligibility Criteria</h5>
      <hr />
      <div>
        <div>
          <b>Overall Eligibility</b> :{" "}
          <span>{returnIcon(finalEligibility)}</span>{" "}
          <span>{finalEligibility ? "Eligible" : "Not Eligible"}</span>{" "}
        </div>
        <br />
        <b>Placement Eligibility :</b>
        <br />
        {AdminEligibilityTable}
      </div>
    </div>
  );
};

export default eligibilityCriteriaComponent;
