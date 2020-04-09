import React, { useState } from "react";
import Randomstring from "randomstring";
import Peer from "peerjs";

function Sender() {
  const [rcev, setRcev] = useState("");
  const [id, setId] = useState();
  const [conn, setConn] = useState();
  const [peer, setPeer] = useState();

  function PeerMaker(props) {
    setPeer(
      new Peer(id, {
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

  const setSender = (event) => {
    setId(event.target.value);
  };

  const setReciever = (event) => {
    setRcev(event.target.value);
  };

  function connecty() {
    setConn(peer.connect(rcev));
  }

  function sendy() {
    this.conn.on("open", () => {
      conn.send("hi!");
      console.log("hiiiiiiii!!!!");
    });
  }

  return (
    <div>
      <h2>Name of the sender: {id}</h2>
      <form>
        Sender Id
        <input onChange={setSender}></input>
      </form>
      <h2>Name of the sender: {rcev}</h2>
      <form>
        Reciever Id
        <input onChange={setReciever}></input>
      </form>
      <button onClick={PeerMaker}>PeerMaker</button>
      <button onClick={connecty}>Connect</button>
      <button onClick={sendy}>Send</button>
    </div>
  );
}

export default Sender;
