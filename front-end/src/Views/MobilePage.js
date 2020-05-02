import React from "react";
import "./Views.css";
import { BsCloudDownload } from "react-icons/bs";
import { FaBattleNet } from "react-icons/fa";

function MobilePage(props) {
  const handleDownload = () => {
    console.log("coucou");
  };

  return (
    <div className="MobileView">
      <div className="MainTypo" style={{ marginLeft: "-50px" }}>
        <FaBattleNet className="MainIcon" /> AirBattle
      </div>
      <div>
        <div className="SecondTypo" style={{ marginTop: "70px" }}>
          Please download the app!
        </div>
      </div>
      <div className="RoomId" style={{ marginTop: "70px" }}>
        <div className="NumberId" style={{ height: "100px" }}>
          <button className="DownloadButton" onClick={handleDownload()}>
            <BsCloudDownload className="FlameIcon" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default MobilePage;
