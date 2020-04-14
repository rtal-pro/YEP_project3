import React from "react";
import { Container, Button } from "react-bootstrap";
import Unity, { UnityContent } from "react-unity-webgl";
import "../Views/Views.css";

function GamingPage() {
  const unityContent = new UnityContent(
    "airPong/Build/airPong.json",
    "airPong/Build/UnityLoader.js"
  );

  function handleUp() {
    // this function sends a message to a game object
    // named "SpawnController" to the public method
    // "SpawnEnemies" with a value of "10".
    unityContent.send("Player1", "getCmd", "up");
  }

  function handleDown() {
    // this function sends a message to a game object
    // named "SpawnController" to the public method
    // "SpawnEnemies" with a value of "10".
    unityContent.send("Player1", "getCmd", "down");
  }
  return (
    <Container className="GameContainer">
      <Unity unityContent={unityContent} />
      <Button onClick={handleUp} className="LittleButton">
        up
      </Button>
      <Button onClick={handleDown} className="LittleButton">
        Down
      </Button>
    </Container>
  );
}

export default GamingPage;
