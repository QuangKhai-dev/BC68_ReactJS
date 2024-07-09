import React from "react";
import { useNavigate } from "react-router-dom";
const NotFound = () => {
  // useNavigate
  let navigate = useNavigate();
  return (
    <div className="h-screen bg-orange-500 flex items-center justify-center flex-col text-white">
      <h2 className="font-bold text-3xl">
        Trang này chưa tồn tại, vui lòng truy cập lại sau
      </h2>
      <button
        onClick={() => {
          // navigate nhận vào giá trị là đường dẫn muốn người dùng truy cập tới
          navigate("/");
        }}
        className="bg-black px-5 py-2 text-white"
      >
        Quay về trang chủ
      </button>
    </div>
  );
};

export default NotFound;
