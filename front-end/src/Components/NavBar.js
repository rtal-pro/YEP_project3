import React from "react";
import { Navbar } from "react-bootstrap";
import Logo from "../Images/logo192.png";

function NavBar() {
  return (
    <div>
      <Navbar variant="dark" sticky="top">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={Logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          Air Console
        </Navbar.Brand>
      </Navbar>
    </div>
  );
}

export default NavBar;
