import { useEffect, useState } from "react";
import Library from "./components/Library";
import Player from "./components/Player";
import Song from "./components/Song";
import "./styles/app.scss";
import getSongsList from "./utils/SongList";
import Modal from "react-modal";
import { v4 as uuidv4 } from "uuid";
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

  const handleSongUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (files) {
      const songUrl = URL.createObjectURL(files[0]);
      console.log(songUrl);
      const newSong = {
        name: files[0]?.name,
        artist: "unknown",
        cover:
          "https://chillhop.com/wp-content/uploads/2020/12/33a2a875828118a3ff260638a88362936104879a-1024x1024.jpg",
        audio: songUrl,
        color: ["#CD607D", "#c94043"],
        id: uuidv4(),
        isActive: true,
      };
      localStorage.setItem("songs", JSON.stringify([...songs, newSong]));
      setSongs([...songs, newSong]);
    }
  };
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
