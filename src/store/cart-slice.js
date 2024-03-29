import { createSlice } from "@reduxjs/toolkit";
import { mainActions } from "./main-slice";

const initialState = {
   items: [],
   itemsQuantity: 0,
   isCartChanged: false
}

const cartSlice = createSlice({
   name: 'cart',
   initialState: initialState,
   reducers: {
      addItem(state, action) {
         const newItem = action.payload;
         const existingItem = state.items.find((item) => item.id === newItem.id);
         state.itemsQuantity++;
         state.isCartChanged = true;
         if (!existingItem) {
            state.items.push({
               id: newItem.id,
               price: newItem.price,
               quantity: 1,
               totalPrice: newItem.price,
               title: newItem.title
            });
         } else {
            existingItem.quantity = existingItem.quantity + 1;
            existingItem.totalPrice = existingItem.price * existingItem.quantity;
         }

      },
      removeItem(state, action) {
         const id = action.payload;
         const existingItem = state.items.find(item => item.id === id);
         state.itemsQuantity--;
         state.isCartChanged = true;
         if (existingItem.quantity === 1) {
            state.items = state.items.filter(item => item.id !== id)
         }
         else {
            existingItem.quantity--;
            existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
         }
      },
      upDataCart(state, action) {
         state.items = action.payload.items;
         state.itemsQuantity = action.payload.itemsQuantity;
      }
   }
});

export const sendCartData = (cartData) => {
   return async (dispatchAction) => {
      dispatchAction(mainActions.showStatusMessage({
         status: 'pending',
         title: 'Отправка данных',
         message: 'Данные из корзины отправляются'
      })
      );

      const sendDataHttpRequest = async () => {
         const response = await fetch('https://react-course-http-f59d2-default-rtdb.firebaseio.com/cart.json',
            {
               method: 'PUT',
               body: JSON.stringify({ items: cartData.items, itemsQuantity: cartData.itemsQuantity })
            }
         );

         if (!response.ok) throw new Error('Ошибка при отправке данных корзины');
      }

      try {
         await sendDataHttpRequest();
         dispatchAction(mainActions.showStatusMessage({
            status: 'success',
            title: 'Данные отправленны',
            message: 'Отправка данных на сервер завершина'
         })
         );
      } catch (error) {
         dispatchAction(mainActions.showStatusMessage({
            status: 'error',
            title: 'Ошибка запроса',
            message: 'Отправка данных завершилась ошибкой!'
         })
         );
      }
   };
};

export const getCartData = () => {
   return async (dispatchAction) => {
      const getDataHttpRequest = async () => {
         const response = await fetch('https://react-course-http-f59d2-default-rtdb.firebaseio.com/cart.json')

         if (!response.ok) throw new Error('Не возможно извлечь данные');

         const responseData = await response.json();

         return responseData;
      }

      try {
         const cartData = await getDataHttpRequest();
         dispatchAction(cartSlice.actions.upDataCart({
            items: cartData.items || [],
            itemsQuantity: cartData.itemsQuantity
         }))
      } catch (error) {
         dispatchAction(mainActions.showStatusMessage({
            status: 'error',
            title: 'Ошибка запроса',
            message: 'Отправка данных завершилась ошибкой!'
         })
         );
      }
   }
}

export const cartAction = cartSlice.actions;
export default cartSlice;