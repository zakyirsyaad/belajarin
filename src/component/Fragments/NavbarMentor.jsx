import { MenuOutlined, UserOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Space } from 'antd';
import React from 'react'
import Profile from '../Auth/Profile';
import { NavLink } from 'react-router-dom';
import logo from '../../Assets/logo-belajarin.png'

export default function NavbarMentor() {
    const menu = (
        <Menu >
            <Menu.Item key="1" icon={<UserOutlined />}>
                <NavLink to='/HomeMentor'>Dashboard</NavLink>
            </Menu.Item>
            <Menu.Item key="2" icon={''}>
                <NavLink to='addMateri'>Class</NavLink>
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
        <div className='mentor-nav'>
            <Space wrap>
                <Dropdown overlay={menu} placement="bottomRight">
                    <Space>
                        <MenuOutlined className='mentor-menu' />
                    </Space>
                </Dropdown>
                <span><img src={logo} alt="" srcset="" /></span>
            </Space>
            <Profile />
        </div>
    )
}
