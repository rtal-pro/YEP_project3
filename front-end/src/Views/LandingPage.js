import React from "react";
import { Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Views.css";
import { GiFlame } from "react-icons/gi";
import { GiBrutalHelm } from "react-icons/gi";
function LandingPage(props) {
  // const playerShow

  return (
    <div className="LandingPage">
      {props.ids.length === 0 && props.room === "####" && (
        <Row>
          <div className="MainTitle">Welcome on Air battle!</div>
        </Row>
      )}
      {props.ids.length >= 0 && props.ids.length < 2 && props.room !== "####" && (
        <Row>
          <div className="MainTitle">Great job!</div>
          <GiFlame className="FlameIcon" />
        </Row>
      )}
      {props.ids.length === 2 && (
        <Row>
          <div className="MainTitle">Awesome!</div>
          <GiBrutalHelm className="FlameIcon" />
        </Row>
      )}
      {props.ids.length === 0 && props.room === "####" && (
        <div className="TextBox">
          <div className="inTextBox">
            <h2>
              Click on the refresh button to create a room. This will start
              AirBattle.
            </h2>
            <p></p>
            <h4>
              A connect code for your smartphones will be displayed in the ID
              screen.
            </h4>
            <p></p>
            <h4>
              On your smartphones also open AirBattle in your browser such as
              Chrome.
            </h4>
            <p></p>
            <h4>Enter the displayed Id.</h4>
          </div>
        </div>
      )}
      {props.ids.length >= 0 && props.ids.length < 2 && props.room !== "####" && (
        <div className="TextBox">
          <div className="inTextBox">
            <h4>Now we are waiting for 2 players to connect.</h4>
          </div>
        </div>
      )}
      {props.ids.length === 2 && (
        <div className="TextBox">
          <div className="inTextBox">
            <h4>You can now select a game in your game collection!</h4>
            <div className="GameCollectionButton">
              <button className="inGameCollectionButton">
                Let's choose a game!
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default LandingPage;
