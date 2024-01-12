import { useState, useEffect, useContext } from "react";
import { CartContext } from "./App";
import { Link } from "react-router-dom";
function Cart() {
  const { cart } = useContext(CartContext);
  console.log(cart);
  // if the cart is empty, display a message saying so
  if (cart.length === 0) {
    return (
      <>
        <h1>Cart</h1>
        <p>Your cart is empty!</p>
        <Link to="/" style={{ position: "absolute", top: 0, right: 0 }}>
          <button>Home</button>
        </Link>
      </>
    );
  }
  return (
    <>
      <h1>Cart</h1>
      {cart.map((item, index) => (
        <p key={index}>{item.title}</p>
      ))}
      <Link to="/" style={{ position: "absolute", top: 0, right: 0 }}>
        <button>Home</button>
      </Link>
    </>
  );
}
export default Cart;
