import { useState } from "react";
import "./App.css";
import Cart from "./components/Cart/Cart";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Section from "./components/Section/Section";
import ProductLists from "./components/Shop/ProductLists";

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
      <Cart animation show={showCart} onHide={hideCartHandler} />

      <main>
        <Section title={"merch"}>
          <ProductLists />
        </Section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
