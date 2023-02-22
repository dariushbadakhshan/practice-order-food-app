import { FC, useContext } from "react";

import Modal from "../../UI/modal";

import CartContext from "../store/cart-context";

import CartItem from "./cart-item";

import classes from "./cart-modal.module.scss";

type props = {
  onClose: () => void;
};

const CartModal: FC<props> = ({ onClose }) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

  const hasItems = cartCtx.items.length > 0;

  const cartItemAddHandler = (item: {
    id: string;
    name: string;
    price: number;
    amount: number;
  }) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartItemRemoveHandler = (id: string) => {
    cartCtx.removeItem(id);
  };

  const cartItems = cartCtx.items.map((item) => (
    <CartItem
      key={item.id}
      title={item.name}
      price={item.price}
      amount={item.amount}
      onAdd={cartItemAddHandler.bind(null, item)}
      onRemove={cartItemRemoveHandler.bind(null, item.id)}
    />
  ));

  return (
    <Modal onClose={onClose}>
      <ul className={classes["cart-items"]}>{cartItems}</ul>
      <hr />
      <div className={classes.total}>
        <h2>Total Amount</h2>
        {totalAmount}
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={onClose}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};
export default CartModal;
