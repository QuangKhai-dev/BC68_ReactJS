import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeNameTeacher } from "../../redux/userSlice";
const DemoRedux = () => {
  // tham số state đóng vai trò là đại diện cho reducer ở trong store của redux
  const { sinhVien, giaoVien } = useSelector((state) => state.userSlice);
  const { xeHoi } = useSelector((state) => state.xeHoiSlice);
  // console.log(sinhVien);
  // console.log(giaoVien);
  console.log(xeHoi);

  // khởi tạo một biến dispatch giúp gửi một tín hiệu lên reducer
  const dispatch = useDispatch();

  return (
    <div className="container">
      <h2 className="text-2xl font-bold">
        Thay đổi dữ liệu của state trên store redux
      </h2>
      <p>{giaoVien.ten}</p>

      <button
        onClick={() => {
          dispatch(changeNameTeacher("Chế Công Bình"));
        }}
        className="bg-black text-white py-2 px-5 rounded-lg"
      >
        Thay đổi tên người dùng
      </button>
    </div>
  );
};

export default DemoRedux;
