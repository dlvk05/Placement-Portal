import React from 'react';
import styles from "./OpeningOverviewComponent.module.css";



//Here you need to pass OpeninfOverview and CompanyName
const openingOverviewComponent = () => {
    const data={
        OpeningOverview: {
            Domain: "Job Domain",
            Category: "ITES", //dropdown ITES,Core/Preferred Domain/R&D ,Non-core
            JobFunctions: "Business Development", //kind of like what you'll do in the job
            CTCRange: "20 Crore to 40 Crore",
            AbsoluteCTC: Number,//won't be shown
          },
          CompanyName: "Google",
          Location: "Pan India"
    }

    return(
        <div>
            <div><h5>Job Opening Overview</h5></div>
            <hr />
            <div className={styles.imgDiv}>
                <div className={styles.logoDiv}><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png" alt="Google Logo" height="200px"/></div>
                <div className={styles.jobDesDiv}>
                    <div><h4>{data.CompanyName} | {data.OpeningOverview.JobFunctions} | {data.Location}</h4></div>
                    <hr />
                    <div><b><u>Job Domain</u></b> : {data.OpeningOverview.Domain}</div>
                    <div><b><u>Category</u></b> : {data.OpeningOverview.Category}</div>
                    <div><b><u>CTC Range</u></b> : {data.OpeningOverview.CTCRange}</div>
                    <div><b><u>Job Function</u></b> : {data.OpeningOverview.JobFunctions}</div>
                </div>
            </div>
        </div>
    );
}


export default openingOverviewComponent;