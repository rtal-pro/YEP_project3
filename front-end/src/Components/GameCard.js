import React, { useState, useEffect } from "react";
import { Container, Button } from "react-bootstrap";
import "../Views/Views.css";

function GameCard(props) {
  if (props.select === true) {
    return (
      <div className="CollectionCardSelected">
        <button className="inCollectionCardSelected">
          <img src={props.game.img}></img>
        </button>
      </div>
    );
  } else {
    return (
      <div className="CollectionCardUnSelected">
        <div className="inCollectionCardUnSelected">
          <img className="ImageCard" src={props.game.img}></img>
        </div>
      </div>
    );
  }
}

export default GameCard;
