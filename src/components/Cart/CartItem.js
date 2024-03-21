import { Fragment } from "react";
import { useDispatch } from "react-redux";
import { cartAction } from "../../store/cart-slice";
import styles from "./CartItem.module.css";

const CartItem = ({ id, title, price, quantity, totalPrice }) => {
   const dispatchAction = useDispatch();

   const removeProductHandler = () => {
      dispatchAction(cartAction.removeItem(id))
   };

   const addProductHandler = () => {
      dispatchAction(
         cartAction.addItem({ id }))
   }

   return (
      <Fragment>
         <li className={styles.article}>
            <article className={styles.articleElement}>
               <div className={styles.articleRow}>
                  <h3>{title}</h3>
                  <span>{totalPrice}руб ({price}руб/1шт)</span>
               </div>
               <div className={styles.articleRow}>
                  <div>
                     x<span>{quantity}</span>
                  </div>

                  <div className={styles.dubelButton}>
                     <button onClick={removeProductHandler}>-</button>
                     <button onClick={addProductHandler}>+</button>
                  </div>
               </div>
            </article>
         </li>

         {/* {!quantity && <p className={styles.articleText}>Ваша корзина пуста, добавьте товар.</p>} */}
      </Fragment>

   );
};

export default CartItem;