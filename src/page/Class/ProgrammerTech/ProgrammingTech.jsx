import React, { useEffect, useState } from 'react';
import Navbar from '../../../component/Fragments/Navbar';
import Footer from '../../../component/Fragments/Footer';
import HeaderClass from '../../../component/Fragments/HeaderClass';
import { Card, Space, Spin } from 'antd';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

export default function ProgrammingTech() {
    const [data, setData] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get("https://belajarin-app.vercel.app/programming")
            .then((res) => {
                setData(res.data.subcategories)
                setLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    return (
        <div className='writing'>
            <Navbar />
            <HeaderClass>Programming & Tech</HeaderClass>
            {loading && <Spin size="large" fullscreen={true} />}
            {error && <p className="text-danger">{error}</p>}
            <NavLink to='' id='class-link'>
                <Space direction="horizontal" size={16} wrap={true}>
                    {data.map((item) => (
                        <Card
                            key={item.id}
                            title={item.title}
                            style={{ width: 300, height: 300 }}
                        >
                            {item.subMenu.map((submenuItem) => (
                                <NavLink
                                    key={submenuItem.uid}
                                    to={`/ProgrammingTech/${submenuItem.uid}`}
                                    className="class-submenu"
                                >
                                    <p>{submenuItem.title}</p>
                                </NavLink>
                            ))}
                        </Card>
                    ))}
                </Space>
            </NavLink>
            <Footer />
        </div>
    );
}
