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
          <Nav.Link href="#home" style={{ color: "#F2E7C4" }}>
            Home
          </Nav.Link>
          <Nav.Link href="#JobProfiles" style={{ color: "#F2E7C4" }}>
            Job Profiles
          </Nav.Link>
          <Nav.Link href="/Profile" style={{ color: "#F2E7C4" }}>
            Profile
          </Nav.Link>
          <Nav.Link href="/logout" style={{ color: "#F2E7C4" }}>
            Logout
          </Nav.Link>
        </Nav>
        <div style={{ color: "white", marginRight: "50px" }}>
          {/* ^^^ you have to edit this dropdown properly later */}
        <NavDropdown title={x} style={{color: "white"}}>
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
        </div>
      </Navbar>
    </div>
  );
};

export default userNavbar;
