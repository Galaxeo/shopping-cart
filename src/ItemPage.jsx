import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
function ItemPage() {
  const [item, setItem] = useState({});
  const { id } = useParams();
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => setItem(json));
  }, []);
  return (
    <>
      <h1>{item.title}</h1>
      <img className="itemPageImg" src={item.image} alt={item.title} />
      <p>{item.description}</p>
    </>
  );
}
export default ItemPage;
