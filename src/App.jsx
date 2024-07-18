import { Route, Routes, useRoutes } from "react-router-dom";
import BaiTapHienThiDienThoai from "./components/BaiTap/BaiTapHienThiDienThoai/BaiTapHienThiDienThoai";
import BaiTapHienThiXe from "./components/BaiTap/BaiTapHienThiXe/BaiTapHienThiXe";
import Content from "./components/Content";
import DemoCss from "./components/DemoCss/DemoCss";
import DemoProps from "./components/DemoProps/DemoProps";
import DemoUseState from "./components/DemoUseState/DemoUseState";
import DemoOnclick from "./components/Events/DemoOnclick";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import HomeTemplate from "./template/HomeTemplate/HomeTemplate";
import NotFound from "./pages/NotFound/NotFound";
import HomePage from "./pages/HomePage/HomePage";
import { path } from "./common/path";
import DemoRedux from "./components/DemoRedux/DemoRedux";
import BaiTapLacXiNgau from "./components/BaiTap/BaiTapLacXiNgau/BaiTapLacXiNgau";
import DemoUseEffect from "./components/DemoUseEffect/DemoUseEffect";
import DemoUseEffectDetail from "./components/DemoUseEffect/DemoUseEffectDetail";
import React, { createContext } from "react";

export let ContextHoTen = createContext(null);

function App() {
  let hoTen = "Minh Khánh";
  let routes = useRoutes([
    {
      path: path.notFound,
      element: <NotFound />,
    },
    {
      path: path.homePage,
      element: <HomeTemplate />,
      children: [
        {
          path: path.baiTapDienThoai,
          element: <BaiTapHienThiDienThoai />,
        },
        {
          path: path.baiTapHienThiXe,
          element: <BaiTapHienThiXe />,
        },
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "demo-redux",
          element: <DemoRedux />,
        },
        {
          path: "demo-props",
          element: <DemoProps />,
        },
        {
          path: "bai-tap-lac-xi-ngau",
          element: <BaiTapLacXiNgau />,
        },
        {
          path: "demo-use-effect",
          element: <DemoUseEffect />,
        },
        {
          path: "demo-detail-use-effect/:id",
          element: <DemoUseEffectDetail />,
        },
      ],
    },
  ]);
  return (
    <ContextHoTen.Provider
      value={{
        hoTen: "Quang Khải",
      }}
    >
      {routes}
    </ContextHoTen.Provider>
  );
}

export default App;
