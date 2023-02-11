import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Cart from "./components/Cart/Cart";

import About from "./pages/About";
import Home from "./pages/Home";
import RootLayout from "./pages/Root";
import Shop from "./pages/Shop";

function App() {
  const [showCart, setShowCart] = useState(false);

  const hideCartHandler = () => {
    setShowCart(false);
  };

  const showCartHandler = () => {
    setShowCart(true);
  };

  //  router
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout onCartShow={showCartHandler} />,
      children: [
        { path: "/shop", element: <Shop /> },
        { path: "/", element: <Home /> },
        { path: "/about", element: <About /> },
      ],
    },
  ]);

  // <div className="app">
  //   <Header onCartShow={showCartHandler} />
  //  <Cart animation show={showCart} onHide={hideCartHandler} scrollable />

  //   <Footer />
  // </div>;
  return (
    <>
      <Cart animation show={showCart} onHide={hideCartHandler} scrollable />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
