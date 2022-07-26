import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import Modal from '../UI/Modal';
import CartItem from './CartItem';
import classes from './Cart.module.css';

function Cart(props) {
  const cartCtx = useContext(CartContext);
  const cartHasItems = cartCtx.items.length > 0;

  function cartRemoveItemHandler(id) {
    cartCtx.removeItem(id);
  }

  function cartAddItetmHandler(item) {
    cartCtx.addItem(item);
  }

  const cartItems = cartCtx.items.map(item => (
    <CartItem
      key={item.id}
      name={item.name}
      price={item.price}
      amount={item.amount}
      onRemove={cartRemoveItemHandler.bind(null, item.id)}
      onAdd={cartAddItetmHandler.bind(null, item)}
    />
  ));

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

  return (
    <Modal onClose={props.onCloseCart}>
      <ul className={classes['cart-items']}>{cartItems}</ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onCloseCart}>
          Close
        </button>
        {cartHasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
}

export default Cart;
