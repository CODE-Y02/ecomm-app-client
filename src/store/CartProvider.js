import { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    let existingItemIndex = cartItems.findIndex((itm) => itm.id === item.id);
    let updatedItems = [...cartItems];

    if (existingItemIndex >= 0) {
      //if item is found then we will update QTY
      updatedItems[existingItemIndex].quantity += item.quantity;
    } else {
      updatedItems.push(item);
    }

    setCartItems(updatedItems);
  };

  const removeFromCart = (item) => {
    const updatedItems = [];

    for (let i = 0; i < cartItems.length; i++) {
      if (cartItems[i].id === item.id && cartItems[i].quantity > 1) {
        updatedItems.push({
          ...cartItems[i],
          quantity: cartItems[i].quantity - 1,
        });
      } else if (cartItems[i].id !== item.id) updatedItems.push(cartItems[i]);
    }

    setCartItems(updatedItems);
  };

  const cartContext = {
    items: cartItems,
    addItem: addToCart,
    removeItem: removeFromCart,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
