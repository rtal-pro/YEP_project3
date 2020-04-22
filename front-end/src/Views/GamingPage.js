import React, { useState, useEffect } from "react";
import { Container, Button } from "react-bootstrap";
import Unity, { UnityContent } from "react-unity-webgl";
import "../Views/Views.css";

function GamingPage(props) {
  const data = props.data;
  const unityContent = new UnityContent(
    "airPong/Build/airPong.json",
    "airPong/Build/UnityLoader.js"
  );
  console.log("show" + props.data);

  function controlEvent(data) {
    // this function sends a message to a game object
    // named "SpawnController" to the public method
    // "SpawnEnemies" with a value of "10".
    console.log("control" + data);
    if (data === "up") {
      console.log("seennddd" + data);
      this.unityContent.send("Player1", "getCmd", "up");
    }
  }

  useEffect(() => {
    controlEvent(props.data);
  }, [data]);
  return (
    <div className="GamePage">
      <div className="GameContainer">
        <Unity unityContent={unityContent} />
      </div>
    </div>
  );
}

export default GamingPage;
