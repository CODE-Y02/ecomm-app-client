import { useState } from "react";
import "./App.css";
import Cart from "./components/Cart/Cart";
import Header from "./components/Header/Header";

function App() {
  const [showCart, setShowCart] = useState(false);

  const hideCartHandler = () => {
    setShowCart(false);
  };

  const showCartHandler = () => {
    setShowCart(true);
  };
  return (
    <div className="app">
      <Header onCartShow={showCartHandler} />
      <Cart show={showCart} onHide={hideCartHandler} />
    </div>
  );
}

export default App;
