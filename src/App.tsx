import { useState } from "react";
import Player from "./components/Player";
import Song from "./components/Song";
import "./styles/app.scss";
import getSongsList from "./utils/SongList";

function App() {
  const [songs, setSongs] = useState(getSongsList());
  const [currentSong, getCurrentSong] = useState(songs[0]);
  return (
    <div className="App">
      <Song />
      <Player />
    </div>
  );
}

export default App;
