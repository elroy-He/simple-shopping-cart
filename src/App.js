import { useState, useRef, useEffect } from "react";
import ShoppingList from "./components/shopping-list/shopping-list.component";
import ShoppingCart from "./components/shopping-cart/shopping-cart.component";
import SearchBar from "./components/searchbar/searchbar.component";
import Input from "./components/input/input.component";
import "./App.css";
import prods from "./products";
const App = () => {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState(prods);
  const [searchField, setSearchField] = useState("");
  const [searchItems, setSearchItems] = useState(products);
  const inputRefText = useRef(null);
  const inputRefNumb = useRef(null);
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

  const onSubmit = () => {
    const item = {
      name: inputRefText.current.value,
      price: inputRefNumb.current.value,
    };

    setProducts((prevState) => [...prevState, item]);
  };

  const onSearch = (event) => {
    const searchField = event.target.value;
    setSearchField(searchField);
    console.log(searchField);
  };

  useEffect(() => {
    const searchedItem = products.filter((item) => {
      return item.name
        .toLowerCase()
        .includes(searchField.toLocaleLowerCase());
    });
    setSearchItems(searchedItem);
  }, [searchField]);
  if (searchField === "") {
    return (
      <div className="display">
        <ShoppingList onClick={onChange} prods={products} />
        <ShoppingCart onClick={onDelete} cart={cart} />
        <Input
          onSubmit={onSubmit}
          inputRefText={inputRefText}
          inputRefNumb={inputRefNumb}
        />
        <SearchBar onSearch={onSearch} />
      </div>
    );
  } else {
    return (
      <div className="display">
        <ShoppingList onClick={onChange} prods={searchItems} />
        <ShoppingCart onClick={onDelete} cart={cart} />
        <Input
          onSubmit={onSubmit}
          inputRefText={inputRefText}
          inputRefNumb={inputRefNumb}
        />
        <SearchBar onSearch={onSearch} />
      </div>
    );
  }
};

export default App;
