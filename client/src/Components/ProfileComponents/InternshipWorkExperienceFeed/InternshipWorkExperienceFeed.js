import React from 'react';

const internshipWorkExperienceFeed = ({workfeed}) => {
    let feed = workfeed.map((currentWork, i) => (
        <div key={i} style={{border: "groove 2px", borderRadius:"8px",padding:"10px", marginBottom:"10px", background:"#F8F8FF"}}>
          <span style={{fontSize: "19px"}}>{currentWork.JobTitle}</span><br/>
          <span>{currentWork.Company}</span> <br/>
          <span>{currentWork.Location}</span> <br/>
          <span>{currentWork.PositionType}</span> <br/>
          <span>(start Date: {currentWork.StartDate} --- End Date: {currentWork.EndDate})</span>
          <br/>
          <br/>
          <span>{currentWork.Details}</span><br/>
          <br/>
          <hr/>
          <span><i onClick={()=>{alert("waddup it works")}}class="fas fa-pen-square fa-lg"> Edit</i> | <i class="fas fa-trash-alt fa-lg"> Delete</i></span>
        </div>
    ))

    return(
       feed
    );
}


export default internshipWorkExperienceFeed;