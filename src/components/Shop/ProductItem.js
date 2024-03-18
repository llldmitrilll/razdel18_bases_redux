import MyButton from "../UI/MyButton";
import styles from "./ProductItem.module.css"

const ProductItem = () => {
   return (
      <li className={styles.product}>
         <div className={styles.productRow}>
            <h3 className={styles.productTitle}>Супер-товар 1</h3>
            <span>$7.00</span>
         </div>
         <div className={styles.productText}>
            Благодаря своему высокому качеству, этот Супер-Товар 1 прослужит вам очень долго.
         </div>
         <MyButton>Добавить в корзину</MyButton>
      </li>
   );
};

export default ProductItem;