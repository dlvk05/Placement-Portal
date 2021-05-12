import React from 'react';
import { Table } from 'react-bootstrap';
import styles from './EligibilityCriteriaComponent.module.css';

const eligibilityCriteriaComponent = (props) => {
    const EligibilityCriteria = props.EligibilityCriteria;
    const eligibilityResults=props.eligibilityResults;
    const currentResults=props.currentResults;
    const currentOffers=props.currentOffers;
    const finalEligibility=props.finalEligibility;

    const returnIcon = (val) => {
      if(val){
        return (<i class="far fa-check-circle fa-2x" style={{color: "greenyellow"}}></i>);
      }
      else{
        return (<i class="fas fa-times-circle" style={{color: "red"}}></i>)
      }
    }

    console.log(EligibilityCriteria.ProgrammesAllowed);
    

    let studentEligibilityTable =  (
      <Table striped bordered hover>
              <thead>
                <tr>
                  <td><b>Eligibility Requirements</b></td>
                  {/* <td><b>Student Status</b></td>
                  <td><b>Validity</b></td> */}
                </tr>
              </thead>
              <tr>
                <td>Maximum of 3 offers allowed in placement: Campus Placements for 2020-2021</td>
                <td>currently has {currentOffers!=null? currentOffers.TotalOffers: ""} offers</td>
                <td>{/* {returnIcon(eligibilityResults.Total)} */}</td>
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
                <td>Programmes Allowed: {EligibilityCriteria.ProgrammesAllowed!=undefined?EligibilityCriteria.ProgrammesAllowed.join(", "): ""}</td>
              </tr>
              <tr>
                <td>Branches Allowed: {EligibilityCriteria.BranchesAllowed!=undefined? EligibilityCriteria.BranchesAllowed.join(", "): ""}</td>
              </tr>
              <tr>
                <td>Number of Backlogs allowed: {EligibilityCriteria.Backlogs}</td>
                {/* <td>Student Backlogs: 0</td>
                <td><i class="fas fa-check fa-2x" style={{color: "greenyellow"}}></i></td> */}
              </tr>
              <tr>
                <td>UG Course Eligibility Required: {EligibilityCriteria.UGScoreRequired} </td>
                {/* <td>Condition Fullfilled</td>
                <td><i class="fas fa-check fa-2x" style={{color: "greenyellow"}}></i></td> */}
              </tr>
              <tr>
                <td>10<sup>th</sup> Academic Eligibility Required: {EligibilityCriteria.Class10thScoreRequiredPercentage}%/{EligibilityCriteria.Class10thScoreRequiredCGPA}CGPA </td>
                {/* <td>Condition fullfilled</td>
                <td><i class="fas fa-check fa-2x" style={{color: "greenyellow"}}></i></td> */}
              </tr>
              <td>
                <tr>12 <sup>th</sup> Academic Eligibility Required: {EligibilityCriteria.Class12thScoreRequiredPercentage}%/{EligibilityCriteria.Class12thScoreRequiredCGPA}CGPA</tr>
              </td>
              
              
              
            </Table>
    );

    let AdminEligibilityTable = (
      <Table striped bordered hover>
              <thead>
                <tr>
                  <td><b>Eligibility Requirements</b></td>
                  {/* <td><b>Student Status</b></td>
                  <td><b>Validity</b></td> */}
                </tr>
              </thead>
              <tr>
                <td>Maximum of 3 offers allowed in placement: Campus Placements for 2020-2021</td>
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
                <td>Programmes Allowed: {EligibilityCriteria.ProgrammesAllowed!=undefined?EligibilityCriteria.ProgrammesAllowed.join(", "): ""}</td>
              </tr>
              <tr>
                <td>Branches Allowed: {EligibilityCriteria.BranchesAllowed!=undefined? EligibilityCriteria.BranchesAllowed.join(", "): ""}</td>
              </tr>
              <tr>
                <td>Number of Backlogs allowed: {EligibilityCriteria.Backlogs}</td>
                {/* <td>Student Backlogs: 0</td>
                <td><i class="fas fa-check fa-2x" style={{color: "greenyellow"}}></i></td> */}
              </tr>
              <tr>
                <td>UG Course Eligibility Required: {EligibilityCriteria.UGScoreRequired} </td>
                {/* <td>Condition Fullfilled</td>
                <td><i class="fas fa-check fa-2x" style={{color: "greenyellow"}}></i></td> */}
              </tr>
              <tr>
                <td>10<sup>th</sup> Academic Eligibility Required: {EligibilityCriteria.Class10thScoreRequiredPercentage}%/{EligibilityCriteria.Class10thScoreRequiredCGPA}CGPA </td>
                {/* <td>Condition fullfilled</td>
                <td><i class="fas fa-check fa-2x" style={{color: "greenyellow"}}></i></td> */}
              </tr>
              <td>
                <tr>12 <sup>th</sup> Academic Eligibility Required: {EligibilityCriteria.Class12thScoreRequiredPercentage}%/{EligibilityCriteria.Class12thScoreRequiredCGPA}CGPA</tr>
              </td>
              
              
              
            </Table>
    );

    return(
        <div className={styles.eligibilityDiv}>
        <h5>Eligibility Criteria</h5>
        <hr />
        <div>
            <div><b>Overall Eligibility</b> : <span>{returnIcon(finalEligibility)}</span> <span>{finalEligibility? "Eligible": "Not Eligible"}</span> </div>
            <br />
            <b>Placement Eligibility :</b> 
            <br />
            {studentEligibilityTable}
        </div>

      </div>
    );
}


export default eligibilityCriteriaComponent;