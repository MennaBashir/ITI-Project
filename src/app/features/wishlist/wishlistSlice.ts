import { IProduct } from "./../../interface/index";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

//To Store in localeStorage
const Items: IProduct[] =
  localStorage.getItem("wishData") !== null
    ? JSON.parse(localStorage.getItem("wishData") as string)
    : [];
const initialState = {
  wishlistItem: Items,
};
//Create Slice
export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addItemToWishlist: (state, actionPayload: PayloadAction<IProduct>) => {
      let findItem = state.wishlistItem.find(
        (el) => el.id === actionPayload.payload.id
      );
      if (!findItem) {
        state.wishlistItem.push(actionPayload.payload);
      }
      localStorage.setItem("wishData", JSON.stringify(state.wishlistItem));
    },
    removeItemFromWishlist: (state, action: PayloadAction<IProduct>) => {
      let newWishlist = state.wishlistItem.filter((item) => {
        return item.id !== action.payload.id;
      });
      state.wishlistItem = newWishlist;
      localStorage.setItem("wishData", JSON.stringify(newWishlist));
    },
  },
});
export const { addItemToWishlist, removeItemFromWishlist } =
  wishlistSlice.actions;

export default wishlistSlice.reducer;
