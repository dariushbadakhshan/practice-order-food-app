import { FC } from "react";

import classes from "./Header.Navbar.module.scss";

import CartButton from "./cart-button.navbar";

type props = {
  onButtonClick: () => void;
};

const Navbar: FC<props> = ({ onButtonClick }) => {
  return (
    <nav className={classes.navbar}>
      <div className={classes.logo}>
        <p>Omnia Food</p>
      </div>
      <div>
        <CartButton onButtonClick={onButtonClick} />
      </div>
    </nav>
  );
};
export default Navbar;
