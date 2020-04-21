import React from "react";
import { Col, Button, Card, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../Images/logo.jpg";
import Draggable from "react-draggable";
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
          <Col>
            <Draggable
              axis="xy"
              handle=".handle"
              defaultPosition={{ x: 0, y: 0 }}
              position={null}
              grid={[25, 25]}
              scale={1}
            >
              <div>
                <div className="handle">Drag from here</div>
                <div>This readme is really dragging on...</div>
              </div>
            </Draggable>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default LandingPage;
