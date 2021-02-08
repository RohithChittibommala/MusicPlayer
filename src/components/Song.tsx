import React from "react";

type Props = {
  name: String;
  cover: String | string;
  audio: String;
  artist: String;
  color: Array<String>;
  id: String;
  isActive: Boolean;
};

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
