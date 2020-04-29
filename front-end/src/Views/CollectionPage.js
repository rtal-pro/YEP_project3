import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Container, Button } from "react-bootstrap";
import { GiRetroController } from "react-icons/gi";
import GameCard from "../Components/GameCard";
import "../Views/Views.css";

function CollectionPage(props) {
  const history = useHistory();
  const [select, setSelect] = useState(0);
  const gameCo = [
    {
      game: "airPong",
      pathJson: "GameCollection/airPong/Build/airPong.json",
      pathLoader: "GameCollection/airPong/Build/UnityLoader.js",
      img: "./GameCollection/airPong/pong.png",
    },
    {
      game: "carRace",
      pathJson: "GameCollection/MyGame/Build/MyGame.json",
      pathLoader: "GameCollection/MyGame/Build/UnityLoader.js",
      img: "./GameCollection/MyGame/images.jpeg",
    },
  ];

  function controlEvent() {
    // this function sends a message to a game object
    // named "SpawnController" to the public method
    // "SpawnEnemies" with a value of "10".

    if (props.data.input === "left") {
      setSelect(select - 1);
    }
    if (props.data.input === "right") {
      setSelect(select + 1);
    }
    if (props.data.input === "ok") {
      props.game(gameCo[select]);
      props.send(gameCo[select]);
      history.push("/game");
    }
  }

  const showCard = () => {
    let gameCard = [];
    for (let i = 0; i < gameCo.length; i++) {
      if (select === i) {
        gameCard.push(<GameCard game={gameCo[i]} select={true}></GameCard>);
      } else {
        gameCard.push(<GameCard game={gameCo[i]} select={false}></GameCard>);
      }
    }
    if (select > gameCo.length - 1) {
      setSelect(0);
    } else if (select < 0) {
      setSelect(gameCo.length - 1);
    }
    return gameCard;
  };

  useEffect(() => {
    controlEvent();
  }, [props.data]);

  return (
    <div className="CollectionPage">
      <div className="CollectionTitle">
        <GiRetroController className="FlameIcon" />
        {"      "}Select a game{"   "}
        <GiRetroController className="FlameIcon" />
      </div>
      <div className="inCollectionBox">{showCard()}</div>
    </div>
  );
}

export default CollectionPage;
