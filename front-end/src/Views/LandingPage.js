import React from "react";
import { Col, Button, Card, Container, Row, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../Images/logo.jpg";
import { useHistory } from "react-router-dom";
import { Player } from "video-react";
import "./Views.css";

function LandingPage(props) {
  function Connection() {
    if (props.room === "NO ID") {
      return <Button onClick={props.initialize}>Let's Play!</Button>;
    } else {
      return <Button onClick={props.initialize}>Room Connected</Button>;
    }
  }
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Card
              style={{
                width: "18rem",
                marginTop: "100px",
                borderRadius: "20px",
              }}
            >
              <Card.Img
                style={{ borderRadius: "20px" }}
                variant="top"
                src={Logo}
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text></Card.Text>
                <Connection props={props} />
              </Card.Body>
            </Card>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  );
}

export default LandingPage;
