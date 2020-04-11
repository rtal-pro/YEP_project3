import React, { useState, useEffect } from "react";
import { Form, Container, Button, Col } from "react-bootstrap";
import Randomstring from "randomstring";
import Peer from "peerjs";
import "../Views/Views.css";

function Sender() {
  var peer = null;
  var conn = null;
  const [roomId, setRoom] = useState("ROOM1");
  const [Id, setId] = useState("Id");

  function initialize() {
    peer = new Peer(Id, {
      host: "localhost",
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
        peer.id = roomId;
      }
    });
    peer.on("close", function () {
      conn = null;
    });
    peer.on("error", function (err) {
      console.log(err);
    });
  }

  function join() {
    console.log("enter join");
    if (conn) {
      console.log("1:connected to " + conn.peer);
      conn.close();
    }
    conn = peer.connect(roomId, {
      reliable: true,
    });
    conn.on("open", function () {
      console.log("2:connected to" + conn.peer);
    });
    conn.on("data", function (data) {
      console.log(data);
    });
    conn.on("close", function () {
      console.log("close");
    });
  }

  function send() {
    console.log("before send");
    if (conn && conn.open) {
      console.log("sending message");
      conn.send("hi");
    }
  }

  function handleClick(order, data) {
    switch (order) {
      case "room":
        setRoom(data);
      case "id":
        setId(data);
    }
  }

  return (
    <Container>
      <Button onClick={initialize}>Initiallize the client</Button>
      <Button onClick={join}>Join server</Button>
      <Button onClick={send}>Send hi!</Button>
    </Container>
  );
}

export default Sender;
