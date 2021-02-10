import React from "react";
import { Song } from "../utils/SongList";
import LibrarySong from "./LibrarySong";
interface Props {
  songs: Array<Song>;
  setCurrentSong: React.Dispatch<React.SetStateAction<Song>>;
  currentSong: Song;
}
const Library: React.FC<Props> = ({ songs, setCurrentSong, currentSong }) => {
  return (
    <div className="library">
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySong
            setCurrentSong={setCurrentSong}
            song={song}
            key={song.id.toString()}
            currentSong={currentSong}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
