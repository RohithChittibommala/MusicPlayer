import React from "react";
import { Song as ISong } from "../utils/SongList";

interface Props extends ISong {}

const Song: React.FC<Props> = ({ artist, name, cover }) => {
  return (
    <div className="song-container">
      <img src={`${cover}`} alt="song cover" />
      <h2>{name}</h2>
      <h3>{artist}</h3>
    </div>
  );
};

export default Song;
