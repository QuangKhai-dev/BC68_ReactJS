import React from "react";

const DemoShoe = ({ item, number, capNhatId }) => {
  number += 20;
  return (
    <div className="item">
      {/* hình ảnh  */}
      <img src={item.image} alt="" />
      {/* tên sản phẩm  */}
      <h3>{item.name}</h3>
      <p>{item.price}</p>
      <p>{item.quantity}</p>
      <button
        onClick={() => {
          capNhatId(item.id);
        }}
        className="bg-black text-white py-2 px-5 rounded-md"
      >
        Xem chi tiết
      </button>
      <p>{number}</p>
    </div>
  );
};

export default DemoShoe;
