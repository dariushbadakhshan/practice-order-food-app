import { FC } from "react";

import classes from "./cart-item.module.scss";

type props = {
  title: string;
  price: number;
  amount: number;
  onAdd: () => void;
  onRemove: () => void;
};

const CartItem: FC<props> = ({ title, price, amount, onRemove, onAdd }) => {
  return (
    <li className={classes["cart-item"]}>
      <div>
        <h2>{title} </h2>
        <div className={classes.summary}>
          <span className={classes.price}>${price}</span>
          <span className={classes.amount}>x {amount} </span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={onRemove}>-</button>
        <button onClick={onAdd}>+</button>
      </div>
    </li>
  );
};
export default CartItem;
