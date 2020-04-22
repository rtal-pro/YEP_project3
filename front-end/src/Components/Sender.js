import React, { useState } from "react";
import { Row, Form, Card, Button } from "react-bootstrap";
import Randomstring from "randomstring";
import Peer from "peerjs";
import "../Views/Views.css";

var peer = null;
var conn = null;

function Sender() {
  const [roomId, setRoom] = useState("No Room selected");
  const id = Randomstring.generate({ length: 4, charset: "numeric" });

  function initialize() {
    peer = new Peer(id, {
      host: "127.0.0.1",
      port: 4000,
      path: "/",
      debug: 1,
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
      console.log("My name is :" + peer.id);
    });
    peer.on("disconnected", function () {
      console.log("Connection lost. Please reconnect");
      // Workaround for peer.reconnect deleting previous id
      peer.reconnect();
    });
    peer.on("close", function () {
      console.log("on close :" + peer.id);
      conn = null;
    });
    peer.on("error", function (err) {
      console.log("peer.on error :" + err);
    });
  }

  function join() {
    console.log("In fonction: Join");
    conn = peer.connect(roomId, {
      reliable: true,
    });
    conn.on("open", function () {
      console.log("on conn.on:open:" + conn.peer);
      conn.send({ type: "id", value: id });
    });
    conn.on("data", function (data) {
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
    //console.log("In fonction: Send");
    if (conn && conn.open) {
      console.log(data);
      conn.send({ type: "move", value: data });
    }
  }

  return (
    <Card>
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
          Validate id room
        </Button>
        <Button className="LittleButton" onClick={join}>
          Join the room
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
