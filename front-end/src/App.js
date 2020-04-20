import React, { useState, useEffect } from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import GamingPage from "./Views/GamingPage";
import LandingPage from "./Views/LandingPage";
import Sender from "./Views/Sender";
import Room from "./Views/Room";
import Navbar from "./Components/NavBar";
import randomstring from "randomstring";
import Peer from "peerjs";
import "bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/video-react/dist/video-react.css";
import "./App.css";

function App() {
  const [myPeer, setPeer] = useState(null);
  const [myConn, setConn] = useState([]);
  const [player, setPlayer] = useState(0);
  const [room, setRoom] = useState("NO ID");

  function initialize() {
    let peer;
    var roomTMP = randomstring.generate({ length: 4, charset: "numeric" });
    setRoom(roomTMP);
    peer = new Peer(roomTMP, {
      host: "localhost",
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
      setPeer(peer);
      setConn(() => []);
      console.log("My name is:" + peer.id);
    });
    peer.on("connection", function (c) {
      setConn((myConn) => [...myConn, c]);
      c.on("open", function () {
        c.send("PLAYER" + myConn.length);
      });
    });
    peer.on("disconnected", function () {
      console.log("connection lost with");
      setPeer(null);
      peer.reconnect();
    });
    peer.on("close", function () {
      setPeer(null);
      console.log("connection destroyed");
    });
    peer.on("error", function (err) {
      setPeer(null);
      console.log(err);
    });
  }

  function handleEvent(data, i) {
    console.log("event:" + data);
  }

  function listenConn() {
    for (let i = 0; i < myConn.length; i++) {
      console.log("listen" + myConn.length);
      myConn[i].on("data", function (data) {
        console.log("tada:" + data);
        myConn[i].send("PLAYER" + myConn.length);
        handleEvent(data, i + 1);
      });
    }
  }

  useEffect(() => {
    listenConn();
  }, [myConn, myPeer]);

  return (
    <div className="App">
      <Navbar
        room={room}
        player={myConn.length}
        initialize={initialize}
      ></Navbar>
      <BrowserRouter>
        <Switch>
          <Route exact component={GamingPage} path="/game" />
          <Route
            exact
            render={(props) => (
              <LandingPage
                initialize={initialize}
                room={room}
                player={myConn.length}
              />
            )}
            path="/"
          />
          <Route exact component={Room} path="/room" />
          <Route exact component={Sender} path="/sender" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
