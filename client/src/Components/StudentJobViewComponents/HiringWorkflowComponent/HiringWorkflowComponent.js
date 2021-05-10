import React from 'react';
import styles from './HiringWorkflowComponent.module.css';
import {Table} from 'react-bootstrap';


const hiringWorkflowComponent = () => {
const data ={
    HiringWorkflow: [
        {
          StageNo: 1,
          StageTitle: "Interview",
          StageVenue: "Jaipur",
          StartDate: "12/12/2021",
          EndDate: "21/12/2021",
          StageDescription: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae, debitis.",
          Selects: [
            {
              userAccount: { type: "Schema.Types.ObjectId", ref: "userAccounts" }, //had to turn the type field into string
              userProfile: { type: "Schema.Types.ObjectId", ref: "userProfiles" }, //had to turn the type field into string
            },
          ],
        },
        {
            StageNo: 2,
            StageTitle: "Technical Exam",
            StageVenue: "MUJ in Jaipur",
            StartDate: "17/12/2021",
            EndDate: "28/12/2021",
            StageDescription: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae, debitis.",
            Selects: [
              {
                userAccount: { type: "Schema.Types.ObjectId", ref: "userAccounts" }, //had to turn the type field into string
                userProfile: { type: "Schema.Types.ObjectId", ref: "userProfiles" }, //had to turn the type field into string
              },
            ],
          }
      ],
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
                              <td>{currentStage.StartDate}</td>
                              <td>{currentStage.EndDate}</td>
                              <td>{currentStage.StageDescription}</td>
                          </tr>
                      ))}
                  </Table>
              </div>
          </div>
    );
}


export default hiringWorkflowComponent;