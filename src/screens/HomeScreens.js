import React from 'react';
import { Layout, Menu, Typography, Tabs } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import "../App.css"
import Leaderboard from './Leaderboard';
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
const { TabPane } = Tabs;

const Navbar = () => {
  const [current, setCurrent] = useState('0');
  const navigate = useNavigate();
  const [selectedMonth, setSelectedMonth] = useState('Tổng');


  const leaderboardData = [
    { ranking: 1, name: 'Nguyễn Hà Kiên', distance: 10, month: 'Tổng' },
    { ranking: 1, name: 'Nguyễn Hà Kiên', distance: 12, month: 'Tháng 7' },
    { ranking: 1, name: 'Nguyễn Hà Kiên', distance: 88, month: 'Tháng 6' },
    { ranking: 2, name: 'Nguyễn Hà Kiên', distance: 36, month: 'Tổng' },
    { ranking: 2, name: 'Nguyễn Hà Kiên', distance: 19, month: 'Tháng 7' },
    { ranking: 2, name: 'Nguyễn Hà Kiên', distance: 45, month: 'Tháng 6' },
    { ranking: 3, name: 'Nguyễn Hà Kiên', distance: 31, month: 'Tổng' },
    { ranking: 4, name: 'Nguyễn Hà Kiên', distance: 15, month: 'Tổng' },
    { ranking: 3, name: 'Nguyễn Hà Kiên', distance: 79, month: 'Tháng 7' },
    { ranking: 3, name: 'Nguyễn Hà Kiên', distance: 30, month: 'Tháng 6' },
    { ranking: 5, name: 'Nguyễn Hà Kiên', distance: 26, month: 'Tổng' },
    { ranking: 4, name: 'Nguyễn Hà Kiên', distance: 41, month: 'Tháng 7' },
    { ranking: 4, name: 'Nguyễn Hà Kiên', distance: 55, month: 'Tháng 6' },
    { ranking: 6, name: 'Nguyễn Hà Kiên', distance: 61, month: 'Tổng' },
    { ranking: 5, name: 'Nguyễn Hà Kiên', distance: 92, month: 'Tháng 6' },


  ];

  const handleClickLogin = () => {
    navigate("/login")
  }
  const handleClick = (e) => {
    if (current !== e.key) {
      setCurrent(e.key);
    }
  };
  const handleMonthChange = (month) => {
    setSelectedMonth(month);
  };
  return (
    <div>
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        <div className="logo" style={{ flex: 1, marginLeft: "200px" }}>
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

          <Menu.Item key="5" icon={<LoginOutlined />} style={{ marginLeft: 'auto' }} onClick={handleClickLogin}>
            Log in
          </Menu.Item>
          <Menu.Item key="6" icon={<BellOutlined />} style={{ marginRight: '150px' }} onClick={handleClick}>
            Notifications
          </Menu.Item>
        </Menu>
      </Header>
      <div>
        <div className="container"        >
          <div>
            <h1>Bảng xếp hạng</h1>
          </div>
        </div>
        <div className="container">
          <Tabs defaultActiveKey="1">
            <TabPane tab="Tổng" key="1">
              <Leaderboard data={leaderboardData.filter((item) => item.month === 'Tổng')} />
            </TabPane>
            <TabPane tab="Tháng 7" key="2">
              <Leaderboard data={leaderboardData.filter((item) => item.month === 'Tháng 7')} />
            </TabPane>
            <TabPane tab="Tháng 6" key="3">
              <Leaderboard data={leaderboardData.filter((item) => item.month === 'Tháng 6')} />
            </TabPane>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Navbar;