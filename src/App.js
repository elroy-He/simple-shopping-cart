import { useState } from "react";
import prods from "./products";
import "./App.css";
const App = () => {
  const [cart, setCart] = useState([]);
  /**
   * This is the onClickChange method used when user
   * clicks on the products and adds them to the list
   * @param event
   */
  const onChange = (event) => {
    setCart((prevState) => [...prevState, event.target.textContent]);
  };

  /**
   * This is the onDelete method used when user clicks
   * on items in the cart and removes them from the cart
   * @param event
   */
  const onDelete = (event) => {
    console.log(event.target.id);
    setCart((cart) =>
      cart.filter((_, i) => i !== Number(event.target.id))
    );
  };

  const cartList = cart.map((item, index) => {
    return (
      <div key={index} id={index} onClick={onDelete}>
        {item}
      </div>
    );
  });
  const productList = prods.map((prod, index) => {
    return index % 2 === 0 ? (
      <div
        key={index}
        className="prod-item"
        style={{ color: "red" }}
        onClick={onChange}
      >
        {prod.name} {prod.price}
      </div>
    ) : (
      <div key={index} className="prod-item" onClick={onChange}>
        {prod.name} {prod.price}
      </div>
    );
  });
  return (
    <div className="display">
      <div className="left"> {productList}</div>
      <div className="right"> {cartList}</div>
    </div>
  );
};

export default App;
