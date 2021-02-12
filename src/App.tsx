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
  const [isLibOpen, setIsLibOpen] = useState(false);
  const [songUploadStatus, setSongUploadStaus] = useState(false);

  useEffect(() => {
    const localSongs = localStorage.getItem("songs");
    if (localSongs) {
      setSongs(JSON.parse(localSongs));
    }
  }, []);

  const handlePrevBtnClk = () => {
    const index = songs.indexOf(currentSong);
    if (index === 0) setCurrentSong(songs[songs.length - 1]);
    else setCurrentSong(songs[index - 1]);
  };

  const handleFwdBtnClk = () => {
    const index = songs.indexOf(currentSong);
    if (index === songs.length - 1) setCurrentSong(songs[0]);
    else setCurrentSong(songs[index + 1]);
  };

  const handleSongUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsModalIsOpen(false);
    const { files } = e.target;
    setSongUploadStaus(true);
    if (files) {
      const song = await addNewSong(files[0]);
      setSongUploadStaus(false);
      localStorage.setItem("songs", JSON.stringify([...songs, song]));
      setSongs([...songs, song]);
    }
  };

  return (
    <div>
      <Library
        songs={songs}
        currentSong={currentSong}
        setModalOpen={setIsModalIsOpen}
        setCurrentSong={setCurrentSong}
        isLibraryOpen={isLibOpen}
        songUploadStatus={songUploadStatus}
      />
      <div className={`app ${isLibOpen ? `active-library` : ``}`}>
        <Navbar setIsLibOpen={setIsLibOpen} />
        <Song {...currentSong} />
        <Player
          {...currentSong}
          handlePrevBtnClk={handlePrevBtnClk}
          handleFwdBtnClk={handleFwdBtnClk}
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
          <h2>Upload your favorite song</h2>
          <input
            type="file"
            onChange={handleSongUpload}
            className="audio-input"
            accept=".mp3"
          />
        </Modal>
      </div>
    </div>
  );
}

export default App;
