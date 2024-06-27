import React, { useState } from "react";

const BaiTapHienThiXe = () => {
  let arrButton = ["Black", "Steel", "Silver", "Red"];
  let arrButton2 = [
    {
      name: "Black",
      icon: "./public/CarBasic/icons/icon-black.jpg",
      duongDanHinhAnh: "./public/CarBasic/products/black-car.jpg",
    },
    {
      name: "Steel",
      icon: "./public/CarBasic/icons/icon-steel.jpg",
      duongDanHinhAnh: "./public/CarBasic/products/steel-car.jpg",
    },
    {
      name: "Silver",
      icon: "./public/CarBasic/icons/icon-silver.jpg",
      duongDanHinhAnh: "./public/CarBasic/products/silver-car.jpg",
    },
    {
      name: "Red",
      icon: "./public/CarBasic/icons/icon-red.jpg",
      duongDanHinhAnh: "./public/CarBasic/products/red-car.jpg",
    },
  ];
  const [urlXeHoi, setUrlXeHoi] = useState(
    "./public/CarBasic/products/black-car.jpg"
  );
  return (
    <div className="container">
      <h2>Bài tập thay đổi xe</h2>
      <div className="flex space-x-5">
        <div className="image w-8/12">
          <img src={urlXeHoi} alt="" />
        </div>
        <div className="w-4/12 space-y-5">
          {arrButton2.map((item, index) => {
            return (
              <button
                key={index}
                className="flex item-center  py-2 px-5 rounded w-52 border-blue-500 border-2"
                onClick={() => {
                  setUrlXeHoi(item.duongDanHinhAnh);
                }}
              >
                <img width={30} src={item.icon} alt="" />
                <span className="ml-2 text-xl">{item.name}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BaiTapHienThiXe;
