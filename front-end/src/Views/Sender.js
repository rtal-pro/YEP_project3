import React from "react";
import Sender from "../Components/Sender";
import Reciever from "../Components/Reciever";

function Client() {
  return (
    <div className="App">
      <h1>Sender</h1>
      <Sender opts={"Sender"} />
    </div>
  );
}

export default Client;
