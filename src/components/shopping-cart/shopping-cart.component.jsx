const ShoppingCart = ({ onClick, cart }) => {
  const cartList = cart.map((item, index) => {
    return (
      <div key={index} id={index} onClick={onClick}>
        {item}
      </div>
    );
  });
  return <div className="right"> {cartList}</div>;
};

export default ShoppingCart;
