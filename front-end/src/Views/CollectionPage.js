import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Container, Button } from "react-bootstrap";
import { GiRetroController } from "react-icons/gi";
import GameCard from "../Components/GameCard";
import "../Views/Views.css";

function CollectionPage(props) {
  const history = useHistory();
  const gameNb = 4;
  const [select, setSelect] = useState(0);
  const gameInfo = [
    ["airPong/Build/airPong.json", "airPong/Build/UnityLoader.js"],
  ];

  const showCard = () => {
    let gameCard = [];
    for (let i = 0; i < gameNb; i++) {
      if (select === i) {
        gameCard.push(<GameCard select={true}></GameCard>);
      } else {
        gameCard.push(<GameCard select={false}></GameCard>);
      }
    }
    if (select > gameNb - 1) {
      setSelect(0);
    } else if (select < 0) {
      setSelect(gameNb - 1);
    }
    return gameCard;
  };

  const handleSelect = () => {
    history.push("/game");
  };

  return (
    <div className="CollectionPage">
      <div className="CollectionTitle">
        <GiRetroController className="FlameIcon" />
        {"      "}Select a game{"   "}
        <GiRetroController className="FlameIcon" />
      </div>
      <div className="inCollectionBox">{showCard()}</div>
      <div>
        <button
          style={({ width: "400px" }, { marginRight: "10px" })}
          className="GameCollectionButton"
          onClick={() => setSelect(select - 1)}
        >
          left
        </button>
        <button
          style={({ width: "300px" }, { marginRight: "10px" })}
          className="GameCollectionButton"
          onClick={() => setSelect(select + 1)}
        >
          right
        </button>
        <button
          style={({ width: "300px" }, { marginRight: "10px" })}
          className="GameCollectionButton"
          onClick={() => handleSelect()}
        >
          Ok
        </button>
      </div>
    </div>
  );
}

export default CollectionPage;
