import React from "react";
interface Props {}

const Song: React.FC<Props> = (props) => {
  return (
    <div className="song-container">
      <h1>Picture</h1>
      <h1>Song Name</h1>
      <h1>Artist</h1>
    </div>
  );
};

export default Song;
