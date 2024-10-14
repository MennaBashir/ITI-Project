import { IProduct } from "./../../interface/index";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

//To Store in localeStorage
const Items: IProduct[] =
  localStorage.getItem("data") !== null
    ? JSON.parse(localStorage.getItem("data") as string)
    : [];
const initialState = {
  cartItem: Items,
};
//Create Slice
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, actionPayload: PayloadAction<IProduct>) => {
      let findItem = state.cartItem.find(
        (el) => el.id === actionPayload.payload.id
      );
      if (findItem) {
        findItem.quantity = actionPayload.payload.quantity;
      } else {
        state.cartItem.push(actionPayload.payload);
      }
      localStorage.setItem("data", JSON.stringify(state.cartItem));
    },
    removeItemFromCart: (state, action: PayloadAction<IProduct>) => {
      let newProducts = state.cartItem.filter((item) => {
        return item.id !== action.payload.id;
      });
      state.cartItem = newProducts;
      localStorage.setItem("data", JSON.stringify(newProducts));
    },
  },
});
export const { addItemToCart, removeItemFromCart } = cartSlice.actions;

export default cartSlice.reducer;
