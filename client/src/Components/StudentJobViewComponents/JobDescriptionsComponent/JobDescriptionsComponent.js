import React from 'react';
import styles from './JobDescriptionsComponent.module.css';


const jobDescriptionsComponent = () => {
    const data ={
        AboutCompany: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate a distinctio temporibus maxime commodi totam, quidem itaque repellat neque nihil explicabo assumenda? Sunt pariatur dolor ratione quo soluta inventore provident, doloribus, cum sit ex voluptates nihil tempora eaque quas beatae consequatur et corporis, repellendus debitis delectus quibusdam reiciendis officia! Fugit veniam, nulla ea, mollitia similique quia, laudantium possimus quisquam obcaecati laborum voluptas nam esse saepe eius. Perferendis dolorum cumque ipsam!",
        JobDescription: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo dolores eum soluta assumenda veritatis error blanditiis omnis et consequatur, expedita a dolorum nihil exercitationem, rem est laboriosam quo saepe maxime doloremque unde quas vitae, odio fuga cumque? Dolorum iusto sequi deleniti dolores ipsa sapiente ipsum veniam nesciunt, eos ea neque tempora possimus tenetur modi earum beatae? Consequuntur libero enim optio.",
        RequiredSkills: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta similique eius eaque expedita voluptate voluptates fuga ex maiores animi. Ab fuga quae inventore, veniam libero illo. Corporis a optio odit? Ullam at, et minus a debitis vero quae, delectus voluptates exercitationem nesciunt ea rerum qui laudantium assumenda facere quo? Laborum harum aspernatur officia saepe asperiores. Tenetur ullam, facere saepe deserunt sequi fuga tempora? Beatae itaque aspernatur, harum quisquam voluptatem inventore sint iusto illum explicabo officiis quasi optio, blanditiis, dolores a.",
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