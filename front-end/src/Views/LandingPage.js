import React from "react";
import { Container, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useHistory } from "react-router-dom";
import "./Views.css";

function LandingPage() {
  const history = useHistory();
  function handleRoute(route) {
    if (route === "sender") history.push("/sender");
    if (route === "room") history.push("/room");
  }
  return (
    <div>
      <Container>
        <Button
          variant="outline-info"
          onClick={() => {
            handleRoute("room");
          }}
        >
          Create a room
        </Button>
        <Button
          variant="outline-info"
          onClick={() => {
            handleRoute("sender");
          }}
        >
          Connect as client
        </Button>
      </Container>
    </div>
  );
}

export default LandingPage;
