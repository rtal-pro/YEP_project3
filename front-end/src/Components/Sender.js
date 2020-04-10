import React, { useState } from "react";
import Randomstring from "randomstring";
import Peer from "peerjs";

function Sender() {
  var peer = null;
  var conn = null;
  var roomId = "room";

  function initialize() {
    peer = new Peer(null, {
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
        peer.id = "pooky";
      }
    });
    peer.on("close", function () {
      conn = null;
      console.log("CLOSY");
    });
    peer.on("error", function (err) {
      console.log("HAIRY");
      console.log(err);
    });
  }

  function join() {
    if (conn) {
      conn.close();
    }
    conn = peer.connect(roomId, {
      reliable: true,
    });
    conn.on("open", function () {
      console.log("connected to" + conn.peer);
    });
    conn.on("data", function (data) {
      console.log(data);
    });
    conn.on("close", function () {
      console.log("close");
    });
  }

  function send() {
    if (conn && conn.open) {
      console.log("pop");
      conn.send("coucou");
    }
  }
  initialize();
  return (
    <div>
      <button onClick={join}>join</button>
      <button onClick={send}>Send</button>
    </div>
  );
}

export default Sender;
