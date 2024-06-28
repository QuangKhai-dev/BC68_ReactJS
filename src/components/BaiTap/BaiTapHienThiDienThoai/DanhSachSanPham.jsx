import React from "react";

const DanhSachSanPham = (props) => {
  console.log(props);
  return (
    <div className="grid grid-cols-3">
      {props.arrSanPham.map((item, index) => {
        return (
          <div>
            <img className="w-full" src={item.hinhAnh} alt="" />
            <h3 className="text-xl font-bold">{item.tenSP}</h3>
            <button
              onClick={() => {
                props.layDuLieuDienThoai(item);
              }}
              className="bg-green-500 text-white py-2 px-5 rounded-md"
            >
              Xem chi tiết
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default DanhSachSanPham;
