import React from "react";
import { Song } from "../utils/SongList";
import LibrarySong from "./LibrarySong";
interface Props {
  songs: Array<Song>;
  setCurrentSong: React.Dispatch<React.SetStateAction<Song>>;
  currentSong: Song;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isLibraryOpen: boolean;
}
const Library: React.FC<Props> = ({
  songs,
  setCurrentSong,
  currentSong,
  setModalOpen,
  isLibraryOpen,
}) => {
  return (
    <div className={`library ${isLibraryOpen ? `visible` : ``}`}>
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
      <button onClick={() => setModalOpen(true)} className="add-song-btn">
        Add your song
      </button>
    </div>
  );
};

export default Library;
