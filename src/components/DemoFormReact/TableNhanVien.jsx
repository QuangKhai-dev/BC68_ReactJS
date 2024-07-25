import React from "react";
import { Space, Table, Tag } from "antd";
import { Link } from "react-router-dom";
const columns = [
  {
    title: "MSNV",
    dataIndex: "msnv",
    key: "name",
  },
  {
    title: "Tên nhân viên",
    dataIndex: "tenNhanVien",
    key: "age",
  },
  {
    title: "Số điện thoại",
    dataIndex: "soDienThoai",
    key: "address",
  },
  {
    title: "Giới tính",
    key: "tags",
    dataIndex: "gioiTinh",
    render: (text) => {
      let colorTag =
        text == "nam" ? "geekblue" : text == "nu" ? "volcano" : "purple";
      return <Tag color={colorTag}>{text.toUpperCase()}</Tag>;
    },
  },
  {
    title: "Ngày sinh",
    dataIndex: "ngaySinh",
    key: "action",
  },
  {
    title: "Hành động",
    render: () => {
      return (
        <>
          <button className="py-2 px-5 bg-red-500 text-white rounded-md">
            Xoá
          </button>
          <button className="py-2 px-5 bg-yellow-500 rounded-md ml-3">
            Sửa
          </button>
        </>
      );
    },
  },
];

const TableNhanVien = ({ arrNhanVien }) => {
  return <Table columns={columns} dataSource={arrNhanVien} />;
};

export default TableNhanVien;
