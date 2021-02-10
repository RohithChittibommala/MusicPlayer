import React from "react";
import { Song } from "../utils/SongList";
interface Props {
  song: Song;
  setCurrentSong: React.Dispatch<React.SetStateAction<Song>>;
  currentSong: Song;
}
const LibrarySong: React.FC<Props> = ({
  song,
  setCurrentSong,
  currentSong,
}) => {
  const IsSongIsPlaying = song.id === currentSong.id ? "current" : "";
  return (
    <div
      className={`library-song ${IsSongIsPlaying}`}
      onClick={() => setCurrentSong(song)}
    >
      <img src={`${song.cover}`} alt={`${song.name}`} />
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
