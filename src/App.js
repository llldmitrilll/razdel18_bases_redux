import Layout from "./components/Layout/Layout";
import Cart from "./components/Cart/Cart";
import Products from "./components/Shop/Products";
import { useSelector } from "react-redux";
import { Fragment, useEffect } from "react";

function App() {
  const isCartVisible = useSelector((state) => state.main.isCartVisible);
  const cart = useSelector((state) => state.cart);

  return (
    <Fragment>
      <Layout>
        {isCartVisible && <Cart />}
        <Products />
      </Layout>
    </Fragment>

  );
}

export default App;
