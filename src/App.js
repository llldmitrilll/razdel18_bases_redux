import Layout from "./components/Layout/Layout";
import Cart from "./components/Cart/Cart";
import Products from "./components/Shop/Products";
import { useDispatch, useSelector } from "react-redux";
import { Fragment, useEffect } from "react";
import StatusBarMessage from "./components/UI/StatusBarMessage";
import { sendCartData, getCartData } from "./store/cart-slice";

let isInitialRunning = true;

function App() {
  const isCartVisible = useSelector((state) => state.main.isCartVisible);
  const cart = useSelector((state) => state.cart);
  const statusMessage = useSelector((state) => state.main.statusMessage);

  const dispatchAction = useDispatch();

  useEffect(() => {
    dispatchAction(getCartData())
  }, [])

  useEffect(() => {
    // const sendCartData = async () => {
    // dispatchAction(mainActions.showStatusMessage({
    //   status: 'pending',
    //   title: 'Отправка данных',
    //   message: 'Данные из корзины отправляются'
    // })
    // );
    // const response = await fetch('https://react-course-http-f59d2-default-rtdb.firebaseio.com/cart.json',
    //   {
    //     method: 'PUT',
    //     body: JSON.stringify(cart)
    //   }
    // );

    // if (!response.ok) throw new Error('Ошибка при отправке данных корзины');

    // dispatchAction(mainActions.showStatusMessage({
    //   status: 'success',
    //   title: 'Данные отправленны',
    //   message: 'Отправка данных на сервер завершина'
    // })
    // );

    if (isInitialRunning) {
      isInitialRunning = false;
      return;
    }

    if (cart.isCartChanged) dispatchAction(sendCartData(cart));

    // sendCartData().catch((e) => {
    // dispatchAction(mainActions.showStatusMessage({
    //   status: 'error',
    //   title: 'Ошибка запроса',
    //   message: 'Отправка данных завершилась ошибкой!'
    // })
    // );
    // });
  }, [cart]);

  return (
    <Fragment>
      {statusMessage &&
        <StatusBarMessage
          status={statusMessage.status}
          title={statusMessage.title}
          message={statusMessage.message}
        />}
      <Layout>
        {isCartVisible && <Cart />}
        <Products />
      </Layout>
    </Fragment>

  );
}

export default App;
