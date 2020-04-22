import React from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

import "../Views/Views.css";
import { FaBattleNet } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { FaUserAstronaut } from "react-icons/fa";
import { FiRefreshCw } from "react-icons/fi";

function NavBar(props) {
  const key = "bottom";
  return (
    <div className="Header">
      <div className="LeftHeader">
        <FaBattleNet className="MainIcon" />
        <div className="MainTypo">AirBattle</div>
      </div>
      <div className="RightHeader">
        <OverlayTrigger
          key={key}
          placement={key}
          overlay={
            <Tooltip>
              <strong>Settings on works</strong>.
            </Tooltip>
          }
        >
          <button className="RightIcon">
            <FiSettings />
          </button>
        </OverlayTrigger>
        <OverlayTrigger
          key={key}
          placement={key}
          overlay={
            <Tooltip>
              <strong>Number of player connected: {props.player}</strong>.
            </Tooltip>
          }
        >
          <button className="RightIcon">
            <FaUserAstronaut />
            {props.player > 0 && <div className="Notif">{props.player}</div>}
          </button>
        </OverlayTrigger>
        <OverlayTrigger
          key={key}
          placement={key}
          overlay={
            <Tooltip>
              <strong>Click here to refresh this ID room.</strong>
            </Tooltip>
          }
        >
          <button className="RightIcon">
            <FiRefreshCw onClick={props.initialize} />
          </button>
        </OverlayTrigger>
        <div className="RoomId">
          <div className="NumberId">
            <div className="SecondTypo">iD {props.room}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
