import { useReducer } from 'react';
import CartContext from './cart-context';

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

function cartReducer(state, action) {
  if (action.type === 'ADD-ITEM') {
    const updatedTotalAmount =
      state.totalAmount + action.item.amount * action.item.price;

    const existingCartItemIndex = state.items.findIndex(
      item => item.id === action.item.id
    );

    const exisitingCartItem = state.items[existingCartItemIndex];

    let updatedCartItems;

    if (exisitingCartItem) {
      const updatedCartItem = { ...exisitingCartItem };
      updatedCartItem.amount = exisitingCartItem.amount + action.item.amount;
      updatedCartItems = [...state.items];
      updatedCartItems[existingCartItemIndex] = updatedCartItem;
    } else {
      updatedCartItems = state.items.concat(action.item);
    }

    return { items: updatedCartItems, totalAmount: updatedTotalAmount };
  }
  return defaultCartState;
}

function CartProvider(props) {
  const [cartState, dispatchCartActions] = useReducer(
    cartReducer,
    defaultCartState
  );

  function addItemToCartHandler(item) {
    dispatchCartActions({ type: 'ADD-ITEM', item: item });
  }

  function removeItemFromCartHandler(id) {
    dispatchCartActions({ type: 'REMOVE-ITEM', id: id });
  }

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
}

export default CartProvider;
