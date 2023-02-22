import { FC, useContext, useEffect, useState } from "react";

import { setTimeout } from "timers/promises";

import CartContext from "../store/cart-context";

import CartIcon from "./cart-icon";

import classes from "./cart-button.module.scss";

type props = {
  onButtonClick: () => void;
};

const CartButton: FC<props> = ({ onButtonClick }) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

  const cartCtx = useContext(CartContext);

  const { items } = cartCtx;

  const numberOfCartItems = items.reduce((curNumber, item) => {
    return (curNumber += item.amount);
  }, 0);

  const btnClasses = `${classes.button} ${
    btnIsHighlighted ? classes.bump : ""
  }`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }

    setBtnIsHighlighted(true);

    // const timer = setTimeout(() => {
    //   setBtnIsHighlighted(false);
    // }, 300);

    // return () => {
    //   clearTimeout(timer);
    // };
  }, [items]);

  return (
    <button className={btnClasses} onClick={onButtonClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Card</span>
      <span className={classes.badge}>{numberOfCartItems} </span>
    </button>
  );
};
export default CartButton;
