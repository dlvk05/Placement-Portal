import React from 'react';
import { Table } from 'react-bootstrap';
import styles from './EligibilityCriteriaComponent.module.css';

const eligibilityCriteriaComponent = (props) => {
    const EligibilityCriteria = props.EligibilityCriteria

    let studentEligibilityTable = (
      <Table striped bordered hover>
              <thead>
                <tr>
                  <td><b>Eligibility Requirements</b></td>
                  <td><b>Student Status</b></td>
                  <td><b>Validity</b></td>
                </tr>
              </thead>
              <tr>
                <td>Number of Backlogs allowed: {EligibilityCriteria.Backlogs}</td>
                <td>Student Backlogs: 0</td>
                <td><i class="fas fa-check fa-2x" style={{color: "greenyellow"}}></i></td>
              </tr>
              <tr>
                <td>10<sup>th</sup> and 12<sup>th</sup> Academic Eligibility</td>
                <td>Condition fullfilled</td>
                <td><i class="fas fa-check fa-2x" style={{color: "greenyellow"}}></i></td>
              </tr>
              <tr>
                <td>UG Course Eligibility</td>
                <td>Condition Fullfilled</td>
                <td><i class="fas fa-check fa-2x" style={{color: "greenyellow"}}></i></td>
              </tr>
              <tr>
                <td>Maximum of 1 offers allowed in Business Development/ Analytical category</td>
                <td>Currently has 0</td>
                <td><i class="fas fa-check fa-2x" style={{color: "greenyellow"}}></i></td>
              </tr>
              <tr>
                <td>Unlimited attempts allowed to obtain first offer in Business Development/ Analytical category</td>
                <td>Currently has 0</td>
                <td><i class="fas fa-check fa-2x" style={{color: "greenyellow"}}></i></td>
              </tr>
              <tr>
                <td>Maximum of 1 offers allowed in Level: 5 job profiles</td>
                <td>currently has 0 offers</td>
                <td><i class="fas fa-check fa-2x" style={{color: "greenyellow"}}></i></td>
              </tr>
              <tr>
                <td>Unlimited attempts allowed to obtain first offer in Level: 5 job profiles</td>
                <td>currently has completed 0 attempts</td>
                <td><i class="fas fa-check fa-2x" style={{color: "greenyellow"}}></i></td>
              </tr>
              <tr>
                <td>Maximum of 3 offers allowed in placement: Campus Placements for 2020-2021</td>
                <td>currently has 0 offers</td>
                <td><i class="fas fa-check fa-2x" style={{color: "greenyellow"}}></i></td>
              </tr>
              <tr>
                <td>Unlimited attempts allowed to obtain first offer in placement: Campus Placements for 2020-2021</td>
                <td>currently has completed 0 attempts</td>
                <td><i class="fas fa-check fa-2x" style={{color: "greenyellow"}}></i></td>
              </tr>
              <tr>
                <td>Unlimited attempts allowed to obtain additional offers in placement: Campus Placements for 2020-2021</td>
                <td>currently has completed 4 attempts</td>
                <td><i class="fas fa-check fa-2x" style={{color: "greenyellow"}}></i></td>
              </tr>
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
                <td>Number of Backlogs allowed: {EligibilityCriteria.Backlogs}</td>
                {/* <td>Student Backlogs: 0</td>
                <td><i class="fas fa-check fa-2x" style={{color: "greenyellow"}}></i></td> */}
              </tr>
              <tr>
                <td>10<sup>th</sup> and 12<sup>th</sup> Academic Eligibility</td>
                {/* <td>Condition fullfilled</td>
                <td><i class="fas fa-check fa-2x" style={{color: "greenyellow"}}></i></td> */}
              </tr>
              <tr>
                <td>UG Course Eligibility</td>
                {/* <td>Condition Fullfilled</td>
                <td><i class="fas fa-check fa-2x" style={{color: "greenyellow"}}></i></td> */}
              </tr>
              <tr>
                <td>Maximum of 1 offers allowed in Business Development/ Analytical category</td>
                {/* <td>Currently has 0</td>
                <td><i class="fas fa-check fa-2x" style={{color: "greenyellow"}}></i></td> */}
              </tr>
              <tr>
                <td>Unlimited attempts allowed to obtain first offer in Business Development/ Analytical category</td>
                {/* <td>Currently has 0</td>
                <td><i class="fas fa-check fa-2x" style={{color: "greenyellow"}}></i></td> */}
              </tr>
              <tr>
                <td>Maximum of 1 offers allowed in Level: 5 job profiles</td>
                {/* <td>currently has 0 offers</td>
                <td><i class="fas fa-check fa-2x" style={{color: "greenyellow"}}></i></td> */}
              </tr>
              <tr>
                <td>Unlimited attempts allowed to obtain first offer in Level: 5 job profiles</td>
                {/* <td>currently has completed 0 attempts</td>
                <td><i class="fas fa-check fa-2x" style={{color: "greenyellow"}}></i></td> */}
              </tr>
              <tr>
                <td>Maximum of 3 offers allowed in placement: Campus Placements for 2020-2021</td>
                {/* <td>currently has 0 offers</td>
                <td><i class="fas fa-check fa-2x" style={{color: "greenyellow"}}></i></td> */}
              </tr>
              <tr>
                <td>Unlimited attempts allowed to obtain first offer in placement: Campus Placements for 2020-2021</td>
                {/* <td>currently has completed 0 attempts</td>
                <td><i class="fas fa-check fa-2x" style={{color: "greenyellow"}}></i></td> */}
              </tr>
              <tr>
                <td>Unlimited attempts allowed to obtain additional offers in placement: Campus Placements for 2020-2021</td>
                {/* <td>currently has completed 4 attempts</td>
                <td><i class="fas fa-check fa-2x" style={{color: "greenyellow"}}></i></td> */}
              </tr>
            </Table>
    );

    return(
        <div className={styles.eligibilityDiv}>
        <h5>Eligibility Criteria</h5>
        <hr />
        <div>
            <div><b>Overall Eligibility</b> : <i class="far fa-check-circle fa-2x" style={{color: "greenyellow"}}></i> Eligible </div>
            <br />
            <b>Placement Eligibility :</b> 
            <br />
            {studentEligibilityTable}
        </div>

      </div>
    );
}


export default eligibilityCriteriaComponent;