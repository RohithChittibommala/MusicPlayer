import React from "react";
import { FcMusic } from "react-icons/fc";
interface Props {}
const Navbar: React.FC<Props> = (props) => {
  return (
    <nav>
      <h1>Music Box</h1>
      <button>
        <FcMusic />
      </button>
    </nav>
  );
};

export default Navbar;
