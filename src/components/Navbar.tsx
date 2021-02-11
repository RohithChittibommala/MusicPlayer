import React from "react";
import { FcMusic } from "react-icons/fc";
interface Props {
  setIsLibOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const Navbar: React.FC<Props> = ({ setIsLibOpen }) => {
  return (
    <nav>
      <h1>Music Box</h1>
      <button onClick={() => setIsLibOpen((prev) => !prev)}>
        Library
        <FcMusic size={20} />
      </button>
    </nav>
  );
};

export default Navbar;
