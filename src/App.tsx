import { useEffect, useState } from "react";
import Library from "./components/Library";
import Player from "./components/Player";
import Song from "./components/Song";
import "./styles/app.scss";

import getSongsList from "./utils/SongList";
import Modal from "react-modal";
import { addNewSong } from "./utils/util";
import Navbar from "./components/Navbar";

Modal.setAppElement("#root");
function App() {
  const [songs, setSongs] = useState(getSongsList());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isModalOpen, setIsModalIsOpen] = useState(false);

  useEffect(() => {
    const localSongs = localStorage.getItem("songs");
    if (localSongs) {
      setSongs(JSON.parse(localSongs));
    }
  }, []);

  const handleSongUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsModalIsOpen(false);
    const { files } = e.target;
    if (files) {
      const song = await addNewSong(files[0]);
      const localSongs = localStorage.setItem(
        "songs",
        JSON.stringify([...songs, song])
      );
      setSongs([...songs, song]);
    }
  };
  return (
    <div className="App">
      <Navbar />
      <Song {...currentSong} />
      <Player {...currentSong} />
      <Library
        songs={songs}
        currentSong={currentSong}
        setModalOpen={setIsModalIsOpen}
        setCurrentSong={setCurrentSong}
      />
      <Modal
        isOpen={isModalOpen}
        style={{
          overlay: {
            backgroundColor: "rgba(63, 59, 59, 0.75)",
          },
        }}
        onRequestClose={() => setIsModalIsOpen(false)}
        className="modal"
      >
        <input
          type="file"
          onChange={handleSongUpload}
          className="audio-input"
          accept=".mp3"
        />
      </Modal>
    </div>
  );
}

export default App;
