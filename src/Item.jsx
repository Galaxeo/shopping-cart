import "./App.css";

function Item({ image, name }) {
  return (
    <div className="item">
      <img className="itemImg" src={image} alt={name} />
      <h2>{name}</h2>
    </div>
  );
}

export default Item;
