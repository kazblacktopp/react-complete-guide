import Modal from '../UI/Modal';
import classes from './Cart.module.css';

function Cart(props) {
  const cartItems = [{ id: 'c1', name: 'Sushi', amount: 2, price: 19.98 }].map(
    item => <li key={item.id}>{item.name}</li>
  );

  return (
    <Modal onClose={props.onCloseCart}>
      <ul className={classes['cart-items']}>{cartItems}</ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>39.62</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onCloseCart}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
}

export default Cart;
