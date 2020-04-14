import React, { useState, useEffect } from "react";
import Unity, { UnityContent } from "react-unity-webgl";
import { Container } from "react-bootstrap";
import randomstring from "randomstring";
import Peer from "peerjs";
import "../Views/Views.css";

var peer = null;
var conn = [];
function Receiver() {
  const room = randomstring.generate(5);
  const unityContent = new UnityContent(
    "airPong/Build/airPong.json",
    "airPong/Build/UnityLoader.js"
  );

  function initialize() {
    peer = new Peer(room, {
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
      if (peer.id === null) {
        peer.id = room;
      }
    });
    peer.on("connection", function (c) {
      conn.push(c);
      conn[conn.length - 1].on("open", function () {
        conn[conn.length - 1].send("PLAYER" + conn.length);
      });
      listenConn();
    });
    peer.on("disconnected", function () {
      console.log("connection lost with");
      peer.reconnect();
    });
    peer.on("close", function () {
      console.log("connection destroyed");
    });
    peer.on("error", function (err) {
      console.log(err);
    });
  }

  function handleEvent(data, i) {
    // this function sends a message to a game object
    // named "SpawnController" to the public method
    // "SpawnEnemies" with a value of "10".
    let player = "Player" + i;
    unityContent.send(player, "getCmd", data);
  }

  function listenConn() {
    for (let i = 0; i < conn.length; i++) {
      conn[i].on("data", function (data) {
        console.log(data);
        handleEvent(data, i + 1);
      });
    }
  }

  useEffect(() => {
    initialize();
  }, []);

  return (
    <div>
      <h1 className="Typo">The room id is : {room}</h1>
      <Container className="GameContainer">
        <Unity unityContent={unityContent} />
      </Container>
    </div>
  );
}

export default Receiver;
