import CartContext from './cart-context';

function CartProvider(props) {
  function addToCartHandler(item) {}

  function removeFromCartHandler(id) {}

  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: addToCartHandler,
    removeItem: removeFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
}

export default CartProvider;
