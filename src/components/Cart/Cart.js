import CartItem from "./CartItem";
import styles from "./Cart.module.css"
import { useSelector } from "react-redux";

const Cart = () => {
   const items = useSelector(state => state.cart.items)
   return (
      <div className={styles.cart}>
         <h2 className={styles.cartTitle}>Мои покупки</h2>
         <ul>
            {items.map(item => (
               <CartItem
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  price={item.price}
                  quantity={item.quantity}
                  totalPrice={item.totalPrice}
               />
            ))}
         </ul>
      </div>

   );
};

export default Cart;