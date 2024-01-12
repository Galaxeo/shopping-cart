import "./Home";
import "./App.css";
import Home from "./Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ItemPage from "./ItemPage";
import { createContext, useState } from "react";

const router = createBrowserRouter([
  // consider using context
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/shop/:id",
    element: <ItemPage />,
  },
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
        <RouterProvider router={router} />
      </CartProvider>
    </>
  );
}

export default App;
