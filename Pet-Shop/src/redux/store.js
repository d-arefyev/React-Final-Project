import { configureStore } from "@reduxjs/toolkit";
import { modalSlice } from "./modalSlice";
import { cartSlice } from "./сartlSlice";

const store = configureStore({
  reducer: {
    modal: modalSlice.reducer,
    cart: cartSlice.reducer,
  },
  devTools: true,
});

export default store;
