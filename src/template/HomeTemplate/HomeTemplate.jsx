import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { path } from "./../../common/path";
const { Header, Content, Footer } = Layout;
const items = new Array(15).fill(null).map((_, index) => ({
  key: index + 1,
  label: `nav ${index + 1}`,
}));
const HomeTemplate = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const arrNavLink = [
    {
      content: "Home",
      to: path.homePage,
    },
    {
      content: "BT Hiển thị điện thoại",
      to: path.baiTapDienThoai,
    },
    {
      content: "BT Hiển thị xe",
      to: path.baiTapHienThiXe,
    },
    {
      content: "Demo Redux",
      to: "demo-redux",
    },
    {
      content: "Demo Props",
      to: "demo-props",
    },
    {
      content: "Game lắc xí ngầu",
      to: "bai-tap-lac-xi-ngau",
    },
    {
      content: "Demo useEffect",
      to: "demo-use-effect",
    },
    {
      content: "Demo UseSearchParam",
      to: "demo-use-search-param",
    },
    {
      content: "Demo UseRef",
      to: "demo-use-ref",
    },
  ];
  return (
    <div>
      <Layout className="h-screen flex flex-col">
        <Header
          style={{
            display: "flex",
            alignItems: "center",
          }}
          className="space-x-5"
        >
          {/* <Link className="text-white" to={"/logo"}>
            Trang chủ
          </Link> */}

          {arrNavLink.map(({ content, to }, index) => {
            return (
              <NavLink
                to={to}
                className={({ isActive, isPending }) => {
                  // isActive là giá trị nhận được khi react router dom kiểm tra xem đường dẫn url có trùng với giá trị có trong thuộc tính to hay không
                  return isActive ? "text-red-500" : "text-white";
                }}
              >
                {content}
              </NavLink>
            );
          })}
        </Header>
        <Content
          style={{
            padding: "0 48px",
          }}
          className="flex-1"
        >
          <div
            className="h-full"
            style={{
              background: colorBgContainer,
              minHeight: 280,
              padding: 24,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet />
          </div>
        </Content>
        {/* <Footer
          style={{
            textAlign: "center",
          }}
        >
          Trang web này được thực hiện bởi Khải
        </Footer> */}
      </Layout>
    </div>
  );
};

export default HomeTemplate;
