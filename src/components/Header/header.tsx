import { FC } from "react";

import Content from "./header.content";

import Navbar from "./header.navbar";

type props = {
  onShowCart: () => void;
};

const Header: FC<props> = ({ onShowCart }) => {
  return (
    <div>
      <Navbar onButtonClick={onShowCart} />
      <Content />
    </div>
  );
};
export default Header;
