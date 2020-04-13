import React, { useState, useEffect } from "react";
import randomstring from "randomstring";
import Peer from "peerjs";
import "../Views/Views.css";

var peer = null;
var conn = null;
function Receiver() {
  const [cmd, setCmd] = useState("");
  const [room, setRoom] = useState(randomstring.generate(5));

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
      if (conn) {
        c.on("open", function () {
          c.send("welcome but already in use!!!");
          c.close();
        });
      }
      conn = c;
      startRecv();
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

  function startRecv() {
    conn.on("data", function (data) {
      console.log(data);
      setCmd(cmd + data);
    });
  }

  useEffect(() => {
    initialize();
  }, []);

  return (
    <div>
      <h1 className="Typo">The room id is : {room}</h1>
      <h1 className="Typo"> {cmd}</h1>
    </div>
  );
}

export default Receiver;
