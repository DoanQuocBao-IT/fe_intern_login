import React from "react";
import "../App.css";

import HeaderPage from "./header/HeaderPage";
import FooterPage from "./footer/FooterPage";
import Home from "../data/Home";
import { Row, Col } from "antd";
import Homepage from "./activities/Homepage";
import Community from "./activities/Community";
import Enterprise from "./activities/Enterprise";

const HomeScreens = () => {
  const { homepage, community, enterprise } = Home;

  return (
    <div>
      <HeaderPage />

      <div className="container">
        <h1>Trang chủ</h1>
        <Homepage events={homepage} />
        <Row>
          <Col xs={24} lg={18} sm={16}>
            <div>
              <Community events={community} />
            </div>

            <div>
              <Enterprise events={enterprise} />
            </div>
          </Col>
          <Col xs={24} lg={6} sm={8}></Col>
        </Row>
      </div>

      <FooterPage />
    </div>
  );
};

export default HomeScreens;
