import ProductItem from "./ProductItem";
import styles from "./Products.module.css";

const Products = () => {
   return (
      <div className={styles.products}>
         <h2>В МАГАЗИНЕ ТОВАРЫ ВЫСОКОГО КАЧЕСТВА</h2>
         <ProductItem></ProductItem>
      </div>
   );
};

export default Products;