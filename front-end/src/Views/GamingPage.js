import React, { useState, useEffect } from "react";
import { Container, Button } from "react-bootstrap";
import Unity, { UnityContent } from "react-unity-webgl";
import "../Views/Views.css";

function GamingPage(props) {
  const [unity, setUnity] = useState(
    new UnityContent(
      "airPong/Build/airPong.json",
      "airPong/Build/UnityLoader.js"
    )
  );
  console.log("show" + props.data);

  function controlEvent(unity, data) {
    // this function sends a message to a game object
    // named "SpawnController" to the public method
    // "SpawnEnemies" with a value of "10".
    console.log("before unity" + props.data);
    unity.send("Player1", "getCmd", props.data);
    console.log("after unity" + props.data);
  }

  useEffect(() => {
    controlEvent(unity, props.data);
  }, [props.data, unity]);
  return (
    <div className="GamePage">
      <div className="GameContainer">
        <Unity unityContent={unity} />
      </div>
    </div>
  );
}

export default GamingPage;
