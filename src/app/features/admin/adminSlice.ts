import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../../interface";

//To Store in localeStorage
const Items: IProduct[] =
  localStorage.getItem("adminProduct") !== null
    ? JSON.parse(localStorage.getItem("adminProduct") as string)
    : [];
const initialState = {
  adminProducts: Items,
};
//Create Slice
export const adminSlice = createSlice({
  name: "adminP",
  initialState,
  reducers: {
    addNewProduct: (state, action: PayloadAction<IProduct>) => {
      state.adminProducts.push(action.payload);
      localStorage.setItem("adminProduct", JSON.stringify(state.adminProducts));
    },
  },
});
export const { addNewProduct } = adminSlice.actions;

export default adminSlice.reducer;
