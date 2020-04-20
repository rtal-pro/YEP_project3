// import React, { useState, useEffect } from "react";
// import Unity, { UnityContent } from "react-unity-webgl";
// import { Container } from "react-bootstrap";
// import randomstring from "randomstring";
// import Peer from "peerjs";
// import "../Views/Views.css";

// // var peer = null;
// var conn = [];
// function Receiver() {
//   var peer = null;
//   const [conn] = useState([]);
//   const [players, setPlayers] = useState(0);
//   const [room] = useState(
//     randomstring.generate({ length: 4, charset: "numeric" })
//   );
//   const [unityContent, setUnityContent] = useState(
//     new UnityContent(
//       "airPong/Build/airPong.json",
//       "airPong/Build/UnityLoader.js"
//     )
//   );

//   function initialize() {
//     peer = new Peer(room, {
//       host: "127.0.0.1",
//       port: 4000,
//       path: "/",
//       debug: 1,
//       config: {
//         iceServers: [
//           { url: "stun:stun1.l.google.com:19302" },
//           {
//             url: "turn:numb.viagenie.ca",
//             credential: "Rodtal59",
//             username: "rodolphe.tal@epitech.eu",
//           },
//         ],
//       },
//     });
//     peer.on("open", function (id) {
//       console.log("My name is:" + peer.id);
//     });
//     peer.on("connection", function (c) {
//       conn.push(c);
//       setPlayers(conn.length);
//       conn[conn.length - 1].on("open", function () {
//         conn[conn.length - 1].send("PLAYER" + conn.length);
//       });
//       listenConn();
//     });
//     peer.on("disconnected", function () {
//       console.log("connection lost with");
//       peer.reconnect();
//     });
//     peer.on("close", function () {
//       console.log("connection destroyed");
//     });
//     peer.on("error", function (err) {
//       console.log(err);
//     });
//   }

//   function handleEvent(data, i) {
//     // this function sends a message to a game object
//     // named "SpawnController" to the public method
//     // "SpawnEnemies" with a value of "10".
//     let player = "Player" + i;
//     console.log("event:" + data);
//     unityContent.send(player, "getCmd", data);
//   }

//   function listenConn() {
//     console.log("iciiiiii ?");
//     for (let i = 0; i < conn.length; i++) {
//       conn[i].on("data", function (data) {
//         console.log("tada:" + data);
//         handleEvent(data, i + 1);
//       });
//     }
//   }

//   useEffect(() => {
//     if (players <= 0) initialize();
//     console.log("ici");
//   }, []);

//   return null;
// }

// export default Receiver;
