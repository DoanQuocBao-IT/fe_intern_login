import React from "react";
import "../App.css";

import HeaderPage from "./header/HeaderPage";
import FooterPage from "./footer/FooterPage";
import Home from "../data/Home";
import { Row, Col, Tabs } from "antd";
import Homepage from "./activities/Homepage";
import Community from "./activities/Community";
import Enterprise from "./activities/Enterprise";
import { SidebarTable } from "../data/SidebarTable";
import SideBar from "./activities/SideBar";
const { TabPane } = Tabs;
const HomeScreens = () => {
  const { homepage, community, enterprise } = Home;

  // Add Data for table
  const rankTableData = SidebarTable[0].rank;
  const clubTableData = SidebarTable[0].club;
  const rankTableColumns = [
    {
      title: "Rank",
      dataIndex: "ranking",
      key: "ranking",
    },

    {
      title: "Name",
      colSpans: 2,
      dataIndex: "ImageURL",
      key: "ImageURL",
      render: (ImageURL) => (
        <img src={ImageURL} alt="Data" style={{ width: "50px", borderRadius: "50%" }} />
      ),
    },

    {
      colSpans: 0,
      dataIndex: "name",
      key: "name",
    },

    {
      title: "Km",
      dataIndex: "distance",
      key: "distance",
    },
  ];

  const clubTableColumns = [];
  return (
    <div>
      <HeaderPage />

      <div className="container">
        <h1>Trang chủ</h1>
        <Homepage events={homepage} />
        <Row>
          <Col xs={24} lg={18} md={16}>
            <div>
              <Community events={community} />

              <Enterprise events={enterprise} />
            </div>
          </Col>
          <Col xs={24} lg={6} md={8}>
            <div>
              <h2>Bang xep hang</h2>
              {/* Ranking */}
              <Tabs defaultActiveKey="1">
                <TabPane tab="Tong" key="1">
                  <SideBar
                    tableData={rankTableData.filter((item) => item.month === "Tổng")}
                    tableColumns={rankTableColumns}></SideBar>
                </TabPane>
                <TabPane tab="Thang 7" key="2">
                  <SideBar
                    tableData={rankTableData.filter((item) => item.month === "Tháng 7")}
                    tableColumns={rankTableColumns}></SideBar>{" "}
                </TabPane>
                <TabPane tab="Thang 6" key="3">
                  <SideBar
                    tableData={rankTableData.filter((item) => item.month === "Tháng 6")}
                    tableColumns={rankTableColumns}></SideBar>{" "}
                </TabPane>
              </Tabs>
            </div>
          </Col>
        </Row>
      </div>

      <FooterPage />
    </div>
  );
};

export default HomeScreens;
