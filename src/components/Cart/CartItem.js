import MyButton from "../UI/MyButton";
import styles from "./CartItem.module.css";

const CartItem = () => {
   return (
      <li className={styles.article}>
         <article className={styles.articleElement}>
            <div className={styles.articleRow}>
               <h3>Супер товар</h3>
               <span>$21.00</span>
            </div>
            <div className={styles.articleRow}>
               <div>
                  x<span>3</span>
               </div>

               <div className={styles.dubelButton}>
                  <MyButton>-</MyButton>
                  <MyButton>+</MyButton>
               </div>
            </div>

         </article>
      </li>
   );
};

export default CartItem;