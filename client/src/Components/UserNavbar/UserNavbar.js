import React from "react";
import { Nav, Navbar } from "react-bootstrap";




const userNavbar = () => {
  return (
    <div> {/* HERE fix the damn color scheme */}
      <Navbar /* bg="dark" variant="arkd" */ style={{background: "#F28F38"}}>
        <Navbar.Brand href="#home" style={{color: "#205459"}}>Placement Portal</Navbar.Brand>
        <Nav className="mr-auto" >
          <Nav.Link href="#home" style={{color: "#F2E7C4"}}>Home</Nav.Link>
          <Nav.Link href="#JobProfiles" style={{color: "#F2E7C4"}}>Job Profiles</Nav.Link>
          <Nav.Link href="#PersonalInfo" style={{color: "#F2E7C4"}}>Personal Info</Nav.Link>
          <Nav.Link href="/logout" style={{color: "#F2E7C4"}}>Logout</Nav.Link>
        </Nav>
        <div style={{ color: "white", marginRight: "50px" }}>
          <i class="far fa-user-circle fa-2x"></i>
        </div>
      </Navbar>
    </div>
  );
};



export default userNavbar;
