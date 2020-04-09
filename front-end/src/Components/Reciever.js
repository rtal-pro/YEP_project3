import React, { useState } from "react";
import Randomstring from "randomstring";
import Peer from "peerjs";

function Receiver() {
  const [room, setRoom] = useState("");
  const [peer, setPeer] = useState();
  const [conn, setConn] = useState();

  function RoomMaker() {
    setPeer(
      new Peer(room, {
        host: "localhost",
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
      })
    );
  }

  const setName = (event) => {
    setRoom(event.target.value);
  };

  function coo() {
    setPeer(
      peer.on("connection", (conn) => {
        conn.on("data", (data) => {
          console.log("hi");
          console.log(data);
        });
      })
    );
  }

  return (
    <div>
      <h2>Name of the Room: {room}</h2>
      <form>
        Room
        <input onChange={setName}></input>
      </form>
      <button onClick={RoomMaker}>PeerMaker</button>
      <button onClick={coo}>connection</button>
    </div>
  );
}

export default Receiver;
