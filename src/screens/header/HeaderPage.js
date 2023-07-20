import React from 'react'
import { Layout, Menu, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import {
    HomeOutlined,
    CompassOutlined,
    TeamOutlined,
    LoginOutlined,
    BellOutlined,
    DownOutlined
  } from '@ant-design/icons';

const { Header } = Layout;
const { Title } = Typography;
const { SubMenu } = Menu;
const HeaderPage = () => {
    const [current, setCurrent] = useState('0');
    const navigate = useNavigate();
    
    const handleClickLogin = () => {
      navigate("/login")
    }
    const handleClick = (e) => {
      if (current !== e.key) {
        setCurrent(e.key);
      }
    };
    return (
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        <div className="logo" style={{ flex: 1 , marginLeft: "200px"}}>
            <img src='https://mobirace.net/Themes/images/logo_mobirace.png'></img>
        </div>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} style={{ flex: 6 }} className="ant-menu-dark">
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
            className="custom-submenu-container"
          >
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
          
          <Menu.Item key="5" icon={<LoginOutlined />} style={{ marginLeft: 'auto'}} onClick={handleClickLogin}>
            Log in
          </Menu.Item>
          <Menu.Item key="6" icon={<BellOutlined />} style={{ marginRight: '150px'}} onClick={handleClick}>
            Notifications
          </Menu.Item>
        </Menu>
      </Header>
    );
};

export default HeaderPage