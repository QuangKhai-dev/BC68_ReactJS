import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  xeHoi: {
    ten: "Honda CX5",
    giaTien: 25000,
    mauXe: "Đỏ",
  },
  arrShoes: [],
};
const xeHoiSlice = createSlice({
  name: "xeHoi",
  initialState,
  reducers: {
    updateArrShoes: (state, action) => {
      console.log(action);
      state.arrShoes = action.payload;
    },
  },
});

export const { updateArrShoes } = xeHoiSlice.actions;
export default xeHoiSlice.reducer;
