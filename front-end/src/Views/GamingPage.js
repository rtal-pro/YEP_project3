import React from "react";
import Unity, { UnityContent } from "react-unity-webgl";

function GamingPage() {
  const unityContent = new UnityContent(
    "MyGame/Build/MyGame.json",
    "MyGame/Build/UnityLoader.js"
  );

  return (
    <div className="App">
      <Unity unityContent={unityContent} />
    </div>
  );
}

export default GamingPage;
