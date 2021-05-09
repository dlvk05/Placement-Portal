import React from 'react';
import styles from './JobAdditionalInfoComponent.module.css';

const jobAdditionalInfoComponent = () => {

    const data = {
        JobDescription: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde ducimus eveniet minus natus veritatis illum eius rerum mollitia aperiam est tempore magnam eum quos nisi repellendus, aliquid culpa nam sapiente iste vitae voluptate adipisci? At laboriosam in, illo porro aliquam quaerat voluptatum molestias illum amet, obcaecati nam reiciendis, suscipit explicabo. Aspernatur reiciendis vitae culpa molestias? Reiciendis aut labore vero tempore, ex repellendus, at ipsam natus temporibus incidunt modi adipisci vitae!",
          JobProfileTitle: "Chief Executive Officer",
          JobSector: "Accounting",
          Dream: true,
          PositionType: "Full Time",
          ApplicationDeadLine: "12/12/2021",
          AttachedDocuments: [{DocumentName: "impdoc.pdf"}]
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