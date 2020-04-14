import React from "react";
import Sender from "../Components/Sender";

function Client() {
  console.log("IN CLIENNNNT");
  return (
    <div className="App">
      <h1>Sender</h1>
      <Sender opts={"Sender"} />
    </div>
  );
}

export default Client;
