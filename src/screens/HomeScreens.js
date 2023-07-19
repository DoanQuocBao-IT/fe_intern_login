import React from 'react';
import "../App.css"

import HeaderPage from './header/HeaderPage';
import FooterPage from './footer/FooterPage';
import Homepage from './activities/Homepage';

const Navbar = () => {
  
  return (
    <div>
      <HeaderPage/>
      <h1>Trang chủ</h1>
      <Homepage/>
      <FooterPage/>
    </div>
  );
};

export default Navbar;