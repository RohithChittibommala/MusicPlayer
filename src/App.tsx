import { useState } from "react";
import Library from "./components/Library";
import Player from "./components/Player";
import Song from "./components/Song";
import "./styles/app.scss";
import getSongsList from "./utils/SongList";
import Modal from "react-modal";
Modal.setAppElement("#root");
function App() {
  const [songs] = useState(getSongsList());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isModalOpen, setIsModalIsOpen] = useState(false);
  console.log("rerender");
  return (
    <div className="App">
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
        className="modal"
      >
        <input type="file" className="audio-input" accept=".mp3" />
      </Modal>
    </div>
  );
}

export default App;
