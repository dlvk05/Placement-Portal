import React from 'react';
import styles from './HiringWorkflowComponent.module.css';
import {Table} from 'react-bootstrap';


const hiringWorkflowComponent = (props) => {
const data ={
    HiringWorkflow: props.HiringWorkflow
}
    return(
        <div className={styles.hiringWorkflowDiv}>
              <h5>Hiring Workflow</h5>
              <hr />
              <div>
                  <Table striped bordered hover>
                      <thead>
                          <tr>
                              <td>Stage Number</td>
                              <td>Stage Title</td>
                              <td>Stage Venue</td>
                              <td>Start Date</td>
                              <td>End Date</td>
                              <td>Stage Description</td>
                          </tr>
                      </thead>
                      {data.HiringWorkflow.map((currentStage, i) => (
                          <tr>
                              <td>{currentStage.StageNo}</td>
                              <td>{currentStage.StageTitle}</td>
                              <td>{currentStage.StageVenue}</td>
                              <td>{currentStage.StartDate.slice(0,10)}</td>
                              <td>{currentStage.EndDate.slice(0,10)}</td>
                              <td>{currentStage.StageDescription}</td>
                          </tr>
                      ))}
                  </Table>
              </div>
          </div>
    );
}


export default hiringWorkflowComponent;