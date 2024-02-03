import { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout as LayoutAntd, Menu, Button, theme } from "antd";
import { Outlet, useNavigate } from "react-router-dom";

const { Header, Sider, Content } = LayoutAntd;

const Layout = () => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const hanleMenuClick = (info) => {
    navigate(info.key);
  };

  const items = [
    {
key:"/home",
icon:<UserOutlined />,
label:"trang chu"
    },
    {
      key: "/profile",
      icon: <UserOutlined />,
      label: "thong tin nguoi dung",
    },
    {
      key: "/product",
      icon: <VideoCameraOutlined />,
      label: "Danh sách sản phẩm",
    },
   
  ];

  return (
    <LayoutAntd>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={items}
          onClick={hanleMenuClick}
        />
      </Sider>
      <LayoutAntd>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          {<Outlet />}
        </Content>
      </LayoutAntd>
    </LayoutAntd>
  );
};

export default Layout;
