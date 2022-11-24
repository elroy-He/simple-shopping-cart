import prods from "../../products";

const ShoppingList = ({ onClick }) => {
  const productList = prods.map((prod, index) => {
    return index % 2 === 0 ? (
      <div
        key={index}
        className="prod-item"
        style={{ color: "red" }}
        onClick={onClick}
      >
        {prod.name} {prod.price}
      </div>
    ) : (
      <div key={index} className="prod-item" onClick={onClick}>
        {prod.name} {prod.price}
      </div>
    );
  });
  return <div className="left">{productList}</div>;
};

export default ShoppingList;
