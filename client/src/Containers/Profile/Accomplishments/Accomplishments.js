import React from "react";

//importing Feeds
import AwardsFeeds from "../../../Components/ProfileComponents/AccomplishmentsFeeds/AwardsFeeds/AwardsFeeds";
import CertificationsFeed from "../../../Components/ProfileComponents/AccomplishmentsFeeds/CertificationsFeed/CertificationsFeed";
import CompetitionsFeed from "../../../Components/ProfileComponents/AccomplishmentsFeeds/CompetitionsFeed/CompetitionsFeed";
import ConferencesFeed from "../../../Components/ProfileComponents/AccomplishmentsFeeds/ConferencesFeed/ConferencesFeed";
import PublicationsFeed from "../../../Components/ProfileComponents/AccomplishmentsFeeds/PublicationsFeed/PublicationsFeed";
import ScholarshipsFeed from "../../../Components/ProfileComponents/AccomplishmentsFeeds/ScholarshipsFeed/ScholarshipsFeed";
import TestScoresFeed from "../../../Components/ProfileComponents/AccomplishmentsFeeds/TestScoresFeed/TestScoresFeed";

//importin Modals
import AwardsModal from "./Awards/AwardsModal";
import CertificationsModal from "./Certifications/CertificationsModal";
import CompetitionsModal from "./Competitions/CompetitionsModal";
import ConferencesModal from "./Conferences/ConferencesModal";
import PublicationsModal from "./Publications/PublicationsModal";
import ScholarshipsModal from "./Scholarships/ScholarshipsModal";
import TestScoresModal from "./TestScores/TestScoresModal";

const styles = {
  border: "solid 1px",
  font: "15px Roboto, sans-serif",
  fontSize: "12px",
  display: "block",
  background: "white",
  padding: "5%",
  marginBottom: "30px",
  borderRadius: "10px"
};

class Accomplishments extends React.Component {
  state = {
    Accomplishments: {
      Awards: [
        {
          Title: String,
          Issuer: String,
          IssueDate: Date,
          Description: String,
        },
      ],
      Certifications: [
        {
          Title: String,
          Issuer: String,
          CertificationURL: String,
          CertificationDate: Date,
          LicenceNumber: String,
          Description: String,
        },
      ],
      Competitions: [
        {
          Title: String,
          Position: String,
          CompetitionDate: Date,
          Description: String,
        },
      ],
      Conferences: [
        {
          Title: String,
          Organizer: String,
          EventDate: Date,
          Description: String,
        },
      ],
      TestScores: [
        {
          Title: String,
          ScoreObtained: String,
          MaximumPossibleScore: String,
          RankObtained: String,
          ExamDate: Date,
          Description: String,
        },
      ],
      Publications: [
        {
          Title: String,
          Publisher: String,
          PublicationDate: Date,
          PublicationURL: String,
          Description: String,
        },
      ],
      Scholarships: [
        {
          Title: String,
          GrantDate: Date,
          Description: String,
        },
      ],
    },
  };

  render() {
    return (
      <div style={styles}>
        <span id="Awards" style={{ fontSize: "20px" }}>
          Awards
        </span>{" "}
        <span style={{ float: "right", fontSize: "20px" }}>
          <AwardsModal awards={this.props.data.Awards} forceReload={this.props.forceReload} name="Add Awards Info" />
        </span>
        <hr />
        <br />
        <AwardsFeeds awards={this.props.data.Awards} forceReload={this.props.forceReload}  />
        <br />
        <br />
        <br />
        <br />
        {/* ^^^ this is where Certifications start */}
        <span style={{ fontSize: "20px" }} id="Certifications">
          Certifications
        </span>{" "}
        <span style={{ float: "right", fontSize: "20px" }}>
          <CertificationsModal name="Add Certification Info" />
        </span>
        <hr />
        <br />
        <br />
        {this.state.Accomplishments.Certifications !== "" ? (
          <CertificationsFeed
            certs={this.state.Accomplishments.Certifications}
          />
        ) : (
          "there is nothing to display"
        )}
        <br />
        <br />
        <br />
        <br />
        {/* ^^^ this is where Competitions start */}
        <span style={{ fontSize: "20px" }} id="Competitions">
          Competition Details
        </span>{" "}
        <span style={{ float: "right", fontSize: "20px" }}>
          <CompetitionsModal name="Add Competitions Info" />
        </span>
        <hr />
        <br />
        <br />
        {this.state.Accomplishments.Competitions !== "" ? (
          <CompetitionsFeed
            competitions={this.state.Accomplishments.Competitions}
          />
        ) : (
          "there is nothing to display"
        )}
        <br />
        <br />
        <br />
        <br />
        {/* ^^^ this is where Confrences start */}
        <span style={{ fontSize: "20px" }} id="Confrences">
          Confrence Details
        </span>{" "}
        <span style={{ float: "right", fontSize: "20px" }}>
          <ConferencesModal name="Add Conferences Info" />
        </span>
        <hr />
        <br />
        <br />
        {this.state.Accomplishments.Conferences !== "" ? (
          <ConferencesFeed
            conferences={this.state.Accomplishments.Conferences}
          />
        ) : (
          "there is nothing to dispaly"
        )}
        <br />
        <br />
        <br />
        <br />
        {/* ^^^ this is where Test Scores start */}
        <span style={{ fontSize: "20px" }} id="TestScores">
          Test Scores
        </span>{" "}
        <span style={{ float: "right", fontSize: "20px" }}>
          <TestScoresModal name="Add Test Score Info" />
        </span>
        <hr />
        <br />
        <br />
        {this.state.Accomplishments.TestScores !== "" ? (
          <TestScoresFeed testscores={this.state.Accomplishments.TestScores} />
        ) : (
          "there is nothing to display"
        )}
        <br />
        <br />
        <br />
        <br />
        {/* ^^^ this is where Publications start */}
        <span style={{ fontSize: "20px" }} id="Publications">
          Publications
        </span>{" "}
        <span style={{ float: "right", fontSize: "20px" }}>
          <PublicationsModal name="Add Publications Info" />
        </span>
        <hr />
        <br />
        <br />
        {this.state.Accomplishments.Publications !== "" ? (
          <PublicationsFeed pubs={this.state.Accomplishments.Publications} />
        ) : (
          "there is nothing to display"
        )}
        <br />
        <br />
        <br />
        <br />
        {/* ^^^ this is where Scholarships start */}
        <span style={{ fontSize: "20px" }} id="Scholarships">
          Scholarships
        </span>{" "}
        <span style={{ float: "right", fontSize: "20px" }}>
          <ScholarshipsModal name="Add Scholarship Info" />
        </span>
        <hr />
        <br />
        <br />
        {this.state.Accomplishments.Scholarships !== "" ? (
          <ScholarshipsFeed
            scholarships={this.state.Accomplishments.Scholarships}
          />
        ) : (
          "there is nothing to display"
        )}
        <br />
      </div>
    );
  }
}

export default Accomplishments;
