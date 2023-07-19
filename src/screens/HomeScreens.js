import React from 'react';
import "../App.css"

import HeaderPage from './header/HeaderPage';
import FooterPage from './footer/FooterPage';
import Home from '../data/Home';
import Homepage from './activities/Homepage';
import Community from './activities/Community';
import Enterprise from './activities/Enterprise';

const HomeScreens = () => {
  const { homepage, community,enterprise } = Home;

  return (
    <div>
      <HeaderPage/>
      <h1>Trang chủ</h1>
      <Homepage events={homepage}/>
      <Community events={community}/>
      <Enterprise events={enterprise}/>
      <FooterPage/>
    </div>
  );
};

export default HomeScreens;