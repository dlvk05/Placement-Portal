import React from "react";
import { Nav, Navbar } from "react-bootstrap";

const navbar = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Placement Portal</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#JobProfiles">Job Profiles</Nav.Link>
          <Nav.Link href="#PersonalInfo">Personal Info</Nav.Link>
        </Nav>
        <div style={{ color: "white", marginRight: "50px" }}>
          <i class="far fa-user-circle fa-2x"></i>
        </div>
      </Navbar>
    </div>
  );
};

export default navbar;
