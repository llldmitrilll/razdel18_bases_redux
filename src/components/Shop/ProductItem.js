import { useDispatch } from "react-redux";
import { cartAction } from "../../store/cart-slice";
import styles from "./ProductItem.module.css"

const ProductItem = ({ id, title, price, description }) => {
   const dispatchAction = useDispatch();

   const addItemHandler = () => {
      dispatchAction(
         cartAction.addItem({
            id,
            title,
            price
         })
      )
   }

   return (
      <li className={styles.product}>
         <div className={styles.productRow}>
            <h3 className={styles.productTitle}>{title}</h3>
            <span>${price.toFixed(2)}</span>
         </div>
         <div className={styles.productText}>
            {description}
         </div>
         <button onClick={addItemHandler}>Добавить в корзину</button>
      </li>
   );
};

export default ProductItem;