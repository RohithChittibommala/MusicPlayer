import React from "react";
import { Song } from "../utils/SongList";
import LibrarySong from "./LibrarySong";
interface Props {
  songs: Array<Song>;
}
const Library: React.FC<Props> = ({ songs }) => {
  return (
    <div className="library">
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySong song={song} />
        ))}
      </div>
    </div>
  );
};

export default Library;
