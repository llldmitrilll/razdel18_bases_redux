import styles from "./MainHeader.module.css";
import MyButton from "../UI/MyButton";
import { useSelector } from "react-redux";

const MainHeader = () => {
   const itemsQuantity = useSelector(state => state.cart.itemsQuantity);

   return (
      <header className={styles.header}>
         <h1>Redux</h1>
         <nav>
            <ul>
               <li>
                  <MyButton>
                     <span>Корзина</span>
                     <span>{itemsQuantity}</span>
                  </MyButton>
               </li>
            </ul>
         </nav>
      </header>
   );
};

export default MainHeader;