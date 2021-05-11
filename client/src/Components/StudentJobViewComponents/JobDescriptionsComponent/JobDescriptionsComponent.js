import React from 'react';
import styles from './JobDescriptionsComponent.module.css';


const jobDescriptionsComponent = (props) => {
    const data ={
        AboutCompany: props.AboutCompany,
        JobDescription: props.JobDescription,
        RequiredSkills: props.RequiredSkills,
    }

    return(
        <div className={styles.descriptionDiv}>
        <h5>About The Company</h5>
        <hr />
        <div>{data.AboutCompany}</div>
        <br />
        <br />
        <h5>Job Description</h5>
        <hr />
        <div>{data.JobDescription}</div>
        <br />
        <br />
        <h5>Required Skills</h5>
        <hr />
        <div>{data.RequiredSkills}</div>
    </div>
    );
}


export default jobDescriptionsComponent;