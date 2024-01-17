import React from 'react';
import { MenuOutlined, UserOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Space } from 'antd';
import { NavLink } from 'react-router-dom';
import Profile from '../Auth/Profile';
import logo from '../../Assets/logo-belajarin.png';

export default function NavbarMentor() {
    const user = JSON.parse(localStorage.getItem('user'));
    const uid = localStorage.getItem('uid');

    const menu = (
        <Menu>
            <Menu.Item key="1" icon={<UserOutlined />}>
                <NavLink to={`/HomeMentor/${user}/${uid}`}>Dashboard</NavLink>
            </Menu.Item>
            <Menu.Item key="2" icon={''}>
                <NavLink to="addMateri">Class</NavLink>
            </Menu.Item>
            <Menu.Item key="3" icon={''}>
                Transaction
            </Menu.Item>
            <Menu.Item key="4" icon={''}>
                Chats
            </Menu.Item>
        </Menu>
    );

    return (
        <div className="mentor-nav">
            <Space wrap>
                <Dropdown overlay={menu} placement="bottomRight">
                    <Space>
                        <MenuOutlined className="mentor-menu" />
                    </Space>
                </Dropdown>
                <span>
                    <img src={logo} alt="" />
                </span>
            </Space>
            <Profile />
        </div>
    );
}
