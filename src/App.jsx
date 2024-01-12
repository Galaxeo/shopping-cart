// TODO: Add cart page
import "./Home";
import "./App.css";
import Home from "./Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ItemPage from "./ItemPage";
import { createContext, useState } from "react";
import Cart from "./Cart";
import { Link } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/shop/:id",
    element: <ItemPage />,
  },
  { path: "/cart", element: <Cart /> },
]);

export const CartContext = createContext([]);

function CartProvider(props) {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {props.children}
    </CartContext.Provider>
  );
}
function App() {
  return (
    <>
      <CartProvider>
        <RouterProvider router={router}></RouterProvider>
      </CartProvider>
    </>
  );
}

export default App;
