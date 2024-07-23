import React, { useCallback, useState } from "react";

const DemoUseCallBack = () => {
  const [hoTen, setHoTen] = useState("Cường");
  let hienThiThongTinNguoiDung = (hoTen, tuoi, gioiTinh) => {
    console.log(`Tôi tên là ${hoTen}, số tuổi ${tuoi}, giới tính ${gioiTinh}`);
  };

  let thongTinNguoiDung = useCallback(() => {
    hienThiThongTinNguoiDung(hoTen, 25, "Nam");
  }, [hoTen]);

  thongTinNguoiDung();

  return (
    <div>
      <input
        type="text"
        placeholder="vui lòng nhập họ tên"
        onChange={(event) => {
          setHoTen(event.target.value);
        }}
      />
    </div>
  );
};

export default DemoUseCallBack;
