import { FC, useContext } from "react";

import CartContext from "../store/cart-context";

import AddItem from "./add-item.menu";

import MenuContent from "./item.content.menu";

type props = {
  item: {
    id: string;
    name: string;
    description: string;
    price: number;
    img: string;
  };
};

const MenuItem: FC<props> = ({ item }) => {
  const cartCtx = useContext(CartContext);

  const addToCartHandler = (amount: number) => {
    cartCtx.addItem({
      id: item.id,
      name: item.name,
      price: item.price,
      amount: amount,
    });
  };

  return (
    <div>
      <MenuContent
        title={item.name}
        description={item.description}
        price={item.price}
        url={item.img}
      />
      <AddItem onAddToCard={addToCartHandler} />
    </div>
  );
};
export default MenuItem;
