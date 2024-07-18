import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  banChon: "Xỉu", // "Tài"==> "Xỉu"
  tongSoBanChoi: 0,
  tongSoBanThang: 0,
  xiNgau: {
    xiNgau1: 3,
    xiNgau2: 6,
    xiNgau3: 3,
  },
};

const xiNgauSlice = createSlice({
  name: "xiNgau",
  initialState,
  reducers: {
    thayDoiBanChon: (state, action) => {
      console.log(action);
      state.banChon = action.payload;
    },
    ketQuaNguoiChoi: (state, action) => {
      let xiNgau1 = Math.floor(Math.random() * 6) + 1;
      let xiNgau2 = Math.floor(Math.random() * 6) + 1;
      let xiNgau3 = Math.floor(Math.random() * 6) + 1;
      state.xiNgau = { ...state.xiNgau, xiNgau1, xiNgau2, xiNgau3 };
      state.tongSoBanChoi += 1;
      let ketQua = xiNgau1 + xiNgau2 + xiNgau3 >= 11 ? "Tài" : "Xỉu";
      if (ketQua == state.banChon) {
        state.tongSoBanThang += 1;
      }
    },
  },
});

export const { thayDoiBanChon, ketQuaNguoiChoi } = xiNgauSlice.actions;

export default xiNgauSlice.reducer;
