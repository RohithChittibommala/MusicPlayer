import React from "react";
import { FaAngleLeft, FaAngleRight, FaPlay } from "react-icons/fa";
interface Props {}
const Player: React.FC<Props> = (props) => {
  return (
    <div className="player">
      <div className="time-control">
        <p>Start Time</p>
        <input type="range" />
        <p>End Time</p>
      </div>
      <div className="play-control">
        <FaAngleLeft size={24} className="svg" />
        <FaPlay size={30} className="svg" />
        <FaAngleRight size={24} className="svg" />
      </div>
    </div>
  );
};

export default Player;
