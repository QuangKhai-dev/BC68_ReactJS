import React from "react";
import doremon from "./../../assets/doremon.png";
const DemoOnclick = () => {
  let hienThiCauChao = (ten) => {
    console.log(`Hello Cô ${ten}`);
  };

  return (
    <div>
      <h2>Sự kiện onclick trên React</h2>
      <button
        // onClick={() => {
        //   console.log("Hello BC68");
        // }}
        // onClick={hienThiCauChao("Thắm")}
        onClick={() => {
          hienThiCauChao("Thắm");
        }}
        className="bg-blue-500 py-2 px-5 text-white hover:bg-orange-500 hover:text-blue-500 duration-300"
      >
        Nhấn vào em đi
      </button>
      <div>
        <label
          htmlFor="first_name"
          className="block mb-2 text-sm font-medium text-gray-900 "
        >
          Nhập tên của bạn
        </label>
        <input
          type="text"
          onChange={(e) => {
            console.log(e.target.value);
          }}
          id="first_name"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          placeholder="Nhập tên vào đây"
        />
      </div>
      {/* cách 1 sử dụng hình ảnh trên web  */}
      <img src="./public/doremon.png" alt="" />
      <img src={doremon} alt="" />
    </div>
  );
};

export default DemoOnclick;
