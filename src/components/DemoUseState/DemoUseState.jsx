import React, { useState } from "react";

const DemoUseState = () => {
  // thực hiện tăng giảm số
  const [state, setState] = useState(0); // khi sử dụng useState và không truyền giá trị mặc định, thì state sẽ có giá trị undefined
  // thực hiện hiển thị thông tin người dùng
  const [hoTen, setHoTen] = useState("");
  let number = 0;
  return (
    <div>
      <h2>Bài tập cập nhật giá trị cho state</h2>
      <button
        // onClick={() => {
        //   number += 1;
        //   console.log(number);
        // }}
        onClick={() => {
          setState(state + 1);
        }}
        className="bg-black text-white py-2 px-5 rounded"
      >
        Nhấn vào để tăng
      </button>
      <button
        onClick={() => {
          number -= 1;
        }}
        className="bg-black text-white py-2 px-5 rounded"
      >
        Nhấn vào để giảm
      </button>
      <p>Số tạo từ biến {number}</p>
      <p>{state}</p>{" "}
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-900 ">
          Nhập tên của bạn
        </label>
        <input
          type="text"
          onChange={(e) => {
            setHoTen(e.target.value);
          }}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          placeholder="Nhập tên vào đây"
        />
      </div>
      <p>{hoTen}</p>
    </div>
  );
};

export default DemoUseState;
