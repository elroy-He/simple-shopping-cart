import { useState } from "react";
import ShoppingList from "./components/shopping-list/shopping-list.component";
import ShoppingCart from "./components/shopping-cart/shopping-cart.component";
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
    console.log(event.target);
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

  return (
    <div className="display">
      <ShoppingList onClick={onChange} />
      <ShoppingCart onClick={onDelete} cart={cart} />
    </div>
  );
};

export default App;
