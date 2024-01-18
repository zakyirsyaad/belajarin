import React from 'react';
import { CaretDownOutlined, LogoutOutlined, UserOutlined, } from '@ant-design/icons';
import { Dropdown, Space, Avatar, Menu } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../Redux/authSlice';
import { signOutUser } from './FirebaseConfig';
import { NavLink } from 'react-router-dom';

const Profile = () => {
    const auth = useSelector((state) => state.auth);
    const photoURL = useSelector((state) => state.auth.photoURL);

    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
        signOutUser()
    };

    const nama = localStorage.getItem('nama');
    const foto = localStorage.getItem('Foto');
    const uid = localStorage.getItem('uid');

    const menu = (
        <Menu >
            <Menu.Item key="1" icon={<UserOutlined />}>
                Profile
            </Menu.Item>
            <Menu.Item key="2" icon={<UserOutlined />}>
                <NavLink to={`/MemberClass/${uid}`}>
                    Class
                </NavLink>
            </Menu.Item>
            <Menu.Item key="3" icon={<LogoutOutlined />} onClick={handleLogout}>
                Logout
            </Menu.Item>
        </Menu >
    );

    return (
        <Space wrap>
            <Dropdown overlay={menu} placement="bottom">
                <Space className='nav-profile'>
                    <Avatar src={foto || photoURL} alt="Profile" />
                    <span>{auth.user} {nama}</span>
                    <CaretDownOutlined />
                </Space>
            </Dropdown>
        </Space>
    );
};

export default Profile;
