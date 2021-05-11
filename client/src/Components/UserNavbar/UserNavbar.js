import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";

const userNavbar = () => {
  let x = (<i class="far fa-user-circle fa-2x"></i>)
  return (
    <div>
      {" "}
      {/* HERE fix the damn color scheme */}
      <Navbar /* bg="dark" variant="arkd" */ style={{ background: "#F28F38" }}>
        <Navbar.Brand href="#home" style={{ color: "#205459" }}>
          <u>Placement Portal</u>
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/UpdatesFeed" style={{ color: "#F2E7C4",}}>
            Home
          </Nav.Link>
          <Nav.Link href="/JobProfilesFeed" style={{ color: "#F2E7C4" }}>
            Job Profiles
          </Nav.Link>
          <Nav.Link href="/Profile" style={{ color: "#F2E7C4" }}>
            Profile
          </Nav.Link>
          <Nav.Link href="/QuizListFeed" style={{ color: "#F2E7C4" }}>
            Quizes
          </Nav.Link>
        </Nav>
        <div style={{ color: "white", marginRight: "70px" }}>
          {/* ^^^ you have to edit this dropdown properly later */}
        <NavDropdown title={x} style={{color: "white"}}>
        <NavDropdown.Item href="/UserAccountInfoPage">Acount Info</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="/Logout">Logout</NavDropdown.Item>
      </NavDropdown>
        </div>
      </Navbar>
    </div>
  );
};

export default userNavbar;
