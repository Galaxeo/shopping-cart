import { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { CartContext } from "./App";
function ItemPage() {
  const [item, setItem] = useState({});
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => setItem(json));
  }, [id]);
  const handleAddToCart = () => {
    addToCart(item);
    alert("Added to cart!");
  };
  return (
    <>
      <h1>{item.title}</h1>
      <h3>${item.price}</h3>
      <img className="itemPageImg" src={item.image} alt={item.title} />
      <p>{item.description}</p>
      <button onClick={handleAddToCart}>Add To Cart</button>
      <Link to="/" style={{ position: "absolute", top: 0, right: 0 }}>
        <button>Home</button>
      </Link>
    </>
  );
}
export default ItemPage;
