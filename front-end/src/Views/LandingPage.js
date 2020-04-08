import React from "react";
import Unity, { UnityContent } from "react-unity-webgl";

const unityContent = new UnityContent(
  "MyGame/Build/MyGame.json",
  "MyGame/Build/UnityLoader.js"
);

function LandingPage() {
  return (
    <div className="App">
      <Unity unityContent={unityContent} />
    </div>
  );
}

export default LandingPage;
