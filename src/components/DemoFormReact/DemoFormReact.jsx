import React, { useState } from "react";
import { DatePicker, Space } from "antd";
import { useFormik } from "formik";
import TableNhanVien from "./TableNhanVien";
const DemoFormReact = () => {
  const [arrNhanVien, setArrNhanVien] = useState([]);
  // Quản lí nhân viên : msnv, tên nhân viên, email, số điện thoại, giới tính,ngày sinh, địa chỉ
  const {
    handleChange,
    handleSubmit,
    values,
    setFieldValue,
    resetForm,
    setValues,
    handleReset,
  } = useFormik({
    // đóng vai trò lưu trữ dữ liệu của các thẻ input trong form
    // initialValues sẽ chứa một object, trong object đó sẽ có các thuộc tính có tên trùng với các thuộc tính name của input trong form
    initialValues: {
      msnv: "FE1231",
      tenNhanVien: "",
      email: "",
      soDienThoai: "",
      gioiTinh: "",
      ngaySinh: "",
      matKhau: "",
    },
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      // let newArrNhanVien = [...arrNhanVien];
      // newArrNhanVien.push(values);
      // setArrNhanVien(newArrNhanVien);
      setArrNhanVien([...arrNhanVien, values]);
      // resetForm là một phương thức cung cấp khả năng clear dữ liệu đang có trong form
      resetForm();
    },
  });
  //
  console.log(arrNhanVien);
  return (
    <div>
      <h2>
        Bài tập quản lí dữ liệu trong form thông qua thư viện Formik và Yup
      </h2>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-5">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900">
                MSNV
              </label>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Vui lòng nhập MSNV"
                name="msnv"
                onChange={handleChange}
                value={values.msnv}
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Tên nhân viên
              </label>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Vui lòng nhập tên nhân viên"
                name="tenNhanVien"
                onChange={handleChange}
                value={values.tenNhanVien}
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Email
              </label>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Vui lòng nhập email"
                name="email"
                onChange={handleChange}
                value={values.email}
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Số điện thoại
              </label>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Vui lòng nhập số điện thoại"
                name="soDienThoai"
                onChange={handleChange}
                value={values.soDienThoai}
              />
            </div>
            <div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Giới tính
                </label>
                <select
                  name="gioiTinh"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  onChange={handleChange}
                  value={values.gioiTinh}
                >
                  <option value="nam">Nam</option>
                  <option value="nu">Nữ</option>
                  <option value="unknow">Chưa biết</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Ngày sinh
              </label>
              <DatePicker
                onChange={(date, dateString) => {
                  console.log(dateString);
                  // setFieldValue cung cấp khả năng cập nhật dữ liệu cho thuộc tính được quản lí bởi formik, khi gọi tới cần truyền 2 giá trị, một là tên thuộc tính cần cập nhật, 2 sẽ là dữ liệu cập nhật
                  setFieldValue("ngaySinh", dateString);
                }}
                format="DD-MM-YYYY"
              />
            </div>
            <div className="col-span-2">
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Mật khẩu
              </label>
              <input
                type="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Vui lòng nhập mật khẩu"
                name="matKhau"
                onChange={handleChange}
                value={values.matKhau}
              />
            </div>
            <div className="space-x-5">
              <button
                type="submit"
                className="py-2 px-5 bg-black text-white rounded-lg"
              >
                Thêm nhân viên
              </button>
              <button
                type="button"
                className="py-2 px-5 bg-red-500 text-white rounded-lg"
                onClick={handleReset}
              >
                Reset form
              </button>
            </div>
          </div>
        </form>
      </div>
      <TableNhanVien arrNhanVien={arrNhanVien} />
    </div>
  );
};

export default DemoFormReact;
