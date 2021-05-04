import React from "react";
import AddTechnicalSkillsModal from "../../../Containers/Profile/TechnicalSkills/AddTechnicalSkillsModal/AddTechnicalSkillsModal";

const technicalSkillsFeed = ({ technicalSkills }) => {
  var feed = technicalSkills.map((currentSkill, i) => (
    <div
      style={{
        border: "groove 2px",
        borderRadius: "8px",
        padding: "10px",
        marginBottom: "10px",
        background: "#F8F8FF",
      }}
    >
      <span style={{ fontSize: "19px" }}>{currentSkill.Skill}</span>
      <br />
      <span>{currentSkill.Proficiency}</span> <br />
      <br />
      <hr />
      <span>
        <i
          class="fas fa-pen-square fa-lg"
        >
          {" "}
          <AddTechnicalSkillsModal name="Edit"/>
        </i>{" "}
        | <i class="fas fa-trash-alt fa-lg"> Delete</i>
      </span>
    </div>
  ));
  return feed;
};

export default technicalSkillsFeed;
