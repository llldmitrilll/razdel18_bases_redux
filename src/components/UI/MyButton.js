import React from "react";
import styles from "./MyButton.module.css";
import { mainActions } from "../../store/main-slice";
import { useDispatch } from "react-redux";

const MyButton = (props) => {
   const dispatchAction = useDispatch();


   const cartVisibilityHandler = () => {
      dispatchAction(mainActions.toggleCartVisibility());
   }

   return (
      <button className={styles.button} onClick={cartVisibilityHandler}>{props.children}</button>
   );
};

export default MyButton;