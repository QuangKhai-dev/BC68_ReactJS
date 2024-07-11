import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  sinhVien: {
    hoTen: "Long",
    lop: "FE77",
    tuoi: 25,
  },
  giaoVien: {
    ten: "Lâm Mĩ Dạ",
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // thay đổi tên của giáo viên từ Lâm Mĩ Dạ thành Chế Công Bình
    // tham số state đại diện cho dữ liệu đang lưu trữ trong reducer
    // tham số action thực hiện lưu trữ dữ liệu được gửi lên từ bên phía component
    changeNameTeacher: (state, action) => {
      console.log(current(state));
      console.log(action);
      state.giaoVien.ten = action.payload;
    },
  },
});

export const { changeNameTeacher } = userSlice.actions;
export default userSlice.reducer;
