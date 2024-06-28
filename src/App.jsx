import { Route, Routes } from "react-router-dom";
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
function App() {
  let hoTen = "Minh Khánh";
  return (
    <>
      {/* <h2 className="title">Tôi nằm ở Component App</h2>
      <Home />
      <Header />
      <div className="flex">
        <Navigation />
        <Content />
      </div>
      <Footer />
      <DemoCss />
      <DemoOnclick /> */}
      {/* <DemoUseState />
      <BaiTapHienThiXe /> */}
      {/* <DemoProps abc={hoTen} xyz="ba" /> */}
      {/* <BaiTapHienThiDienThoai /> */}
      <Routes>
        {/* Yêu cầu : thực hiện tạo một tuyến đường với path là ="/" giúp hiển thị component Home.jsx lên trang chủ  */}

        {/* cấu trúc sử dụng template theo quan hệ cha con  */}
        {/* index giúp thực hiện hiển thị component con lên cùng lúc khi người dùng đi tới đúng tuyến đường của component cha  */}
        <Route path="/logo" element={<HomeTemplate />}>
          <Route path="" element={<Home />} />
          <Route index element={<BaiTapHienThiDienThoai />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
