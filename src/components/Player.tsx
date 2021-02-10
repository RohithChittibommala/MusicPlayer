import React, { useEffect, useRef, useState } from "react";
import { FaAngleLeft, FaAngleRight, FaPlay } from "react-icons/fa";
import { Song } from "../utils/SongList";
import { FiPause } from "react-icons/fi";
interface Props extends Song {}

type songInfoType = {
  currentTime: number;
  duration: number;
};

const Player: React.FC<Props> = ({ audio }) => {
  const audioRef = useRef<HTMLAudioElement>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState<songInfoType>({
    currentTime: 0,
    duration: 0,
  });

  useEffect(() => {
    const playSongPromise = audioRef.current?.play();
    if (playSongPromise !== undefined) {
      playSongPromise.then((audio) => audioRef.current?.play());
    }
  }, [audio]);

  const playSongHandler = () => {
    if (isPlaying) {
      audioRef.current?.pause();
      setIsPlaying(false);
    } else {
      audioRef.current?.play();
      setIsPlaying(true);
    }
  };

  function timeUpdateHandler(e: any) {
    const currentTime: number = e.target.currentTime;
    const duration: number = e.target.duration;
    setSongInfo({ ...songInfo, currentTime, duration });
  }

  function timeFormatter(time: number): String {
    return (
      Math.floor((time || 0) / 60) +
      ":" +
      ("0" + Math.floor(time % 60)).slice(-2)
    );
  }

  function handleSongDrag(e: React.ChangeEvent<HTMLInputElement>) {
    if (audioRef.current?.currentTime)
      audioRef.current.currentTime = e.currentTarget.valueAsNumber;
    setSongInfo({ ...songInfo, currentTime: e.currentTarget.valueAsNumber });
  }

  return (
    <div className="player">
      <div className="time-control">
        <p>{timeFormatter(songInfo.currentTime)}</p>
        <input
          type="range"
          value={songInfo.currentTime}
          min={0}
          max={songInfo.duration}
          onChange={handleSongDrag}
        />
        <p>{timeFormatter(songInfo.duration || 0)}</p>
      </div>
      <div className="play-control">
        <FaAngleLeft size={24} className="svg" />
        {isPlaying ? (
          <FiPause size={30} onClick={playSongHandler} className="svg" />
        ) : (
          <FaPlay size={30} onClick={playSongHandler} className="svg" />
        )}
        <FaAngleRight size={24} className="svg" />
      </div>
      <audio
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={timeUpdateHandler}
        ref={audioRef}
        src={`${audio}`}
      />
    </div>
  );
};

export default Player;
