import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { Song } from "./SongList";

export const addNewSong = async (file: File) => {
  const data = new FormData();
  data.append("file", file);
  data.append("upload_preset", `${process.env.REACT_APP_UPLOAD_PRESET}`);
  data.append("resource_type", "audio");
  data.append("cloud_name", `${process.env.REACT_APP_CLOUD_NAME}`);
  const res = await axios.post(`${process.env.REACT_APP_CLOUDINARY_URL}`, data);
  return createNewSong(res.data);
};

const createNewSong = (data: any): Song => {
  const r1 = Math.floor(Math.random() * colors.length) + 1;
  const r2 = Math.floor(Math.random() * colors.length) + 1;
  const r3 = Math.floor(Math.random() * backgroundCoverUrl.length) + 1;
  return {
    artist: "unknown",
    audio: data.url,
    color: [colors[r1], colors[r2]],
    cover: backgroundCoverUrl[r3],
    id: uuidv4(),
    name: data.original_filename,
  };
};

const backgroundCoverUrl = [
  "https://chillhop.com/wp-content/uploads/2020/10/0e5bb63f838ff92eeac142aae944e9f678df13c9-1024x1024.jpg",
  "https://chillhop.com/wp-content/uploads/2020/09/88e7eb711f8c71d87fc102e97cf91e36f692348d-1024x1024.jpg",
  "https://chillhop.com/wp-content/uploads/2020/09/2899f7cc22ab12e17d0119819aac3ca9dbab46e6-1024x1024.jpg",
  "https://chillhop.com/wp-content/uploads/2020/10/0e5bb63f838ff92eeac142aae944e9f678df13c9-1024x1024.jpg",
  "https://chillhop.com/wp-content/uploads/2020/10/23fdd99adc3e16abcb67b004ea3e748ebf433a49-1024x1024.jpg",
  "https://chillhop.com/wp-content/uploads/2020/09/c209a7df7b9bc133dfff73ce86ebc3c57c2b73dd-1024x1024.jpg",
];

const colors = [
  "#205950",
  "#2ab3bf",
  "#EF8EA9",
  "#ab417f",
  "#CD607D",
  "#c94043",
];
