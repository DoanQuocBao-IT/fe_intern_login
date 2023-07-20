import React from "react";
import { Layout, Menu, Typography, Col, Row } from "antd";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../App.css";
import {
  HomeOutlined,
  CompassOutlined,
  TeamOutlined,
  LoginOutlined,
  BellOutlined,
  DownOutlined,
} from "@ant-design/icons";
import SideBar from "./Component/SideBar";
import { SidebarTable } from "./data/SidebarTable";

const { Header } = Layout;
const { Title } = Typography;
const { SubMenu } = Menu;
const Navbar = () => {
  const [current, setCurrent] = useState("0");
  const navigate = useNavigate();

  const handleClickLogin = () => {
    navigate("/login");
  };
  const handleClick = (e) => {
    if (current !== e.key) {
      setCurrent(e.key);
    }
  };

  // Add Table Data
  const rankTableData = SidebarTable[0].rank;
  const clubTableData = SidebarTable[0].club;
  const rankTableColumns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      colSpan: 2,

      dataIndex: "ImageURL",
      key: "ImageURL",
      render: (theImageURL) => (
        <img style={{ width: "50px", borderRadius: "50%" }} src={theImageURL} alt={theImageURL} />
      ),
    },
    {
      dataIndex: "name",
      colSpan: 0,
      key: "name",
    },

    { title: "Km", dataIndex: "km", key: "km" },
  ];

  const clubTableColumns = [
    {
      title: "Name",
      colSpan: 2,

      dataIndex: "ImageURL",
      key: "ImageURL",
      render: (theImageURL) => (
        <img style={{ width: "100px" }} src={theImageURL} alt={theImageURL} />
      ),
    },

    {
      dataIndex: "name",
      colSpan: 0,
      key: "name",
    },
    { title: "Km", dataIndex: "km", key: "km" },
  ];

  return (
    <>
      <Header style={{ display: "flex", alignItems: "center" }}>
        <div className="logo" style={{ flex: 1, marginLeft: "200px" }}>
          <img src="https://mobirace.net/Themes/images/logo_mobirace.png"></img>
        </div>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["1"]}
          style={{ flex: 6 }}
          className="ant-menu-dark">
          <Menu.Item key="1" icon={<HomeOutlined />} onClick={handleClick}>
            Home
          </Menu.Item>
          <SubMenu
            key="2"
            icon={<CompassOutlined />}
            title={
              <span>
                Explore <DownOutlined />
              </span>
            }
            popupOffset={[-16, -6]}
            popupClassName="custom-submenu"
            className="custom-submenu-container">
            <Menu.Item key="2" onClick={handleClick}>
              Option 1
            </Menu.Item>
            <Menu.Item key="3" onClick={handleClick}>
              Option 2
            </Menu.Item>
          </SubMenu>
          <Menu.Item key="4" icon={<TeamOutlined />} onClick={handleClick}>
            Groups
          </Menu.Item>

          <Menu.Item
            key="5"
            icon={<LoginOutlined />}
            style={{ marginLeft: "auto" }}
            onClick={handleClickLogin}>
            Log in
          </Menu.Item>
          <Menu.Item
            key="6"
            icon={<BellOutlined />}
            style={{ marginRight: "150px" }}
            onClick={handleClick}>
            Notifications
          </Menu.Item>
        </Menu>
      </Header>

      <div className="container">
        <Row>
          <Col lg={18} md={16} xs={24}></Col>
          <Col lg={6} md={8} xs={24}>
            <div>
              <SideBar
                title="Bang xep hang"
                tableData={rankTableData}
                tableColumns={rankTableColumns}></SideBar>
              <SideBar
                title="CLB"
                tableData={clubTableData}
                tableColumns={clubTableColumns}></SideBar>
              <div>
                <h3>Thống kê</h3>
                <div className="table-responsive">
                  <table style={{ width: "100%" }}>
                    <tbody>
                      <tr className="table-items">
                        <td>Thành viên</td>
                        <td>13214 </td>
                      </tr>

                      <tr className="table-items">
                        <td>So km da chay</td>
                        <td>13214 </td>
                      </tr>

                      <tr className="table-items">
                        <td>So clb</td>
                        <td>13214 </td>
                      </tr>

                      <tr className="table-items">
                        <td>So giai chay</td>
                        <td>13214 </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Navbar;
