import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import xeHoiSlice from "./xeHoiSlice";

export const store = configureStore({
  reducer: {
    hoTen: () => "Quang Khai",
    userSlice,
    xeHoiSlice,
  },
});

// Yêu cầu : Thực hiện tạo một reducer mới giúp lưu trữ các dữ liệu về xe hơi, ở reducer sẽ có một giá trị mặc định được lưu trữ là thông tin xe honda CX5, giá tiền 25000, màu xe sẽ là màu đỏ

// Yêu cầu: THực hiện lấy dữ liệu từ reducer xeHoi và hiển thị lên giao diện thông qua các thẻ jsx được cung cấp
