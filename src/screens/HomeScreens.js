import React, {useContext} from 'react';
import { Layout, Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useObserver } from 'mobx-react-lite';
import { useState } from 'react';
import { DataContext } from '../data/DataProvider';

import "../App.css"
import {
  HomeOutlined,
  CompassOutlined,
  TeamOutlined,
  LoginOutlined,
  UserOutlined,
  BellOutlined,
  DownOutlined
} from '@ant-design/icons';
const { Header } = Layout;
const { SubMenu } = Menu;
const HomePage = () => {
  const [current, setCurrent] = useState('0');
  const navigate = useNavigate();
  const {store}  = useContext(DataContext);
  const {authStore, itemStore} = store;
  

  const handleAccountClick = () => {
    if (!authStore.isAuthenticated) {
      navigate("/login")
    }
  };

  const handleClick = (e) => {
    const selectedKey = e.key;
    if (current !== selectedKey) {
      setCurrent(selectedKey);
      if (selectedKey === '1') {
        navigate('/');
      } else if (selectedKey === '5') {
        navigate('/loginsuccess');
      } else if (selectedKey === '6') {
          navigate("/login");
      } else if (selectedKey === '9') {
          authStore.logout();
          navigate("/");   
      }
    }
  };
  
  return useObserver(() => (
    <Header style={{ display: 'flex', alignItems: 'center' }}>
      <div className="logo" style={{ flex: 1 , marginLeft: "200px"}}>
          <img src='https://mobirace.net/Themes/images/logo_mobirace.png' />
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
        <Menu.Item key="5"  onClick={handleClick}>
          Show
        </Menu.Item>
        
        <Menu.Item key="6" style={{ marginLeft: 'auto' }} onClick={handleAccountClick} icon={authStore.isAuthenticated ? <UserOutlined /> : <LoginOutlined />}>
          {authStore.isAuthenticated ? (
            <SubMenu  
              key="7" 
              title={
                <span>
                  Tài khoản <DownOutlined />
                </span>
            }
            popupOffset={[-16, -6]}
            popupClassName="custom-submenu">
              <Menu.Item key="8">
                  User: {authStore.username}
              </Menu.Item>
              <Menu.Item key="9" onClick={handleClick}>
                Đăng xuất
              </Menu.Item>
            </SubMenu> 
          ) : (
            'Login'
          )}
        </Menu.Item>
        <Menu.Item key="7" icon={<BellOutlined />} style={{ marginRight: '150px'}} onClick={handleClick}>
          Notifications
        </Menu.Item>
      </Menu>
    </Header>
  ));
};
export default HomePage;