import React, { useState, useEffect } from "react";
import { Container, Button, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "./Views.css";

function LandingPage() {
  const history = useHistory();
  function handleRoute(route) {
    if (route === "sender") history.push("/sender");
    if (route === "room") history.push("/room");
  }
  return (
    <Container>
      <Button
        className="Button"
        onClick={() => {
          handleRoute("room");
        }}
      >
        Create a room
      </Button>
      <Button
        className="Button"
        onClick={() => {
          handleRoute("sender");
        }}
      >
        Connect as client
      </Button>
    </Container>
  );
}

export default LandingPage;
