import React from "react";
import { useRoutes } from "react-router-dom";
import NotFound from "../pages/NotFound/NotFound";
import HomeTemplate from "../template/HomeTemplate/HomeTemplate";
import BaiTapHienThiDienThoai from "../components/BaiTap/BaiTapHienThiDienThoai/BaiTapHienThiDienThoai";
import BaiTapHienThiXe from "../components/BaiTap/BaiTapHienThiXe/BaiTapHienThiXe";
import HomePage from "../pages/HomePage/HomePage";

const CustomRoute = () => {
  let routes = useRoutes([
    {
      path: "*",
      element: <NotFound />,
    },
    {
      path: "/",
      element: <HomeTemplate />,
      children: [
        {
          path: "bai-tap-hien-thi-dien-thoai",
          element: <BaiTapHienThiDienThoai />,
        },
        {
          path: "bai-tap-hien-thi-xe",
          element: <BaiTapHienThiXe />,
        },
        {
          index: true,
          element: <HomePage />,
        },
      ],
    },
  ]);
  return <div>CustomRoute</div>;
};

export default CustomRoute;
