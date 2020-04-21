import React from "react";
import { Navbar, Image, Col } from "react-bootstrap";
import Logo from "../Images/logo192.png";
import Refresh from "../Images/refresh.png";
import "../Views/Views.css";

function NavBar(props) {
  return (
    <div>
      <Navbar variant="dark" sticky="top">
        <Navbar.Brand href="/">
          <img
            alt=""
            src={Logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          Air Console
        </Navbar.Brand>

        <Navbar.Collapse className="justify-content-right">
          <Col></Col>
          <Col md={3}>
            <button className="LittleButton" onClick={props.initialize}>
              <Image
                src={Refresh}
                roundedCircle
                className="d-inline-block align-top"
                width="25"
                height="25"
              />
            </button>
            <Navbar.Text>
              Your Room Id: <a href="/">{props.room}</a>
            </Navbar.Text>
          </Col>
          <Col md={2}>
            <Navbar.Text>
              Number of Players: <a href="/">{props.player}</a>
            </Navbar.Text>
          </Col>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;
