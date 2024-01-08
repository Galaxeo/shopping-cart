import { useState } from "react";
import "./App.css";

function Item({ image, name, price }) {
  return (
    <div className="item">
      <img src={image} alt={name} />
      <h2>{name}</h2>
    </div>
  );
}

export default Item;
