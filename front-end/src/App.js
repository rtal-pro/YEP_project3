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
  const [myConn, setConn] = useState([]);
  const [room, setRoom] = useState("####");
  const [ids, setIds] = useState([]);
  const [data, setData] = useState();

  const closeConnection = () => {
    for (let i = 0; i < myConn.length; i++) {
      myConn[i].close();
      setConn([]);
    }
  };

  const initialize = () => {
    let peer;
    var roomTMP = randomstring.generate({ length: 4, charset: "numeric" });
    setRoom(roomTMP);
    closeConnection();
    if (peer) peer = null;
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
      peer.reconnect();
    });
    peer.on("close", function () {
      console.log("connection destroyed");
    });
    peer.on("error", function (err) {
      console.log(err);
    });
  };

  const handleEvent = (info, i) => {
    console.log("event:" + info);
    switch (info.type) {
      case "id":
        setIds((ids) => [...ids, info.value]);
        break;
      case "move":
        console.log("in move" + info.value);
        setData(info.value);
        break;
      default:
        break;
    }
  };

  const listenConn = (myConn) => {
    for (let i = 0; i < myConn.length; i++) {
      console.log("listen" + myConn.length);
      myConn[i].on("data", function (data) {
        handleEvent(data, i + 1);
      });
    }
  };

  useEffect(() => {
    listenConn(myConn);
  }, [myConn]);

  return (
    <div className="App">
      <Navbar
        ids={ids}
        room={room}
        player={myConn.length}
        initialize={initialize}
      ></Navbar>
      <BrowserRouter>
        <Switch>
          <Route
            exact
            render={(props) => <GamingPage room={room} ids={ids} data={data} />}
            path="/game"
          />
          <Route
            exact
            render={(props) => (
              <LandingPage initialize={initialize} room={room} ids={ids} />
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
