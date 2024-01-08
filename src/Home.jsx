import { useState, useEffect } from "react";
import "./App.css";
import Item from "./Item";
import { fetchProducts } from "./fetchProducts";
function Home() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetchProducts().then((products) => setProducts(products));
  });
  return (
    <>
      <h1>Home</h1>
      {/* Grid of 9 different Items*/}
      <div className="item-grid">
        {products.map((product) => (
          <Item
            key={product.id}
            image={product.image}
            name={product.title}
            price={product.price}
          />
        ))}
      </div>
    </>
  );
}
export default Home;
