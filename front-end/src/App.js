import React from "react";
import Unity, { UnityContent } from "react-unity-webgl";
import "./App.css";

const unityContent = new UnityContent(
  "MyGame/Build/MyGame.json",
  "MyGame/Build/UnityLoader.js"
);

function App() {
  return (
    <div className="App">
      <Unity unityContent={unityContent} />
    </div>
  );
}

export default App;
