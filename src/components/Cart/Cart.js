import CartItem from "./CartItem";
import styles from "./Cart.module.css"

const Cart = () => {
   return (
      <div className={styles.cart}>
         <h2 className={styles.cartTitle}>Мои покупки</h2>
         <CartItem></CartItem>
      </div>

   );
};

export default Cart;