import React, { useState, useEffect } from "react";
import { Container, Button } from "react-bootstrap";
import GameLogo from "../Images/pong.png";
import "../Views/Views.css";

function GameCard(props) {
  if (props.select === true) {
    return (
      <div className="CollectionCardSelected">
        <button className="inCollectionCardSelected">
          <img src={GameLogo}></img>
        </button>
      </div>
    );
  } else {
    return (
      <div className="CollectionCardUnSelected">
        <div className="inCollectionCardUnSelected">
          <img className="ImageCard" src={GameLogo}></img>
        </div>
      </div>
    );
  }
}

export default GameCard;
