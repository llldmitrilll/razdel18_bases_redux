import ProductItem from "./ProductItem";
import styles from "./Products.module.css";

const DUMMY_ITEMS = [
   {
      id: '1',
      price: 7,
      title: 'Супер товар 1',
      description: ' Благодаря своему высокому качеству, этот Супер-Товар 1 прослужит вам очень долго.'
   },
   {
      id: '2',
      price: 5,
      title: 'Супер товар 2',
      description: ' Благодаря своему высокому качеству, этот Супер-Товар 2 прослужит вам очень долго.'
   },
   {
      id: '3',
      price: 10,
      title: 'Супер товар 3',
      description: ' Благодаря своему высокому качеству, этот Супер-Товар 3 прослужит вам очень долго.'
   }
]

const Products = () => {
   return (
      <section className={styles.products}>
         <h2 className={styles.productsTitle}>В МАГАЗИНЕ ТОВАРЫ ВЫСОКОГО КАЧЕСТВА</h2>
         <ul>{
            DUMMY_ITEMS.map(item => (
               <ProductItem
                  key={item.id}
                  id={item.id}
                  price={item.price}
                  title={item.title}
                  description={item.description}
               />
            ))
         }</ul>
      </section>
   );
};

export default Products;