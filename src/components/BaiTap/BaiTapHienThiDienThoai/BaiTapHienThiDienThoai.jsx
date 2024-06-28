import React, { useState } from "react";
import DanhSachSanPham from "./DanhSachSanPham";

const BaiTapHienThiDienThoai = () => {
  let arrPhone = [
    {
      maSP: 1,
      tenSP: "VinSmart Live",
      manHinh: "AMOLED, 6.2, Full HD+",
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 5700000,
      hinhAnh: "./public/img/vsphone.jpg",
    },
    {
      maSP: 2,
      tenSP: "Meizu 16Xs",
      manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
      heDieuHanh: "Android 9.0 (Pie); Flyme",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 7600000,
      hinhAnh: "./public/img/meizuphone.jpg",
    },
    {
      maSP: 3,
      tenSP: "Iphone XS Max",
      manHinh: "OLED, 6.5, 1242 x 2688 Pixels",
      heDieuHanh: "iOS 12",
      cameraSau: "Chính 12 MP & Phụ 12 MP",
      cameraTruoc: "7 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 27000000,
      hinhAnh: "./public/img/applephone.jpg",
    },
  ];
  // Thực hiện tạo state
  let [phone, setPhone] = useState();
  let layDuLieuDienThoai = (dienThoai) => {
    setPhone(dienThoai);
  };
  console.log(phone);

  // NV1 : Thực hiện tạo một props dành cho component danhSachSanPham và thực hiện truyền dữ liệu từ mảng arrPhone xuống component DanhSachSanPham
  // NV2 : Thực hiện truy xuất tới dữ liệu được gửi xuống thông qua props từ component DanhSachSanPham và binding dữ liệu lên giao diện gồm hình ảnh, tên sản phẩm và một nút xem chi tiết như hình
  // NV3 : Thực hiện tạo một state, giúp lưu trữ giá trị dành cho sản phẩm điện thoại, state sẽ có giá trị mặc định là phần tử đầu tiên trong mảng arrPhone ==> gợi ý đặt tên state, phone, setPhone
  // NV4 : Thực hiện tạo một hàm giúp xử lí thực hiện setPhone để lấy được sản phẩm người dùng đã click để xem chi tiết ở DanhSachSanPham, ==> truyền hàm xuống component DanhSachSanPham để xử lí trong sự kiện onclick của nút xem chi tiết
  // NV5 : Thực hiện đưa dữ liệu trong state phone lên giao diện
  return (
    <div>
      <h2 className="text-3xl">Bài tập hiển thị và lấy thông tin điện thoại</h2>
      <DanhSachSanPham
        layDuLieuDienThoai={layDuLieuDienThoai}
        arrSanPham={arrPhone}
      />
      {/* nếu như state phone không có dữ liệu thì sẽ không hiển thị layout chi tiết lên  */}
      {phone && (
        <div className="flex">
          {/* image  */}
          <div className="">
            <img src={phone.hinhAnh} alt="" />
          </div>
          {/* content  */}
          <div>
            <h3>Thông số kỹ thuật </h3>
            <p>Màn hình: {phone.manHinh}</p>
            <p>Hệ điều hành: {phone.heDieuHanh}</p>
            <p>Camera trước: {phone.cameraTruoc}</p>
            <p>Camera sau: {phone.cameraSau}</p>
            <p>RAM: {phone.ram}</p>
            <p>ROM: {phone.rom}</p>
          </div>
        </div>
      )}
      {/* // sự khác nhau giữa toán tử && và toán tử điều kiện là ở toán tử điều kiện được sử dụng khi có 2 layout cần hiển thị cho 2 kết quả, còn toán tử && dùng xử lí cho trường hợp chỉ cần 1 kết quả  */}
      {phone ? (
        <div className="flex">
          {/* image  */}
          <div className="">
            <img src={phone.hinhAnh} alt="" />
          </div>
          {/* content  */}
          <div>
            <h3>Thông số kỹ thuật </h3>
            <p>Màn hình: {phone.manHinh}</p>
            <p>Hệ điều hành: {phone.heDieuHanh}</p>
            <p>Camera trước: {phone.cameraTruoc}</p>
            <p>Camera sau: {phone.cameraSau}</p>
            <p>RAM: {phone.ram}</p>
            <p>ROM: {phone.rom}</p>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default BaiTapHienThiDienThoai;
