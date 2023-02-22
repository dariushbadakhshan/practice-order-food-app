import Header from "./components/Header/header";

import Menu from "./components/Menu/menu";

import { useState } from "react";

import CartModal from "./components/cart/cart-modal";

import CartProvider from "./components/store/cart-context.provider";

import classes from "./App.module.scss";

function App() {
  const [cartIsShown, setCartIsShown] = useState<boolean>(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <div className={classes.App}>
      <CartProvider>
        {cartIsShown && <CartModal onClose={hideCartHandler} />}
        <Header onShowCart={showCartHandler} />
        <Menu />
      </CartProvider>
    </div>
  );
}

export default App;
