import { IRegister } from "../../interface/index";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

//To Store in localeStorage
const User: IRegister[] =
  localStorage.getItem("userData") !== null
    ? JSON.parse(localStorage.getItem("userData") as string)
    : [];
const initialState = {
  userInfo: User,
};
//Create Slice
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    addNewUser: (state, action: PayloadAction<IRegister>) => {
      let checkFind = state.userInfo.find(
        (el) => el.email === action.payload.email
      );
      if (!checkFind) {
        state.userInfo.push(action.payload);
      }
      localStorage.setItem("userData", JSON.stringify(state.userInfo));
    },
  },
});
export const { addNewUser } = authSlice.actions;

export default authSlice.reducer;
