import React, { useState, useEffect } from "react";
import { Row, Form, Card, Container, Button, Col } from "react-bootstrap";
import Randomstring from "randomstring";
import Peer from "peerjs";
import "../Views/Views.css";

var peer = null;
var conn = null;

function Sender() {
  const [roomId, setRoom] = useState("No Room selected");
  const [Id, setId] = useState(Randomstring.generate(2));
  const [message, setMessage] = useState("No message");
  const [conected, setConnected] = useState(false);

  function initialize() {
    console.log("In fonction: Initialize");
    peer = new Peer(Id, {
      host: "192.168.1.12",
      port: 4000,
      path: "/",
      debug: 2,
      config: {
        iceServers: [
          { url: "stun:stun1.l.google.com:19302" },
          {
            url: "turn:numb.viagenie.ca",
            credential: "Rodtal59",
            username: "rodolphe.tal@epitech.eu",
          },
        ],
      },
    });
    peer.on("open", function (id) {
      if (peer.id === null) {
        console.log("on open :" + peer);
        peer.id = roomId;
      }
    });
    peer.on("close", function () {
      console.log("on close :" + peer);
      conn = null;
    });
    peer.on("error", function (err) {
      console.log("peer.on error :" + err);
    });
  }

  function join() {
    initialize();
    console.log("In fonction: Join");
    if (conn) {
      console.log("if conn" + conn.peer);
      conn.close();
    }
    conn = peer.connect(roomId, {
      reliable: true,
    });
    conn.on("open", function () {
      console.log("on conn.on:open:" + conn.peer);
      setConnected(true);
    });
    conn.on("data", function (data) {
      console.log("on conn.on:DATA:" + conn.peer);
      console.log(data);
    });
    conn.on("close", function () {
      console.log("on conn.close");
      setConnected(false);
    });
    console.log("end" + conn);
  }

  function send(data) {
    console.log("In fonction: Send");
    if (conn && conn.open) {
      console.log("sending message");
      conn.send(data);
    }
  }
  function connbut() {
    if (conected === true) return <Button className="Typo">connected</Button>;
    if (conected === false)
      return <Button className="Typo">Disconnected</Button>;
  }
  console.log("end" + conn);
  return (
    <Card>
      <div>{connbut()}</div>
      <Row>
        <Form>
          <Form.Group>
            <Form.Label className="Typo">Select your ID ROOM:</Form.Label>
            <Form.Control
              onChange={(e) => {
                setRoom(e.target.value);
              }}
              placeholder="Enter  your Id"
            ></Form.Control>
          </Form.Group>
        </Form>
        <h2 className="Typo">Your Room Id: {roomId}</h2>
      </Row>
      <Row>
        <Button className="LittleButton" onClick={join}>
          Join server
        </Button>
      </Row>
      <Button
        className="LittleButton"
        onClick={() => {
          send("up");
        }}
      >
        up
      </Button>
      <Button
        className="LittleButton"
        onClick={() => {
          send("down");
        }}
      >
        up
      </Button>
    </Card>
  );
}

export default Sender;
