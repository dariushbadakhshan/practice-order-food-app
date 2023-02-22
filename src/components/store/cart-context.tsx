import { createContext } from "react";

type cartcontext = {
  items: {
    id: string;
    name: string;
    price: number;
    amount: number;
  }[];
  totalAmount: number;
  addItem: (item: {
    id: string;
    name: string;
    price: number;
    amount: number;
  }) => void;
  removeItem: (id: string) => void;
};

const CartContext = createContext<cartcontext>({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});

export default CartContext;
