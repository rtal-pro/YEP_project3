import React, { useState, useEffect } from "react";
import Unity, { UnityContent } from "react-unity-webgl";
import { useHistory } from "react-router-dom";
import "../Views/Views.css";

function GamingPage(props) {
  const history = useHistory();
  const [unity, setUnity] = useState(
    new UnityContent(props.game.pathJson, props.game.pathLoader)
  );

  function controlEvent(unity) {
    unity.send(props.data.player, props.data.function, props.data.input);
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
