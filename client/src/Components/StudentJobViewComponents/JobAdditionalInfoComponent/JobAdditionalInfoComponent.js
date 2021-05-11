import React from 'react';
import styles from './JobAdditionalInfoComponent.module.css';

const jobAdditionalInfoComponent = (props) => {

    const data = {
          JobProfileTitle: props.jobProfileTitle,
          JobSector: props.jobSector,
          Dream: props.dream,
          PositionType: props.positionType,
          ApplicationDeadLine: props.applicationDeadLine,
          AttachedDocuments: [{DocumentName: props.attachedDocuments}]
    }

    return(
        <div className={styles.additionalInfoDiv}>
        <h5>Additional Information</h5>
        <hr />
        <div><b>Job Profile</b> : {data.JobProfileTitle} </div> 
        <div><b>Job Sector</b> : {data.JobSector} </div> 
        <div><b>Dream Job</b> : {data.Dream?"Yes":"No"} </div> 
        <div><b>Position Type</b> : {data.PositionType} </div> 
        <div><b>Application Deadline</b> : {data.ApplicationDeadLine} </div> 
        <hr />
        <br />
        <h5>Attached Documents</h5>
        <hr />
        <div><b>File</b> : {data.AttachedDocuments[0].DocumentName} </div>
    </div>
    );
}


export default jobAdditionalInfoComponent;