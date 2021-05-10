import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";

const adminNavbar = (props) => {
  let x = <i class="far fa-user-circle fa-2x"></i>;

  return (
    <div>
      <Navbar /* bg="dark" variant="arkd" */ style={{ background: "#F28F38" }}>
        <Navbar.Brand href="#home" style={{ color: "#205459" }}>
          <u>Placement Portal</u>
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/AdminUpdatesFeed" style={{ color: "#F2E7C4" }}>
            Updates Feed
          </Nav.Link>
          <Nav.Link href="/JobProfilesFeed" style={{ color: "#F2E7C4" }}>
            Job Profile Feed
          </Nav.Link>
          <Nav.Link href="/Profile" style={{ color: "#F2E7C4" }}>
            Reports
          </Nav.Link>
        </Nav>
        <div style={{ color: "white", marginRight: "120px" }}>
          {/* ^^^ you have to edit this dropdown properly later */}
          <NavDropdown title={x} style={{ color: "white" }}>
            <NavDropdown.Item href="#action/3.1">Account Info</NavDropdown.Item>
            <NavDropdown.Item href="/JobProfileForm">Add New Job Profile</NavDropdown.Item>
            <NavDropdown.Item href="/Updates">Add New Update</NavDropdown.Item>
            <NavDropdown.Item href="/QuizUpload">Add New Quiz</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/Logout">Logout</NavDropdown.Item>
          </NavDropdown>
        </div>
      </Navbar>
    </div>
  );
};

export default adminNavbar;
