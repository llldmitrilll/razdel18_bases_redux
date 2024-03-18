import styles from "./MainHeader.module.css";
import MyButton from "../UI/MyButton";

const MainHeader = () => {
   const amount = 5;
   return (
      <header className={styles.header}>
         <h1>Redux</h1>
         <nav>
            <ul>
               <li>
                  <MyButton>
                     <span>Корзина</span>
                     <span>{amount}</span>
                  </MyButton>
               </li>
            </ul>
         </nav>
      </header>
   );
};

export default MainHeader;