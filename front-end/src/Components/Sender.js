import React, { useState, useEffect } from "react";
import { Row, Form, Card, Container, Button, Col } from "react-bootstrap";
import Randomstring from "randomstring";
import Peer from "peerjs";
import "../Views/Views.css";

var peer = null;
var conn = null;

function Sender() {
  const [roomId, setRoom] = useState("No Room selected");
  const [Id, setId] = useState(Randomstring.generate(5));
  const [message, setMessage] = useState("No message");
  const [conected, setConnected] = useState(false);

  function initialize() {
    console.log("In fonction: Initialize");
    peer = new Peer(Id, {
      host: "192.168.1.12",
      port: 4000,
      path: "/",
      debug: 3,
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
      console.log("on open :" + peer.id);
    });
    peer.on("close", function () {
      console.log("on close :" + peer.id);
      conn = null;
    });
    peer.on("error", function (err) {
      console.log("peer.on error :" + err);
    });
    join();
  }

  function join() {
    console.log("In fonction: Join");
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
    });
    conn.on("error", function (err) {
      console.log("on conn.err:");
    });
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
        <Button className="LittleButton" onClick={initialize}>
          Join server
        </Button>
      </Row>
      <Button
        className="LittleButton"
        onMouseDown={() => {
          send("up");
        }}
        onMouseUp={() => {
          send("def");
        }}
      >
        up
      </Button>
      <Button
        className="LittleButton"
        onMouseDown={() => {
          send("down");
        }}
        onMouseUp={() => {
          send("def");
        }}
      >
        down
      </Button>
    </Card>
  );
}

export default Sender;
