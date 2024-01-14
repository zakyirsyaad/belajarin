import React, { useEffect, useState } from 'react';
import Navbar from '../../../component/Fragments/Navbar';
import Footer from '../../../component/Fragments/Footer';
import HeaderClass from '../../../component/Fragments/HeaderClass';
import { Card, Space, Spin } from 'antd';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

export default function Data() {
    const [data, setData] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        axios
            .get("https://belajarin-app.vercel.app/data")
            .then((res) => {
                setData(res.data.subcategories)
                setLoading(false);
            })
            .catch(err => {
                setError(err.message);
            });
    }, []);

    return (
        <div className='writing'>
            <Navbar />
            <HeaderClass>Data   </HeaderClass>
            {loading && <Spin size="large" fullscreen={true} />}
            {error && <p className="text-danger">{error}</p>}
            <NavLink to=''>
                <Space direction="horzontal" size={16} wrap={true}>
                    {data.map((item) => (
                        <Card
                            key={item.id}
                            title={item.title}
                            style={{ width: 300, height: 300 }}
                        >
                            {item.subMenu.map((submenuItem) => (
                                <p key={submenuItem.uid}>{submenuItem.title}</p>
                            ))}
                        </Card>
                    ))}
                </Space>
            </NavLink>
            <Footer />
        </div>
    );
}
