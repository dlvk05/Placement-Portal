import React from "react";
import AddressModal from "./Address/AddressModal";
import ContactDetailsModal from "./ContactDetails/ContactDetailsModal";
import OverviewModal from "./Overview/OverviewModal";
import { Row, Col } from "react-bootstrap";
import AdditionalInformationModal from "./AdditionalInformation/AdditionalInformationModal";

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

class About extends React.Component {


  render() {
  console.log(this.props.data);

    return (
      <div style={styles}>
        <span id="Overview"style={{ fontSize: "20px" }}>Overview</span>{" "}
        <span style={{ float: "right", fontSize: "20px" }}>
          <OverviewModal data={this.props.data.Overview} forceReload={this.props.forceReload}/>
        </span>
        <hr />
        <br />
        <br />
        <Row>
          <Col xs={2}>
            <span>Name:</span>
          </Col>
          <Col>
            <span >
              {this.props.data.Overview!=null?this.props.data.Overview.Name:"No data "}
            </span>
          </Col>
        </Row>
        <hr />
        <br />
        <Row>
          <Col xs={2}>
            <span>Date of Birth:</span>
          </Col>
          <Col>
            <span >
            {this.props.data.Overview!=null?this.props.data.Overview.DateOfBirth.slice(0,10):"No data "}
            </span>
          </Col>
        </Row>
        <hr />
        <br />
        <Row>
          <Col xs={2}>
            <span>Gender:</span>
          </Col>
          <Col>
            <span >
            {this.props.data.Overview!=null?this.props.data.Overview.Gender:"No data "}
            </span>
          </Col>
        </Row>
        <hr />
        <br />
        <Row>
          <Col xs={2}>
            <span>Category:</span>
          </Col>
          <Col>
            <span >
            {this.props.data.Overview!=null?this.props.data.Overview.Category:"No data "}
            </span>
          </Col>
        </Row>
        <hr />
        <br />
        <br />
        <br />
        <br />
        {/* ^^^ this is where Contact Detials start */}
        <span style={{ fontSize: "20px" }} id="ContactDetails">
          Contact Details
        </span>{" "}
        <span style={{ float: "right", fontSize: "20px" }}>
          <ContactDetailsModal data={this.props.data.ContactDetails} forceReload={this.props.forceReload}/>
        </span>
        <hr />
        <br />
        <br />
        <Row>
          <Col xs={2}>
            <span>Contact Number:</span>
          </Col>
          <Col>
            <span >
              {this.props.ContactDetails!=null?this.props.data.ContactDetails.ContactNo.value:"No data "}
            </span>
          </Col>
        </Row>
        <hr />
        <br />
        <Row>
          <Col xs={2}>
            <span>Email:</span>
          </Col>
          <Col>
            <span >
              {this.props.ContactDetails!=null?this.props.data.ContactDetails.Email.value:"No data "}
            </span>
          </Col>
        </Row>
        <hr />
        <br />
        <Row>
          <Col xs={2}>
            <span>Personal Email:</span>
          </Col>
          <Col>
            <span >
              {this.props.ContactDetails!=null?this.props.data.ContactDetails.PersonalEmail.value:"No data "}
            </span>
          </Col>
        </Row>
        <hr />
        <br />
        <br />
        <br />
        <br />
        {/* ^^^ this is where Address starts */}
        <span style={{ fontSize: "20px" }} id="Address">
          Address
        </span>{" "}
        <span style={{ float: "right", fontSize: "20px" }}>
          <AddressModal data={this.props.data.Address} forceReload={this.props.forceReload}/>
        </span>
        <hr />
        <br />
        <br />
        <Row>
          <Col xs={2}>
            <span>Complete Address:</span>
          </Col>
          <Col>
            <span >
              {this.props.data.Address!=null?this.props.data.Address.CompleteAddress: "No data"}
            </span>
          </Col>
        </Row>
        <hr />
        <br />
        <Row>
          <Col xs={2}>
          <span>Pincode:</span>
          </Col>
          <Col>
          <span>
              {this.props.data.Address!=null?this.props.data.Address.Pincode: "No data"}
            </span>
          </Col>
        </Row>
        <hr/>
        <br/>
        <Row>
          <Col xs={2}>
            <span>State:</span>
          </Col>
          <Col>
            <span >
              {this.props.data.Address!=null?this.props.data.Address.State: "No data"}
            </span>
          </Col>
        </Row>
        <hr />
        <br />
        <Row>
          <Col xs={2}>
            <span>City:</span>
          </Col>
          <Col>
            <span >
              {this.props.data.Address!=null?this.props.data.Address.City: "No data"}
            </span>
          </Col>
        </Row>
        <hr />
        <br />
        <br />
        <br />
        <br />
        {/* ^^^ this is where AdditionalInformation starts */}
        <span style={{ fontSize: "20px" }} id="Address">
          Additional Information
        </span>{" "}
        <span style={{ float: "right", fontSize: "20px" }}>
          <AdditionalInformationModal data={this.props.data.AdditionalInfo} forceReload={this.props.forceReload}/>
        </span>
        <hr />
        <br />
        <br />
        <Row>
          <Col xs={2}>
            <span>Student Whatsaap Number:</span>
          </Col>
          <Col>
            <span >
              {this.props.data.AdditionalInfo!=null?this.props.data.AdditionalInfo.StudentWhatsappNo:"no data"}
            </span>
          </Col>
        </Row>
        <hr />
        <br />
        <Row>
          <Col xs={2}>
          <span>Father Name:</span>
          </Col>
          <Col>
          <span>
              {this.props.data.AdditionalInfo!=null?this.props.data.AdditionalInfo.FatherName:"no data"}
            </span>
          </Col>
        </Row>
        <hr/>
        <br/>
        <Row>
          <Col xs={2}>
            <span>Father's Contact Number:</span>
          </Col>
          <Col>
            <span >
              {this.props.data.AdditionalInfo!=null?this.props.data.AdditionalInfo.FatherContactNo:"no data"}
            </span>
          </Col>
        </Row>
        <hr />
        <br />
        <Row>
          <Col xs={2}>
            <span>Father's Occupation:</span>
          </Col>
          <Col>
            <span >
              {this.props.data.AdditionalInfo!=null?this.props.data.AdditionalInfo.FatherOccupation:"no data"}
            </span>
          </Col>
        </Row>
        <hr />
        <br/>
        <Row>
          <Col xs={2}>
            <span>Father's Email:</span>
          </Col>
          <Col>
            <span >
              {this.props.data.AdditionalInfo!=null?this.props.data.AdditionalInfo.FatherEmail:"no data"}
            </span>
          </Col>
        </Row>
      </div>
    );
  }
}

export default About;
