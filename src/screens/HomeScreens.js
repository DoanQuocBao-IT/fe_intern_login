import React from "react";
import "../App.css";

import HeaderPage from "./header/HeaderPage";
import FooterPage from "./footer/FooterPage";
import Home from "../data/Home";
import Homepage from "./activities/Homepage";
import Community from "./activities/Community";
import Enterprise from "./activities/Enterprise";

const HomeScreens = () => {
  const { homepage, community, enterprise } = Home;

  return (
    <div>
      <HeaderPage />

      <div className="center">
        <h1>Trang chủ</h1>
        <Homepage events={homepage} />
        <div>
          <Community events={community} />
          <Enterprise events={enterprise} />
        </div>
      </div>

      <FooterPage />
    </div>
  );
};

export default HomeScreens;
