import React from 'react';
import { CaretDownOutlined, LogoutOutlined, UserOutlined, } from '@ant-design/icons';
import { Dropdown, Space, Avatar, Menu } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../Redux/authSlice';

const Profile = () => {
    const auth = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
    };

    const nama = localStorage.getItem('nama');
    const foto = localStorage.getItem('Foto');

    const menu = (
        <Menu >
            <Menu.Item key="1" icon={<UserOutlined />}>
                Profile
            </Menu.Item>
            <Menu.Item key="2" icon={<LogoutOutlined />} onClick={handleLogout}>
                Logout
            </Menu.Item>
        </Menu>
    );

    return (
        <Space wrap>
            <Dropdown overlay={menu} placement="bottom">
                <Space className='nav-profile'>
                    <Avatar src={foto} alt="Profile" />
                    <span>{auth.user} {nama}</span>
                    <CaretDownOutlined />
                </Space>
            </Dropdown>
        </Space>
    );
};

export default Profile;
