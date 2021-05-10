import classes from './Cart.module.css';

const Cart = (props) => {
  const cartItems = (
    <ul className={classes['cart-items']}>
      {[{ id: 'c1', name: 'Sushi', amount: 2, price: 12.99 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <div>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>56.89</span>
      </div>
      <div className={classes.actions}>
        <span className={classes['button--alt']}>Close</span>
        <span className={classes.button}>Order</span>
      </div>
    </div>
  );
};

export default Cart;
