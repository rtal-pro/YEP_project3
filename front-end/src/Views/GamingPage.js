import React, { useState, useEffect } from "react";
import { Container, Button } from "react-bootstrap";
import Unity, { UnityContent } from "react-unity-webgl";
import { useHistory } from "react-router-dom";
import "../Views/Views.css";

function GamingPage(props) {
  const history = useHistory();
  const [unity, setUnity] = useState(
    new UnityContent(props.game.pathJson, props.game.pathLoader)
  );

  function controlEvent(unity) {
    // this function sends a message to a game object
    // named "SpawnController" to the public method
    // "SpawnEnemies" with a value of "10".
    unity.send("Player1", "getCmd", props.data);
    if (props.data === "return") {
      history.push("/collection");
    }
  }

  useEffect(() => {
    controlEvent(unity);
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
